# Sorted — Official Mobile Application Website

A minimal, modern, and polished product landing page for the **Sorted** Android mobile application (built with Flutter).

---

## ✨ Features & Structure

* **Hero Section**: Value proposition, app tagline (*"Mental toughness is a lifestyle"*), primary **Download APK** CTA, and an ultra-realistic smartphone mockup.
* **Interactive Screenshots Showcase**: Tabbed deep-dive into all 4 core screens (**Daily Hub/Home**, **Tasks & Priorities**, **Monthly Calendar & Reminders**, **Progress & Consistency Gauge**) plus a side-by-side device gallery.
* **Core Capabilities Section**: 6 clean, verified feature cards strictly based on actual app functionality.
* **How to Install on Android**: 3-step friction-free guide for downloading and installing APKs on Android devices.
* **Download Section**: Final high-converting CTA linking directly to `/download/app-release.apk` with APK specifications (v1.0.0, Android 8.0+, 100% Free) and future Google Play Store hook.
* **Privacy & Legal Modal**: Built-in zero-tracking offline-first privacy statement.

---

## 🚀 How to Add Your Flutter APK

1. Copy your compiled Flutter Android release APK (`app-release.apk`) to:
   ```
   public/download/app-release.apk
   ```
2. The website's **Download APK** buttons are pre-configured to serve and trigger direct download from:
   ```
   /download/app-release.apk
   ```

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deploy to Vercel

This repository is structured for zero-configuration, 1-click deployment on **Vercel**:

1. Push this repository to GitHub/GitLab.
2. Import the repository into [Vercel](https://vercel.com).
3. Select **Next.js** framework preset (default).
4. Click **Deploy** — your landing page and direct APK download will be live immediately!
