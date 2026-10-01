import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sorted-app.vercel.app"),
  title: "Sorted — Minimalist Daily Task & Habit Tracker for Android",
  description:
    "Master your day with quiet discipline. Sorted is a modern, distraction-free mobile task manager, schedule planner, and consistency tracker for Android.",
  keywords: [
    "Sorted app",
    "Sorted APK",
    "Android task manager",
    "minimalist to-do list",
    "daily habit tracker",
    "mental toughness lifestyle",
    "Flutter productivity app",
    "download Sorted APK",
  ],
  authors: [{ name: "Sorted" }],
  creator: "Sorted",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sorted-app.vercel.app",
    title: "Sorted — Minimalist Daily Task & Habit Tracker",
    description:
      "Where mental toughness meets daily execution. Download the Android APK to organize tasks, track consistency, and own your day.",
    siteName: "Sorted",
    images: [
      {
        url: "/screenshots/home.png",
        width: 1080,
        height: 2400,
        alt: "Sorted App Home Screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorted — Minimalist Daily Task & Habit Tracker",
    description: "Build daily discipline and keep your tasks organized with Sorted.",
    images: ["/screenshots/home.png"],
  },
  icons: {
    icon: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#09090B] text-zinc-100 antialiased selection:bg-[#E5B86C] selection:text-black">
        {children}
      </body>
    </html>
  );
}
