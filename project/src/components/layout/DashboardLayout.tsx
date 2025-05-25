import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { NavigationItem, UserProfile } from '../../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  navigationLinks: NavigationItem[];
  user: UserProfile;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  navigationLinks,
  user
}) => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar navigationLinks={navigationLinks} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;