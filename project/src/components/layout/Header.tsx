import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { UserProfile } from '../../types';

interface HeaderProps {
  user: UserProfile;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-orange-200 py-4 px-6 flex items-center justify-between shadow-sm z-10">
        <h1 className="text-xl font-semibold text-blue-600">Healthcare.</h1>
        <div className="ml-10 hidden md:flex relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="hidden sm:flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
          <Plus className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
          <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-blue-100">
            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;