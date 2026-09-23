import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BookingForm from "../BookingForm";
import HeroSection from "../HeroSection";
import States from "./States";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function BookingStatesWrapper() {
  const containerRef = useRef(null);
  const bookingRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the booking section and scrub it over the states section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top", // When top of the wrapper hits top of viewport
        end: "bottom bottom", // When bottom of the wrapper hits bottom of viewport
        pin: bookingRef.current, // Pin the booking form box
        pinSpacing: false, // Prevents excessive blank space, letting states slide underneath smoothly
        scrub: true, // Smooth scrubbing tied to scroll position
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up ScrollTrigger on unmount
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hero background section or container */}
      <HeroSection />

      {/* Booking Section that will be pinned temporarily */}
      <div ref={bookingRef} className="relative z-40">
        <BookingForm />
      </div>

      {/* States Section that scrolls up and goes under the pinned booking section */}
      <States />
    </div>
  );
}
