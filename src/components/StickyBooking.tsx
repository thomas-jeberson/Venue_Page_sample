import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface StickyBookingProps {
  price: number;
  priceUnit: string;
  selectedDate?: string;
  selectedTime?: string;
  onBookNow: () => void;
}

export function StickyBooking({
  price,
  priceUnit,
  selectedDate,
  selectedTime,
  onBookNow,
}: StickyBookingProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{price.toLocaleString()}
                </span>
                <span className="text-gray-600">/ {priceUnit}</span>
              </div>
            </div>

            {(selectedDate || selectedTime) && (
              <div className="flex items-center gap-4 text-sm">
                {selectedDate && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span className="text-gray-900 font-medium">
                      {formatDate(selectedDate)}
                    </span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-lg">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span className="text-gray-900 font-medium">{selectedTime}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={onBookNow}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
