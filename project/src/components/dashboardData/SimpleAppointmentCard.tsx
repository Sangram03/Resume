import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Appointment } from '../../types';

interface SimpleAppointmentCardProps {
  appointment: Appointment;
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({ appointment }) => {

  // icon library added also here
  const getIcon = (iconName: string) => {
    if (!iconName) return null;
    
 // heere used four method  split , map, join and slice
    const pascalCase = iconName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    const LucideIcon = (LucideIcons as any)[pascalCase];
    return LucideIcon ? <LucideIcon className="h-4 w-4" /> : null;
  };

  const getStatusColor = (status?: string) => {
    // here we used swich case for multi type state
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-50';
      case 'upcoming':
        return 'text-blue-500 bg-blue-50';
      case 'cancelled':
        return 'text-red-500 bg-red-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="p-3 bg-orange-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        {/* =================== appointment details to get data ================================*/}
        <h3 className="text-sm font-medium text-gray-800">{appointment.title}</h3>
        {/*=================== used backthick for used variable in it ======================= */} 
        <div className={`p-1 rounded-full ${getStatusColor(appointment.status)}`}>
          {appointment.icon && getIcon(appointment.icon)}
        </div>
      </div>
      {appointment.doctor && (
        <p className="text-xs text-gray-500 mb-1">{appointment.doctor}</p>
      )}
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs font-medium text-blue-600">{appointment.time}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;