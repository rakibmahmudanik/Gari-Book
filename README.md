# Gari Book

A modern, high-performance, and responsive frontend web application built for a premier ride-sharing and urban mobility service. The platform features a sleek, minimalist aesthetic, multi-tab booking workflows, and immersive scroll-driven animations.

---

## 🚀 Key Features

- **Interactive Booking Interface:** Dynamic multi-tab reservation system with smooth transitions and persistent state controls.
- **Advanced Scroll-Driven Animations:** Custom GSAP & ScrollTrigger integrations powering entrance fades, zoom effects, and fanning card parallax animations.
- **Synchronized Dynamic Counters:** Real-time animated counters reflecting core business metrics (trip requests, total customers, active drivers, districts covered).
- **Minimalist Brand Aesthetics:** Clean, modern, dark-mode-first flat design principles implemented via Tailwind CSS.
- **Performance Optimized:** Modular architecture designed to minimize layout shifts and ensure smooth 60fps animations.

---

## 🛠️ Tech Stack

- **Frontend Library:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock Animation Platform) & ScrollTrigger
- **Icons & Assets:** Optimized WebP imagery, custom vector graphics, and motion assets

---

## 📂 Project Structure

```text
src/
├── assets/          # Brand graphics, city frames, and vehicle assets
├── components/      # Modular UI sections (Booking forms, States, MoreThanMiles, etc.)
├── hooks/           # Reusable custom logic (e.g., useScrollReveal for GSAP triggers)
├── App.jsx          # Root application layout
└── main.jsx         # Application entry point
```
