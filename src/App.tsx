import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { BookingInfo } from './components/BookingInfo';
import { Amenities } from './components/Amenities';
import { AvailabilityCalendar } from './components/AvailabilityCalendar';
import { LocationMap } from './components/LocationMap';
import { TimelineSection } from './components/TimelineSection';
import { StickyBooking } from './components/StickyBooking';
import { mockVenue } from './data/mockVenue';

function App() {
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleSlotSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);

    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookNow = () => {
    alert(
      selectedDate && selectedTime
        ? `Booking request for ${selectedDate} at ${selectedTime}`
        : 'Please select a date and time slot to continue with booking.'
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <HeroSection images={mockVenue.images} name={mockVenue.name} />

            <div id="booking-section">
              <BookingInfo
                name={mockVenue.name}
                price={mockVenue.price}
                priceUnit={mockVenue.priceUnit}
                rating={mockVenue.rating}
                reviewCount={mockVenue.reviewCount}
                capacity={mockVenue.capacity}
                city={mockVenue.location.city}
                locality={mockVenue.location.locality}
                description={mockVenue.description}
                onBookNow={handleBookNow}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Summary
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-gray-900">
                      ₹{mockVenue.price.toLocaleString()}/{mockVenue.priceUnit}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-semibold text-gray-900">
                      {mockVenue.capacity} guests
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-semibold text-gray-900">
                      {mockVenue.rating} ({mockVenue.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Location</span>
                    <p className="font-semibold text-gray-900 mt-1">
                      {mockVenue.location.locality}, {mockVenue.location.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12">
          <Amenities amenities={mockVenue.amenities} />
        </div>

        <div className="border-t border-gray-200">
          <AvailabilityCalendar
            availability={mockVenue.availability}
            onSlotSelect={handleSlotSelect}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </div>

        <div className="border-t border-gray-200">
          <LocationMap
            fullAddress={mockVenue.location.fullAddress}
            coordinates={mockVenue.location.coordinates}
          />
        </div>
      </div>

      <TimelineSection
        rules={mockVenue.rules}
        cancellationPolicy={mockVenue.cancellationPolicy}
        owner={mockVenue.owner}
        additionalInfo={mockVenue.additionalInfo}
      />

      <StickyBooking
        price={mockVenue.price}
        priceUnit={mockVenue.priceUnit}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onBookNow={handleBookNow}
      />
    </div>
  );
}

export default App;
