import { useEffect, useRef, useState } from 'react';
import { Shield, XCircle, User, Info } from 'lucide-react';

interface TimelineSectionProps {
  rules: string[];
  cancellationPolicy: string;
  owner: {
    name: string;
    phone: string;
    email: string;
  };
  additionalInfo: string;
}

interface TimelineItemProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  position: 'left' | 'right';
}

function TimelineItem({ title, content, icon, position }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {position === 'left' ? (
        <>
          <div className="md:text-right md:pr-12 order-2 md:order-1">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold mb-4">
              {icon}
              <span>{title}</span>
            </div>
          </div>

          <div className="md:pl-12 order-1 md:order-2">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              {content}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:pr-12 order-1">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              {content}
            </div>
          </div>

          <div className="md:pl-12 order-2">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold mb-4">
              {icon}
              <span>{title}</span>
            </div>
          </div>
        </>
      )}

      <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-teal-600 rounded-full transform -translate-x-1/2 ring-4 ring-white" />
    </div>
  );
}

export function TimelineSection({
  rules,
  cancellationPolicy,
  owner,
  additionalInfo,
}: TimelineSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Important Information
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 via-teal-400 to-teal-600 transform -translate-x-1/2" />

          <TimelineItem
            title="Venue Rules"
            icon={<Shield className="w-5 h-5" />}
            position="left"
            content={
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <TimelineItem
            title="Cancellation Policy"
            icon={<XCircle className="w-5 h-5" />}
            position="right"
            content={
              <p className="text-gray-700 leading-relaxed">{cancellationPolicy}</p>
            }
          />

          <TimelineItem
            title="Owner Details"
            icon={<User className="w-5 h-5" />}
            position="left"
            content={
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Name</span>
                  <p className="text-gray-900 font-medium">{owner.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Phone</span>
                  <p className="text-gray-900 font-medium">{owner.phone}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Email</span>
                  <p className="text-gray-900 font-medium">{owner.email}</p>
                </div>
              </div>
            }
          />

          <TimelineItem
            title="Additional Information"
            icon={<Info className="w-5 h-5" />}
            position="right"
            content={
              <p className="text-gray-700 leading-relaxed">{additionalInfo}</p>
            }
          />
        </div>
      </div>
    </div>
  );
}
