import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  badge?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  alt,
  priority = false,
  className = "",
  badge,
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-b from-[#E5B86C]/20 via-[#D4A373]/10 to-transparent rounded-[50px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Phone Hardware Frame */}
      <div className="relative rounded-[42px] bg-gradient-to-b from-[#2c2c32] via-[#1a1a1e] to-[#121215] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:scale-[1.01]">
        {/* Inner Screen Bezel */}
        <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.8] w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] mx-auto border border-zinc-800/80">
          
          {/* Punch-hole camera / Top sensor island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-black border border-zinc-800/60 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700/50" />
            </div>
          </div>

          {/* Screenshot Image */}
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
              className="object-cover object-top select-none pointer-events-none"
            />
          </div>

          {/* Glass glare highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />

          {/* Optional bottom floating badge */}
          {badge && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-md border border-[#E5B86C]/30 text-[11px] font-medium text-[#E5B86C] shadow-lg">
              {badge}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
