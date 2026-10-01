import React from "react";
import { Download, Rocket, ShieldCheck, Cpu, Smartphone, Play } from "lucide-react";

interface DownloadSectionProps {
  playStoreUrl?: string; // Optional URL if later published on Google Play
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ playStoreUrl }) => {
  return (
    <section id="download" className="py-24 bg-ambient-radial-bottom relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5B86C]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E5B86C]/30 text-center relative overflow-hidden shadow-[0_20px_70px_-15px_rgba(229,184,108,0.15)]">
          
          {/* Top Rocket Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3D089] to-[#D4A373] text-zinc-950 shadow-xl shadow-[#E5B86C]/30 mb-6 mx-auto">
            <Rocket className="w-8 h-8 -rotate-45 fill-zinc-950 stroke-[2]" />
          </div>

          {/* Heading & Subtitle */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to get <span className="gold-text-gradient">Sorted?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Download the Android APK now and experience minimal, distraction-free productivity built around mental toughness and daily consistency.
          </p>

          {/* Primary & Secondary Download CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            {/* Primary APK Download */}
            <a
              href="/download/app-release.apk"
              download="Sorted-app-release.apk"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-[#E5B86C] hover:bg-[#F3D089] text-zinc-950 shadow-xl shadow-[#E5B86C]/25 hover:shadow-[#E5B86C]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Download APK</span>
            </a>

            {/* Google Play Option (Shows link if provided, otherwise clean Coming Soon badge) */}
            {playStoreUrl ? (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Google Play</span>
              </a>
            ) : (
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs sm:text-sm font-medium bg-zinc-900/80 text-zinc-400 border border-zinc-800 cursor-default">
                <Play className="w-3.5 h-3.5 fill-zinc-500 text-zinc-500" />
                <span>Google Play Store (Coming Soon)</span>
              </div>
            )}
          </div>

          {/* File Meta Information */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-center">
            <div className="p-2">
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Version</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">v1.0.0 (Release)</div>
            </div>
            <div className="p-2">
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Requirements</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">Android 8.0+</div>
            </div>
            <div className="p-2">
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Price</div>
              <div className="text-xs sm:text-sm font-bold text-[#E5B86C] mt-0.5">100% Free</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
