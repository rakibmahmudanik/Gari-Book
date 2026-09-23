import gsap from "gsap";
import { useRef } from "react";
import carImage from "../assets/caranimation.gif";
import cityImage from "../assets/cityframe.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function States() {
  const tripRef = useRef(null);
  const customerRef = useRef(null);
  const driverRef = useRef(null);
  const districtRef = useRef(null);

  // Helper function to animate numbers using GSAP
  const animateCounter = (el, target) => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: "power1.out",
      onUpdate: () => {
        if (el) {
          el.innerText = Math.floor(obj.val).toLocaleString();
        }
      },
    });
  };
  const fadeUp = useScrollReveal({
    type: "fade",
    direction: "up",
    distance: 80,
    duration: 1,
  });

  // Main grid reveal hook which triggers both zoom and simultaneous number counting
  const stateRef = useScrollReveal({
    type: "zoom",
    scale: 0.1,
    stagger: 0.4,
    duration: 1,
    onEnter: () => {
      // Trigger counter animations simultaneously when the section enters viewport
      if (tripRef.current) animateCounter(tripRef.current, 300000);
      if (customerRef.current) animateCounter(customerRef.current, 850000);
      if (driverRef.current) animateCounter(driverRef.current, 35000);
      if (districtRef.current) animateCounter(districtRef.current, 64);
    },
  });

  return (
    <section className="relative w-full bg-primary text-white pt-56 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200">
      <div className="">
        {/* Top Main Content Area */}
        <div className="max-w-full flex flex-col justify-between gap-15 lg:gap-30 relative z-10">
          {/* Left Side: Heading */}
          <div ref={fadeUp} className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              From Everyday Rides to Meaningful{" "}
              <br className="hidden sm:block" /> Journeys
            </h1>
          </div>

          {/* Right Side: Statistics Grid */}
          <div
            ref={stateRef}
            className="w-full flex flex-col lg:justify-end lg:flex-row gap-8 lg:gap-15 text-left"
          >
            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                <span ref={tripRef}>0</span>+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Trip Requests
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                <span ref={customerRef}>0</span>+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Total Customers
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                <span ref={driverRef}>0</span>+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Active Drivers
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                <span ref={districtRef}>0</span>
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                District Covered
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Moving City & Car Animation Area */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none h-28 sm:h-36 z-20">
          <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-city-scroll opacity">
            <div
              className="w-1/2 h-full bg-repeat-x bg-bottom"
              style={{
                backgroundImage: `url(${cityImage})`,
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="w-1/2 h-full bg-repeat-x bg-bottom"
              style={{
                backgroundImage: `url(${cityImage})`,
                backgroundSize: "contain",
              }}
            ></div>
          </div>

          <div className="absolute bottom-0 left-8 sm:left-16 z-30">
            <img
              src={carImage}
              alt="Moving Car"
              className="h-12 sm:h-16 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
