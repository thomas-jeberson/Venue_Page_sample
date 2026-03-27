export interface Venue {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  priceUnit: 'hour' | 'day';
  rating: number;
  reviewCount: number;
  capacity: number;
  location: {
    city: string;
    locality: string;
    fullAddress: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  amenities: Amenity[];
  availability: DateSlot[];
  rules: string[];
  cancellationPolicy: string;
  owner: {
    name: string;
    phone: string;
    email: string;
  };
  additionalInfo: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface DateSlot {
  date: string;
  slots: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
