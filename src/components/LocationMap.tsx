import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
  fullAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function LocationMap({ fullAddress, coordinates }: LocationMapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coordinates.lat},${coordinates.lng}&zoom=15`;

  const openInMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`,
      '_blank'
    );
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Location</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
          <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-900 font-medium">{fullAddress}</p>
          </div>
        </div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue location map"
          />
        </div>

        <button
          onClick={openInMaps}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-all"
        >
          <Navigation className="w-5 h-5" />
          Get Directions
        </button>
      </div>
    </div>
  );
}
