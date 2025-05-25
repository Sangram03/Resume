import React from 'react';
import { Appointment } from '../../types';
import SimpleAppointmentCard from './SimpleAppointmentCard';

interface UpcomingScheduleProps {
  appointments: Appointment[];
}

const UpcomingSchedule: React.FC<UpcomingScheduleProps> = ({ appointments }) => {
  // Group appointments by day
  const groupedAppointments: Record<string, Appointment[]> = appointments.reduce((acc, appointment) => {
    // used reduces method
    const day = appointment.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);

  return (
    <div className="bg-white border border-black mt-6 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        {/*=============================== used a  Object array map methos to display the    ====================================*/}
        {Object.entries(groupedAppointments).map(([day, dayAppointments]) => (
          <div key={day}>
            <h3 className="text-sm font-medium text-gray-500 mb-3">On {day}</h3>
            <div className="space-y-3">
              {dayAppointments.map(appointment => (
                <SimpleAppointmentCard 
                  key={appointment.id} 
                  appointment={appointment} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;