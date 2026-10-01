"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, Rocket, Sparkles, Smartphone } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "App Screenshots", href: "#screenshots" },
    { name: "How to Install", href: "#install" },
    { name: "Download", href: "#download" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090B]/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F3D089] to-[#D4A373] flex items-center justify-center p-1.5 shadow-md shadow-[#E5B86C]/20 transition-transform duration-300 group-hover:scale-105">
            <Rocket className="w-5 h-5 text-zinc-950 -rotate-45 fill-zinc-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#E5B86C] transition-colors">
              Sorted
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#E5B86C]/90 ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B86C] animate-pulse" />
            Android APK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/download/app-release.apk"
            download="Sorted-app-release.apk"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#E5B86C] hover:bg-[#F3D089] text-zinc-950 shadow-md shadow-[#E5B86C]/20 hover:shadow-[#E5B86C]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download APK</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/download/app-release.apk"
            download="Sorted-app-release.apk"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E5B86C] text-zinc-950"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>APK</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#0e0e12]/95 backdrop-blur-2xl border-b border-zinc-800 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-[#E5B86C] py-2 transition-colors border-b border-zinc-800/40"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="/download/app-release.apk"
              download="Sorted-app-release.apk"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-[#E5B86C] text-zinc-950 shadow-lg"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Android APK (v1.0.0)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
