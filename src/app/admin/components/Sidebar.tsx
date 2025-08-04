import React from "react";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", icon: "📊" },
  { name: "Leads", icon: "👤" },
  { name: "CRM", icon: "💬" },
  { name: "Analytics", icon: "📈" },
  { name: "Content", icon: "📝" },
  { name: "AI", icon: "🤖" },
  { name: "Settings", icon: "⚙️" },
];

type PageName = "Dashboard" | "Leads" | "CRM" | "Analytics" | "Content" | "AI" | "Settings";
interface SidebarProps {
  activePage: PageName;
  setActivePage: (page: PageName) => void;
}

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="w-64 flex flex-col justify-between bg-white border-r border-gray-200 shadow-sm">
      <div>
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-teal-100">
            <Image 
              src="/images/ApexLogo.jpg" 
              alt="ApexWebs Logo" 
              width={40}
              height={40}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to ApexLogo1.jpg if main logo fails
                const target = e.target as HTMLImageElement;
                if (target.src.includes('ApexLogo.jpg')) {
                  target.src = '/images/ApexLogo1.jpg';
                } else {
                  // Final fallback to text logo
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow">AW</div>';
                  }
                }
              }}
            />
          </div>
          <span className="text-lg font-bold text-gray-800">Apex Admin</span>
        </div>
        <nav className="mt-4 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors w-full text-left ${
                    activePage === item.name 
                      ? 'bg-teal-600 text-white shadow' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  style={{ minHeight: "44px" }}
                  onClick={() => setActivePage(item.name as PageName)}
                >
                  <span className="text-xl flex items-center justify-center w-6">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50 mt-2">
        <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">AK</div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-sm leading-tight">Alex Kamau</span>
          <span className="text-xs text-gray-500 leading-tight">Administrator</span>
        </div>
      </div>
    </aside>
  );
}
