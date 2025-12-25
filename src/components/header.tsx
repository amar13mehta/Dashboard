"use client";

import { Menu, Search, Settings } from "lucide-react";

import { useSidebarStore } from "../store/useSidebarStore";

export function Header() {
  const toggle = useSidebarStore((s) => s.toggle);
  return (
    <header className="h-14 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="text-gray-600 hover:text-gray-900">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
