
import React, { useState, useMemo, useEffect } from 'react';
import { menuItems } from '../../constants';
import { MenuItem, SubMenuItem } from '../../types';
import { ChevronDown, LayoutDashboard, School, Search } from '../icons/Icons';

interface SidebarProps {
  isOpen: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

interface NavLinkProps {
    item: MenuItem | SubMenuItem;
    isActive: boolean;
    onClick: (path: string) => void;
    isSubmenu?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick, isSubmenu = false }) => {
    const baseClasses = "flex items-center w-full text-left text-sm rounded-md transition-colors duration-200";
    const padding = isSubmenu ? "pl-12 pr-4 py-2" : "px-4 py-2.5";
    const activeClasses = "bg-[#0ea5e9] text-white";
    const inactiveClasses = "text-[#f9fafb] hover:bg-[#374151]";
    
    return (
        <button
            onClick={() => onClick(item.path)}
            className={`${baseClasses} ${padding} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {'icon' in item && <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />}
            <span className="truncate">{item.name}</span>
        </button>
    );
};


const Sidebar: React.FC<SidebarProps> = ({ isOpen, activePage, setActivePage }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleMenuClick = (path: string) => {
    if (searchTerm.trim()) return;
    setOpenMenus(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const handlePageSelect = (path: string) => {
    setActivePage(path);
  };
  
  const isSubmenuActive = (menu: MenuItem) => {
      return menu.submenus?.some(submenu => submenu.path === activePage) ?? false;
  }

  const filteredMenuItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return menuItems;
    }
    const term = searchTerm.toLowerCase();
    return menuItems.map(item => {
      const mainMatch = item.name.toLowerCase().includes(term);
      const matchingSubmenus = item.submenus?.filter(submenu =>
        submenu.name.toLowerCase().includes(term)
      );
      if (mainMatch) {
        return item;
      }
      if (matchingSubmenus && matchingSubmenus.length > 0) {
        return { ...item, submenus: matchingSubmenus };
      }
      return null;
    }).filter((item): item is MenuItem => item !== null);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const menusToOpen = filteredMenuItems.reduce((acc, item) => {
        if (item.submenus && item.submenus.length > 0) {
          acc[item.path] = true;
        }
        return acc;
      }, {} as Record<string, boolean>);
      setOpenMenus(menusToOpen);
    } else {
      setOpenMenus({});
    }
  }, [searchTerm, filteredMenuItems]);
  
  const dashboardVisible = useMemo(() => {
      if (!searchTerm.trim()) return true;
      return 'dashboard'.toLowerCase().includes(searchTerm.toLowerCase());
  }, [searchTerm]);

  return (
    <aside className={`bg-[#1f2937] text-white flex-shrink-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <School className="h-8 w-8 text-sky-400 mr-2" />
        <h1 className="text-xl font-bold truncate">SMS Admin</h1>
      </div>
      <div className="p-4 border-b border-gray-700">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 text-white bg-[#374151] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="Search tools..."
          />
        </div>
      </div>
      <nav className="py-4 px-2 h-[calc(100vh-4rem-73px)] overflow-y-auto">
        <ul>
          {dashboardVisible && (
            <li>
              <NavLink
                  item={{ name: 'Dashboard', path: 'dashboard', icon: LayoutDashboard }}
                  isActive={activePage === 'dashboard'}
                  onClick={handlePageSelect}
              />
            </li>
          )}
          {filteredMenuItems.map((item) => (
            <li key={item.path}>
              {item.submenus ? (
                <>
                  <button
                    onClick={() => handleMenuClick(item.path)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-left text-sm rounded-md transition-colors duration-200 ${isSubmenuActive(item) ? 'text-white' : 'text-[#f9fafb]'} hover:bg-[#374151]`}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openMenus[item.path] ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMenus[item.path] ? 'max-h-screen' : 'max-h-0'}`}>
                    <ul className="py-1">
                      {item.submenus.map((submenu) => (
                        <li key={submenu.path}>
                          <NavLink
                             item={submenu}
                             isActive={activePage === submenu.path}
                             onClick={handlePageSelect}
                             isSubmenu={true}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                    item={item}
                    isActive={activePage === item.path}
                    onClick={handlePageSelect}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
