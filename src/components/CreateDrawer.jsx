import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { X, ChevronDown, Copy } from 'lucide-react';

const CreateDrawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }));

  const handleClose = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={handleClose}
      />
      
      <div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col pt-8">
        {/* Drawer Header */}
        <div className="px-8 pb-6 border-b border-gray-100 flex justify-between items-start">
          <div>
            <h2 className="text-[18px] font-bold text-gray-900 mb-1">Create New Knowledge Base</h2>
            <p className="text-[13px] text-gray-500 font-medium">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-900 transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Form) */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">
              Name (Cannot be edited later)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#4F46E5] focus:ring-[#4F46E5] transition-colors"
              placeholder="Name"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">
              Description
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#4F46E5] focus:ring-[#4F46E5] transition-colors resize-none"
              placeholder="Description"
              rows={4}
            />
          </div>

          {/* Vector Store Field */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:border-[#4F46E5] focus:ring-[#4F46E5] transition-colors">
                <option>Qdrant</option>
                <option>Chroma DB</option>
                <option>Pinecone</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* LLM Embedding Model Field */}
          <div>
            <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:border-[#4F46E5] focus:ring-[#4F46E5] transition-colors">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-8 pb-10 flex justify-end">
          <button
            onClick={handleClose}
            className="bg-[#4F46E5] hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-md shadow-indigo-500/20"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
});

export default CreateDrawer;
