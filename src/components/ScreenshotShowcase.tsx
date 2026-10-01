"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneMockup } from "./PhoneMockup";
import { 
  CheckSquare, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Home as HomeIcon,
  Sparkles,
  Clock,
  Flame,
  ArrowRight,
  Shield
} from "lucide-react";

interface ScreenData {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ElementType;
  screenshot: string;
  description: string;
  highlights: string[];
}

const screens: ScreenData[] = [
  {
    id: "home",
    title: "Daily Command Center",
    subtitle: "Start every morning anchored in focus.",
    tag: "01 • Home Dashboard",
    icon: HomeIcon,
    screenshot: "/screenshots/home.png",
    description:
      "A distraction-free overview of your day. Jump between Highlights, To-do, Progress, Notes, and Calendar in a single tap while keeping your mindset sharp.",
    highlights: [
      "Dynamic date anchor & daily motto",
      "Overview cards for tasks, notes & meetings",
      "Curated mindset quote to fuel discipline ('Stay hard!')",
      "Instant category switcher"
    ],
  },
  {
    id: "tasks",
    title: "Frictionless Task Execution",
    subtitle: "Capture, prioritize, and check off with zero friction.",
    tag: "02 • Tasks & Priorities",
    icon: CheckSquare,
    screenshot: "/screenshots/tasks.png",
    description:
      "Keep full visibility over what matters right now. Filter by status, review priority indicators, and add new tasks instantly via the floating action button.",
    highlights: [
      "Real-time pending item counter",
      "All / In Progress / Completed filter tabs",
      "Priority badges and time stamps",
      "One-tap rapid task creation (+ button)"
    ],
  },
  {
    id: "calendar",
    title: "Calendar & Day Reminders",
    subtitle: "Plan ahead and synchronize your schedule.",
    tag: "03 • Calendar View",
    icon: CalendarIcon,
    screenshot: "/screenshots/calendar.png",
    description:
      "A clean monthly calendar linked directly to your tasks and reminders. Select any date to see exact commitments and create quick reminders on the fly.",
    highlights: [
      "Full monthly calendar navigation",
      "Day-specific task and reminder breakdown",
      "Quick reminder creation with (+) button",
      "Active date highlighting"
    ],
  },
  {
    id: "progress",
    title: "Consistency & Analytics",
    subtitle: "Visual proof of your daily discipline.",
    tag: "04 • Progress & Habits",
    icon: TrendingUp,
    screenshot: "/screenshots/progress.png",
    description:
      "Hold yourself accountable with monthly completion rings and tangible statistics. Track total tasks created versus completed to build long-term momentum.",
    highlights: [
      "Target progress completion circular gauge",
      "'Consistency is Key' accountability reminder",
      "Total, Completed, and Remaining task breakdown",
      "Month-by-month progress review"
    ],
  },
];

export const ScreenshotShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const activeScreen = screens.find((s) => s.id === activeTab) || screens[0];
  const IconComponent = activeScreen.icon;

  return (
    <section id="screenshots" className="py-24 bg-[#09090B] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#E5B86C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#E5B86C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            App Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for clarity. <br className="hidden sm:inline" />
            Engineered for <span className="gold-text-gradient">consistency.</span>
          </h2>
          <p className="text-base text-zinc-400">
            Explore the four core modules of Sorted. No bloated features or confusing menus — just the tools you need to stay on track.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {screens.map((screen) => {
            const TabIcon = screen.icon;
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#E5B86C] text-zinc-950 shadow-lg shadow-[#E5B86C]/20 scale-105"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-zinc-950" : "text-[#E5B86C]"}`} />
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800/80 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[320px]">
                <PhoneMockup
                  src={activeScreen.screenshot}
                  alt={`${activeScreen.title} — Sorted Android App`}
                  badge={activeScreen.tag}
                  priority={true}
                />
              </div>
            </div>

            {/* Right: Screen Details & Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E5B86C]">
                  {activeScreen.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeScreen.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D4A373] font-medium">
                  {activeScreen.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {activeScreen.description}
              </p>

              {/* Highlights list */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Key Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeScreen.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs sm:text-sm text-zinc-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B86C] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download link button */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="/download/app-release.apk"
                  download="Sorted-app-release.apk"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E5B86C] hover:text-[#F3D089] transition-colors"
                >
                  <span>Download Sorted to try this screen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* All Screens Side-by-Side Gallery */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Complete App Walkthrough
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Every screen built with a dark palette and smooth tactile feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 pt-4">
            {screens.map((screen) => (
              <div
                key={screen.id}
                className="flex flex-col items-center p-4 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 group"
              >
                <div className="w-full max-w-[240px] mb-4">
                  <PhoneMockup
                    src={screen.screenshot}
                    alt={screen.title}
                  />
                </div>
                <div className="text-center space-y-1">
                  <div className="text-xs font-semibold text-[#E5B86C]">{screen.tag}</div>
                  <h4 className="text-sm font-bold text-white">{screen.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
