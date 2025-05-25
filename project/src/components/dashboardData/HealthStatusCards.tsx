import React from 'react';


// Define an interface for used the props
interface HealthStatusDetail {
  id: string;
  label: string;
  status: 'healthy' | 'warning' | 'critical';
  lastCheckup: string;
  nextCheckup: string;
  description: string;
}
// used for define state or custom type
interface HealthStatusCardsProps {
  healthDetails: HealthStatusDetail[];
}

// used for interface components for used typescript 
const HealthStatusCards: React.FC<HealthStatusCardsProps> = ({ healthDetails }) => {
  const getStatusColor = (status: string) => {
    // used for switch case format added here
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBg = (status: string) => {
    // used for switch case format added here
    switch (status) {
      case 'healthy':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'critical':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="grid gap-5 mt-6">
      {/*=============================== used a array map methos to display the    ====================================*/}
      {healthDetails.map((item) => (
        <div 
          key={item.id}
          className={`p-4 rounded-lg shadow-sm border border-black ${getStatusBg(item.status)} border border-gray-100`}
        >
          <div className="flex items-center mb-2">
            <div className={`h-3 w-3 rounded-full ${getStatusColor(item.status)} mr-2`}></div>
            <h3 className="font-medium text-gray-800">{item.label}</h3>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Last checkup: {item.lastCheckup}</p>
            <p>Next appointment: {item.nextCheckup}</p>
            <p className="mt-2 text-xs font-medium">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;