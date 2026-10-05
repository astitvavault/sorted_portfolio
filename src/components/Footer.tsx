"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Download, ShieldCheck, Mail, X } from "lucide-react";

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#070709] border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F3D089] to-[#D4A373] flex items-center justify-center p-1.5 shadow-md shadow-[#E5B86C]/20">
                <Rocket className="w-4 h-4 text-zinc-950 -rotate-45 fill-zinc-950" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Sorted</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              A minimalist, distraction-free Android task and habit consistency tracker. Where mental toughness meets daily execution.
            </p>
            <div className="text-xs text-zinc-400 font-mono">
              Build: Flutter Android APK (v1.0.0)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="hover:text-[#E5B86C] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="hover:text-[#E5B86C] transition-colors">
                  App Screenshots
                </Link>
              </li>
              <li>
                <Link href="#install" className="hover:text-[#E5B86C] transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <a
                  href="/download/app-release.apk"
                  download="Sorted-app-release.apk"
                  className="hover:text-[#E5B86C] transition-colors inline-flex items-center gap-1"
                >
                  <span>Download APK</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-[#E5B86C] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@sortedapp.dev"
                  className="hover:text-[#E5B86C] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Support</span>
                </a>
              </li>
              <li>
                <span className="text-xs text-zinc-400">
                  Android is a trademark of Google LLC.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Sorted. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with discipline & focus</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-[#E5B86C]">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong>Privacy First:</strong> Sorted is engineered with user privacy at its core. We do not sell, track, or harvest your personal information, tasks, or device analytics.
              </p>
              <p>
                <strong>Data Protection:</strong> All your tasks, schedules, reminders, and progress records are securely handled and kept strictly under your control.
              </p>
              <p>
                <strong>No Third-Party Trackers:</strong> Sorted does not contain third-party advertising SDKs, tracking pixels, or background data profiling.
              </p>
              <p>
                <strong>Permissions:</strong> The app only requests notifications permission when you choose to set date and time reminders.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-[#E5B86C] text-zinc-950 hover:bg-[#F3D089] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
