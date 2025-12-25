import { AnimatePresence, motion } from "framer-motion";

import { EventItem } from "./allEvents";
import { TEvent } from "../types/helperFunctions";
import { XIcon } from "lucide-react";
import { memo } from "react";
import { useSidebarStore } from "../store/useSidebarStore";

const events: TEvent[] = [
  {
    id: "1",
    time: "05:48AM",
    title: "Meeting with a client",
    description: "Tell how to boost website traffic",
    color: "blue",
  },
  {
    id: "2",
    time: "10:28AM",
    title: "New project discussion",
    description: "Business Cards Does Your Business",
    color: "yellow",
  },
  {
    id: "3",
    time: "07:58PM",
    title: "Financial data overview",
    description: "What Makes Flyers Unrivaled",
    color: "green",
  },
];

export const SidebarContent = memo(function SidebarContent() {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const toggle = useSidebarStore((s) => s.toggle);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="sidebar-content"
          className="w-80 px-6 py-8 space-y-8 bg-white h-screen absolute top-0 left-16 md:left-0 border-r border-gray-200 z-10 md:relative "
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="p-4 md:hidden absolute right-4 top-4"
            onClick={toggle}
          >
            <XIcon className="size-3" />
          </button>
          {/* Profile */}
          <div className="flex items-start gap-4 flex-col">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Welcome,</p>
              <h2 className="text-2xl font-bold">CRAFTUI</h2>
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold mb-4">Upcoming events</h3>
            {events.map((event) => (
              <EventItem key={event.id} {...event} />
            ))}
          </div>

          {/* Conversion */}
          <div className="rounded-xl p-6 bg-gray-50">
            <h3 className="font-semibold mb-2">Conversion history</h3>
            <p className="text-sm text-gray-600 mb-4">
              Week to week performance
            </p>
            <div className="h-24 flex items-end gap-1">
              {[30, 50, 60, 45, 70, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-400 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
