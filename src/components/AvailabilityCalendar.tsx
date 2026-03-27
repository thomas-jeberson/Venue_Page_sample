import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { DateSlot } from '../types/venue';

interface AvailabilityCalendarProps {
  availability: DateSlot[];
  onSlotSelect: (date: string, time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
}

export function AvailabilityCalendar({
  availability,
  onSlotSelect,
  selectedDate,
  selectedTime,
}: AvailabilityCalendarProps) {
  const [activeDate, setActiveDate] = useState(availability[0]?.date || '');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleDateSelect = (date: string) => {
    setActiveDate(date);
  };

  const handleTimeSelect = (time: string, available: boolean) => {
    if (available) {
      onSlotSelect(activeDate, time);
    }
  };

  const activeDateSlots = availability.find((slot) => slot.date === activeDate);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Check availability</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-semibold text-gray-900">Select Date</h3>
          </div>

          <div className="space-y-3">
            {availability.map((slot) => {
              const availableCount = slot.slots.filter((s) => s.available).length;
              const isActive = slot.date === activeDate;

              return (
                <button
                  key={slot.date}
                  onClick={() => handleDateSelect(slot.date)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    isActive
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {formatDate(slot.date)}
                    </span>
                    <span
                      className={`text-sm ${
                        availableCount > 0 ? 'text-teal-600' : 'text-red-600'
                      }`}
                    >
                      {availableCount > 0
                        ? `${availableCount} slot${availableCount > 1 ? 's' : ''} available`
                        : 'Fully booked'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-teal-600" />
            <h3 className="text-xl font-semibold text-gray-900">Select Time</h3>
          </div>

          {activeDateSlots ? (
            <div className="grid grid-cols-2 gap-3">
              {activeDateSlots.slots.map((slot) => {
                const isSelected =
                  selectedDate === activeDate && selectedTime === slot.time;

                return (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeSelect(slot.time, slot.available)}
                    disabled={!slot.available}
                    className={`p-4 rounded-lg border-2 font-medium transition-all ${
                      isSelected
                        ? 'border-teal-600 bg-teal-600 text-white'
                        : slot.available
                        ? 'border-gray-200 hover:border-teal-300 bg-white text-gray-900'
                        : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                    {!slot.available && (
                      <div className="text-xs mt-1">Booked</div>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">Select a date to view available times</p>
          )}
        </div>
      </div>
    </div>
  );
}
