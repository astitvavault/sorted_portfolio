import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ScreenshotShowcase } from "@/components/ScreenshotShowcase";
import { InstallationGuide } from "@/components/InstallationGuide";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100 flex flex-col selection:bg-[#E5B86C] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section with Phone Mockup & Download CTA */}
      <Hero />

      {/* Interactive App Screenshots Section */}
      <ScreenshotShowcase />

      {/* Verified App Features Section */}
      <Features />

      {/* 3-Step APK Installation Guide */}
      <InstallationGuide />

      {/* Final Download & APK Specifications Section */}
      <DownloadSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
