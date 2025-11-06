
import React, { useState } from 'react';
import { Menu, User, LogOut } from '../icons/Icons';

interface HeaderProps {
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white border-b-2 border-gray-200 shadow-sm">
      <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>
      <div className="relative">
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)} 
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img 
            className="h-9 w-9 rounded-full object-cover" 
            src="https://picsum.photos/100" 
            alt="User avatar" 
          />
          <span className="hidden sm:inline text-gray-700 font-medium">Admin</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <User className="h-4 w-4 mr-2" />
              Profile
            </a>
            <button onClick={onLogout} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
