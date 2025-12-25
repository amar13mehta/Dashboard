"use client";

import {
  BarChart3,
  BookOpen,
  Box,
  Calendar,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { memo, useEffect, useState } from "react";

import Image from "next/image";
import { SidebarContent } from "./sidebarContent";
import { motion } from "framer-motion";
import { useSidebarStore } from "../store/useSidebarStore";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "orders", icon: ShoppingCart, label: "Orders" },
  { id: "products", icon: Box, label: "Products" },
  { id: "invoices", icon: FileText, label: "Invoices" },
  { id: "cards", icon: CreditCard, label: "Cards" },
  { id: "documents", icon: BookOpen, label: "Documents" },
  { id: "users", icon: Users, label: "Users" },
  { id: "messages", icon: MessageSquare, label: "Messages", badge: 2 },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "reports", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
  { id: "help", icon: HelpCircle, label: "Help" },
];

const sidebarWidth = {
  open: { width: 472 },
  closed: { width: 64 },
};

function SidebarComponent() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const isOpen = useSidebarStore((s) => s.isOpen);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      className="flex w-full bg-white max-h-screen"
      variants={sidebarWidth}
      animate={isMobile ? "closed" : isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-16 h-full flex flex-col justify-between border-r border-gray-200">
        <div>
          <div className="flex items-center justify-center h-16 ">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={30}
              className="shrink-0"
              height={30}
            />
          </div>

          <nav className="py-4 w-16 flex flex-col items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`relative p-2.5 rounded-md transition-colors ${
                    activeItem === item.id
                      ? "text-[#5E81F4] bg-[#5E81F4]/10"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {activeItem === item.id && (
                    <span className="absolute -right-3.5 top-1/2 -translate-y-1/2 h-10 w-0.5 bg-[#5E81F4]" />
                  )}
                  <Icon className="w-3 h-3" />
                  {item.badge && isOpen && !isMobile && (
                    <span className="absolute -top-1 right-1 text-emerald-400 animate-pulse">
                      •
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-3">
          <Image
            src="/logo.svg"
            alt="User"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>

      <SidebarContent />
    </motion.div>
  );
}

export const Sidebar = memo(SidebarComponent);
