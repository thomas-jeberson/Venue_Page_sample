import { Venue } from '../types/venue';

export const mockVenue: Venue = {
  id: '1',
  name: 'Grand Sapphire Banquet Hall',
  description: 'A stunning venue perfect for weddings, corporate events, and celebrations. Features elegant interiors, state-of-the-art facilities, and professional event management services.',
  images: [
    'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  ],
  price: 5000,
  priceUnit: 'hour',
  rating: 4.8,
  reviewCount: 124,
  capacity: 300,
  location: {
    city: 'Mumbai',
    locality: 'Andheri West',
    fullAddress: '123 Main Street, Andheri West, Mumbai, Maharashtra 400053',
    coordinates: {
      lat: 19.1136,
      lng: 72.8697,
    },
  },
  amenities: [
    { id: '1', name: 'Free WiFi', icon: 'Wifi' },
    { id: '2', name: 'Parking', icon: 'Car' },
    { id: '3', name: 'Air Conditioning', icon: 'Wind' },
    { id: '4', name: 'Sound System', icon: 'Music' },
    { id: '5', name: 'Stage', icon: 'Drama' },
    { id: '6', name: 'Catering', icon: 'UtensilsCrossed' },
    { id: '7', name: 'Projector', icon: 'Projector' },
    { id: '8', name: 'Restrooms', icon: 'DoorOpen' },
  ],
  availability: [
    {
      date: '2026-04-01',
      slots: [
        { time: '09:00 AM', available: true },
        { time: '12:00 PM', available: true },
        { time: '03:00 PM', available: false },
        { time: '06:00 PM', available: true },
      ],
    },
    {
      date: '2026-04-02',
      slots: [
        { time: '09:00 AM', available: true },
        { time: '12:00 PM', available: false },
        { time: '03:00 PM', available: true },
        { time: '06:00 PM', available: true },
      ],
    },
    {
      date: '2026-04-03',
      slots: [
        { time: '09:00 AM', available: false },
        { time: '12:00 PM', available: true },
        { time: '03:00 PM', available: true },
        { time: '06:00 PM', available: false },
      ],
    },
  ],
  rules: [
    'No smoking inside the premises',
    'Alcohol consumption allowed with prior permission',
    'Event must end by 11:00 PM as per local regulations',
    'Decorations must not damage walls or furniture',
    'External caterers allowed with additional charge',
  ],
  cancellationPolicy: 'Free cancellation up to 7 days before the event. 50% refund for cancellations between 3-7 days. No refund for cancellations within 3 days of the event.',
  owner: {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@venue.com',
  },
  additionalInfo: 'Complimentary valet parking service available. Setup and cleanup services included. Professional event coordinator on-site during the event.',
};
