import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-[#1A1A40] w-full flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
      {/* Left side: Logo & Workspace selector */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          {/* Logo Icon*/}
          <div className="text-indigo-400">
            <img src='/aventisia_logo.jpeg' alt="logo" className='w-8 h-8 rounded-lg' />
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">Worcspace</span>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 bg-[#1E1B4B] border border-indigo-500/30 rounded-full px-3 py-1.5 cursor-pointer hover:bg-white/5 transition-colors">
          <span className="text-white text-sm font-medium">Worcspace 1</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-lg hidden sm:flex items-center justify-center">
        <div className="relative w-96 flex items-center">
          <div className="absolute left-3 flex items-center pointer-events-none text-indigo-300">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="w-full bg-[#2a275e] text-indigo-100 pl-10 pr-12 py-1.5 rounded-lg border-none focus:ring-1 focus:ring-indigo-400 focus:outline-none text-sm placeholder-indigo-300/70"
            placeholder="Search..."
          />
          <div className="absolute right-3 flex items-center pointer-events-none">
            <span className="text-indigo-300/70 text-xs font-mono font-medium opacity-70 border border-indigo-400/30 rounded px-1.5 py-0.5">⌘K</span>
          </div>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4">
        <button className="text-indigo-300 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-200 text-[#1E1B4B] flex items-center justify-center font-bold text-sm">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
