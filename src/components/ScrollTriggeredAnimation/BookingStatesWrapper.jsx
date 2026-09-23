import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BookingForm from "../BookingForm";
import HeroSection from "../HeroSection";
import States from "../States";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function BookingStatesWrapper() {
  const containerRef = useRef(null);
  const bookingRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Page load entrance animation (Slides up from bottom when visiting the site)

      // 2. Controlled scroll parallax animation (Balanced movement so it doesn't vanish)
      gsap.to(bookingRef.current, {
        y: -180, // Balanced value to keep it inside the screen view while moving fast
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // Instant response without lag
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up ScrollTrigger on unmount
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Hero background section */}
      <HeroSection />

      {/* Booking Section */}
      <div ref={bookingRef} className="relative z-40">
        <BookingForm />
      </div>

      {/* States Section */}
      <States />
    </div>
  );
}
