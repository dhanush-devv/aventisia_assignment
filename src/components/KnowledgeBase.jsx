import React from 'react';
import { Search, MoreVertical, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Card = () => (
  <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm">
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[16px] font-bold text-gray-900">Test</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[13px] text-gray-500 leading-snug mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
    
    <div className="pt-4 border-t border-gray-100/80">
      <span className="text-[11px] text-gray-400 font-medium">Created On: 14/07/2025</span>
    </div>
  </div>
);

const KnowledgeBase = ({ onCreateNew }) => {
  return (
    <div className="h-full flex flex-col justify-between max-w-[1200px] mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8 flex-col sm:flex-row gap-4">
        <h1 className="text-xl font-bold text-gray-900">Knowledge Base</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="Search..."
            />
          </div>
          
          <button
            onClick={onCreateNew}
            className="bg-[#4F46E5] hover:bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Create New
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="border border-gray-200 rounded-xl p-8 flex-1 bg-white mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start content-start">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-6 mt-8">
        <span className="text-sm font-semibold text-gray-700">6 rows</span>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700">Rows per page</span>
            <select className="border border-gray-200 rounded px-2 py-1 text-sm text-gray-700 bg-white font-medium focus:outline-none focus:ring-1 focus:ring-primary">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          
          <div className="text-sm font-semibold text-gray-700">
            page 1 of 1
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-1 border border-gray-200 rounded bg-white text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button className="p-1 border border-gray-200 rounded bg-white text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 border border-gray-200 rounded bg-white text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="p-1 border border-gray-200 rounded bg-white text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KnowledgeBase;
