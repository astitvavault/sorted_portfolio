import React from "react";
import { Download, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

export const InstallationGuide: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Download APK File",
      description:
        "Tap the 'Download APK' button on this site to save `app-release.apk` directly to your Android device.",
    },
    {
      number: "02",
      title: "Allow Installation",
      description:
        "Open your notification or Downloads folder. If prompted by Android, tap 'Settings' and enable 'Allow from this source'.",
    },
    {
      number: "03",
      title: "Launch & Get Sorted",
      description:
        "Tap 'Install' and launch Sorted. No account registration or cloud login required — start organizing instantly.",
    },
  ];

  return (
    <section id="install" className="py-20 bg-[#09090B] border-t border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E5B86C]">
            Quick Setup
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How to Install on Android
          </h2>
          <p className="text-sm text-zinc-400">
            Get up and running in less than 30 seconds with 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#E5B86C] font-mono">
                    {step.number}
                  </span>
                  <CheckCircle className="w-4 h-4 text-zinc-600" />
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
