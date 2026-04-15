"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsLayoutProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export function TabsLayout({ tabs, defaultTab }: TabsLayoutProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? "");

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
