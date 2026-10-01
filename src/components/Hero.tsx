import React from "react";
import { Download, ArrowRight, CheckCircle2, Flame } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ambient-radial">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5B86C]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#D4A373]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Version & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B86C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5B86C]"></span>
              </span>
              <span className="font-semibold text-white">Sorted Mobile v1.0</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#E5B86C]">Android APK Ready</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Mental toughness is a{" "}
              <span className="gold-text-gradient">lifestyle.</span>
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
              Cut out noise, conquer procrastination, and keep your daily life sorted. 
              A sleek, minimalist Android task manager, schedule planner, and habit consistency tracker built for daily execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="/download/app-release.apk"
                download="Sorted-app-release.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold bg-[#E5B86C] hover:bg-[#F3D089] text-zinc-950 shadow-xl shadow-[#E5B86C]/20 hover:shadow-[#E5B86C]/35 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <Download className="w-5 h-5 stroke-[2.5] text-zinc-950 group-hover:scale-110 transition-transform" />
                <span>Download APK (Free)</span>
              </a>

              <a
                href="#screenshots"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <span>Explore App</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5B86C]" />
                <span>No Ads or Subscriptions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Smartphone Mockup with Actual App Screenshot */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Phone Mockup with Home Screen Screenshot */}
            <div className="w-full max-w-[310px] sm:max-w-[340px]">
              <PhoneMockup
                src="/screenshots/home.png"
                alt="Sorted App Home Screen — Mental Toughness is a Lifestyle"
                priority={true}
                badge="✦ Live App Interface"
              />
            </div>

            {/* Floating Card 1: Consistency Badge */}
            <div className="hidden sm:flex absolute -left-8 top-16 items-center gap-3 p-3 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-[#E5B86C]/15 border border-[#E5B86C]/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#E5B86C]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Habit Tracker</div>
                <div className="text-xs font-bold text-white">Consistency is Key</div>
              </div>
            </div>

            {/* Floating Card 2: Mindset Anchor */}
            <div className="hidden sm:flex absolute -right-6 bottom-20 items-center gap-3 p-3 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <span className="text-base font-serif text-[#E5B86C]">“</span>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Daily Anchor</div>
                <div className="text-xs font-bold text-[#F3D089] italic">Stay hard!</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
