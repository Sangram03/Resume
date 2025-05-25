import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { 
  HealthStatus, 
  Appointment, 
  CalendarDay, 
  ActivityData
} from '../../types';

interface DashboardContentProps {
  healthData: HealthStatus[];
  healthStatusDetails: any[];
  appointments: Appointment[];
  calendarDays: CalendarDay[];
  activityData: ActivityData[];
  featuredAppointments: any[];
}

const DashboardContent: React.FC<DashboardContentProps> = ({ 
  healthData,
  healthStatusDetails,
  appointments,
  calendarDays,
  activityData,
  featuredAppointments
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnatomySection healthData={healthData} />
          <HealthStatusCards healthDetails={healthStatusDetails} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalendarView 
            days={calendarDays} 
            month="October" 
            year={2023}
            featuredAppointments={featuredAppointments}
          />
          <ActivityFeed activityData={activityData} />
        </div>
      </div>
      <div className="lg:col-span-1">
        <UpcomingSchedule appointments={appointments} />
      </div>
    </div>
  );
};

export default DashboardContent;