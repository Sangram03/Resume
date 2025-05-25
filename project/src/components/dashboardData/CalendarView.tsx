import React from 'react';
import { CalendarDay } from '../../types';

interface CalendarViewProps {
  days: CalendarDay[];
  month: string;
  year: number;
  featuredAppointments: {
    id: string;
    title: string;
    doctor: string;
    time: string;
    date: string;
  }[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ 
  days, 
  month, 
  year,
  featuredAppointments
}) => {
  // used  a variable to show the data in format
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-orange-200 rounded-lg shadow-sm mt-6 border border-black p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          {month} {year}
        </h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-100">
            {/*===============  show the calendar quickly==================== */}
            <svg  className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            {/*===============  show the calendar quickly==================== */}
            <svg  className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/*=============== map method to get the data ==================================== */}
        {weekdays.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {/*=============================== used a array map methos to display the    ====================================*/}
        {days.map((day, index) => (
          <div 
            key={index}
            className={`aspect-square p-1 text-xs ${
              !day.isCurrentMonth 
                ? 'text-gray-700' 
                : day.isToday 
                  ? 'bg-blue-50 text-blue-600 rounded-lg font-semibold' 
                  : 'text-gray-700'
            }`}
          >
            <div className="h-full w-full p-1">
              <div className="flex justify-center items-center h-6 w-6 mx-auto">
                {day.date}
              </div>
              {day.appointments && day.appointments.length > 0 && (
                <div className="mt-1 space-y-1">
                  {/*=============================== used a array map methos to display the    ====================================*/}
                  {day.appointments.map((apt, idx) => (
                    <div 
                      key={idx} 
                      className="text-[9px] px-1 py-0.5 bg-blue-100 text-blue-600 rounded"
                      title={apt.title || 'Appointment'}
                    >
                      {apt.time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Featured Appointments </h3>
        
{/*=============================== used a array map methos to display the    ====================================*/}
        {featuredAppointments.map(appointment => (
          <div key={appointment.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="text-sm font-medium text-gray-800">{appointment.title}</h4>
            <p className="text-xs text-gray-500">{appointment.doctor}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-xs text-gray-500">{appointment.date}</span>
              <span className="text-xs font-medium text-blue-600">{appointment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;