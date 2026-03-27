import * as LucideIcons from 'lucide-react';
import { Amenity } from '../types/venue';

interface AmenitiesProps {
  amenities: Amenity[];
}

export function Amenities({ amenities }: AmenitiesProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What this place offers</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
          >
            <div className="text-teal-600">
              {getIcon(amenity.icon)}
            </div>
            <span className="font-medium text-gray-800">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
