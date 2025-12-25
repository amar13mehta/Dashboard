"use client";

import { DashboardView1, DashboardView2 } from "../components/dashboardView";

import { AnimatePresence } from "framer-motion";
import { Header } from "../components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "../components/sidebar";
import { useNavigationStore } from "../store/useNavigationStore";

function App() {
  const activeView = useNavigationStore((s) => s.activeView);
  return (
    <div className="h-screen bg-gray-50 flex  w-full">
      <Sidebar />

      <div className={`transition-all duration-300 w-full`}>
        <Header />

        <ScrollArea className="flex-1 h-[calc(100%-64px)]">
          <main className="p-6 w-full h-full bg-[#F5F5FA] min-h-[calc(100%-68px)]">
            <AnimatePresence mode="wait">
              {activeView === "OVERVIEW" ? (
                <DashboardView1 key="overview" />
              ) : (
                <DashboardView2 key="details" />
              )}
            </AnimatePresence>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
