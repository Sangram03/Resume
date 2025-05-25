import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardContent from './components/dashboardData/DashboardContent';

// Import data
import { navigationLinks } from './data/navigationLinks';
import { healthData, healthStatusDetails } from './data/healthData';
import { appointments, calendarDays, activityData, featuredAppointments } from './data/appointments';
import { currentUser } from './data/userData';

function App() {
  return (
    <DashboardLayout 
      navigationLinks={navigationLinks}
      user={currentUser}
    >
      <DashboardContent 
        healthData={healthData}
        healthStatusDetails={healthStatusDetails}
        appointments={appointments}
        calendarDays={calendarDays}
        activityData={activityData}
        featuredAppointments={featuredAppointments}
      />
    </DashboardLayout>
  );
}

export default App;