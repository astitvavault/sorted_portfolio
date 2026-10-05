import React from "react";
import { 
  CheckCircle2, 
  CalendarDays, 
  TrendingUp, 
  Flame, 
  Layers, 
  Clock,
  ShieldCheck,
  Sparkles
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  {
    icon: CheckCircle2,
    badge: "Tasks",
    title: "Daily Task Prioritization",
    description:
      "Monitor pending items at a glance, categorize with priority tags, and filter by All, In Progress, or Completed.",
  },
  {
    icon: CalendarDays,
    badge: "Calendar",
    title: "Monthly Calendar & Reminders",
    description:
      "Interactive month view that connects directly to your daily agenda. Schedule reminders and tasks for any specific date.",
  },
  {
    icon: TrendingUp,
    badge: "Analytics",
    title: "Visual Progress & Consistency",
    description:
      "Monthly target completion circular rings with accurate stats: Total Tasks Created, Completed, and Remaining.",
  },
  {
    icon: Flame,
    badge: "Mindset",
    title: "Daily Discipline & Mindset Quotes",
    description:
      "Curated daily anchors on your home screen to reinforce mental toughness and keep you locked into your goals.",
  },
  {
    icon: Layers,
    badge: "Navigation",
    title: "Quick-Access Category Hub",
    description:
      "Instant top-bar filters for Highlights, To-do, Progress, Notes, and Calendar for rapid task switching.",
  },
  {
    icon: ShieldCheck,
    badge: "Privacy",
    title: "Private & Distraction-Free",
    description:
      "Built with high-performance Flutter. Pure productivity with zero third-party trackers, no invasive advertising, and a clean, focused experience.",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0B0B0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#E5B86C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need. <br />
            <span className="gold-text-gradient">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A focused tool built for people who want execution over complicated project management bloat.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-[#E5B86C]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-[#E5B86C] group-hover:bg-[#E5B86C] group-hover:text-zinc-950 transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-[#E5B86C] transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F3D089] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-6 pt-4 border-t border-zinc-800/40 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-400">
                  <span>Verified in Mobile App</span>
                  <span className="text-[#E5B86C]/0 group-hover:text-[#E5B86C] transition-colors">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
