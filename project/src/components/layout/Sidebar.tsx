import React from 'react';
import { NavigationItem } from '../../types';
import * as LucideIcons from 'lucide-react';


//navbar details
interface SidebarProps {
  navigationLinks: NavigationItem[];
}


// recall the typescript
const Sidebar: React.FC<SidebarProps> = ({ navigationLinks }) => {
  // we used prop here
  
  // used a libary for icon
  const getIcon = (iconName: string) => {
    const LucideIcon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    // add 1st index all uppercase and slice method
    return LucideIcon ? <LucideIcon className="h-5 w-5" /> : null;
  };

  return (
    <aside className="bg-orange-200 w-10 md:w-64 shadow-sm h-full flex flex-col py-6 transition-all">
      <div className="px-4 mb-6 md:mb-10">
        <h2 className="text-ls font-semibold text-gray-500 uppercase tracking-wider md:block hidden">General</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-1">
          {/*=============================== used a array map methos to display the    ====================================*/}
          {navigationLinks.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 text-sm ${
                  item.isActive
                    ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                    : 'text-gray-500 hover:bg-gray-50'
                } transition-colors`}
                
              >
                {/*=============================== icon added here from the library    ====================================*/}
                <span className="flex-shrink-0">
                  {getIcon(item.icon)}
                </span>
                <span className="ml-3 hidden md:block">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;