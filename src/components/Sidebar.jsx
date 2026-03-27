import React from "react";
import {
  Bot, CircuitBoard, Library, LayoutDashboard, Monitor, List,
  Zap, PlayCircle, Activity, Shield, BookOpen, Key,
  Building, Puzzle
} from "lucide-react";

const NavSection = ({ title, items }) => (
  <div className="mb-4">
    <h4 className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-wider mb-1.5 uppercase">
      {title}
    </h4>

    <div className="space-y-0.5">
      {items.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`w-full flex items-center gap-3 py-1.5 text-sm font-semibold relative transition-colors
            ${active
              ? "bg-[#F3F2FF] text-[#4F46E5]"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
        >
          {active && (
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#4F46E5] rounded-r-md" />
          )}

          <div className="pl-6 flex items-center gap-3">
            <Icon
              className={`w-[18px] h-[18px] ${
                active ? "text-[#4F46E5]" : "text-gray-500"
              }`}
            />
            <span>{label}</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const Sidebar = () => {
  const sections = [
    {
      title: "MY PROJECTS",
      items: [
        { icon: Bot, label: "Agents" },
        { icon: CircuitBoard, label: "AI Models" },
        { icon: Library, label: "Library" },
      ],
    },
    {
      title: "ORCHESTRATOR",
      items: [
        { icon: LayoutDashboard, label: "Published" },
        { icon: Monitor, label: "Machines" },
        { icon: List, label: "Queues" },
        { icon: Zap, label: "Triggers" },
        { icon: PlayCircle, label: "Jobs" },
        { icon: Activity, label: "Executions" },
        { icon: Shield, label: "Vault" },
        { icon: BookOpen, label: "Knowledge Base", active: true },
        { icon: Key, label: "Key Store" },
      ],
    },
    {
      title: "ADMIN",
      items: [
        { icon: Building, label: "Tenant" },
        { icon: Puzzle, label: "Integrations" },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-white h-full border-r border-gray-100 flex-shrink-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="py-4">
        {sections.map((section) => (
          <NavSection key={section.title} {...section} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;