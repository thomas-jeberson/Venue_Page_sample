import { Star, Users, MapPin } from 'lucide-react';

interface BookingInfoProps {
  name: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviewCount: number;
  capacity: number;
  city: string;
  locality: string;
  description: string;
  onBookNow: () => void;
}

export function BookingInfo({
  name,
  price,
  priceUnit,
  rating,
  reviewCount,
  capacity,
  city,
  locality,
  description,
  onBookNow,
}: BookingInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {name}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-lg">{rating}</span>
            <span className="text-gray-500">({reviewCount} reviews)</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600" />
            <span className="font-medium">Up to {capacity} guests</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="font-medium">{locality}, {city}</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-100">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-900">
                ₹{price.toLocaleString()}
              </span>
              <span className="text-xl text-gray-600">/ {priceUnit}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Best price guaranteed</p>
          </div>

          <button
            onClick={onBookNow}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">About this venue</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
