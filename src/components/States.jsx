import { useEffect, useRef, useState } from "react";
import carImage from "../assets/caranimation.gif";
import cityImage from "../assets/cityframe.png";

// Counter Hook for 0 to target number animation
function useCounter(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
}

export default function States() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // Trigger counter when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const tripRequests = useCounter(300000, 2500, startCount);
  const totalCustomers = useCounter(850000, 2500, startCount);
  const activeDrivers = useCounter(35000, 2500, startCount);
  const districts = useCounter(64, 2000, startCount);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full  bg-primary text-white pt-16 md:pt-24 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200"
    >
      <div className="mt-30">
        {/* Top Main Content Area */}
        <div className="max-w-full  flex flex-col  justify-between gap-15 lg:gap-30  relative z-10">
          {/* Left Side: Exact Heading */}
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              From Everyday Rides to Meaningful{" "}
              <br className="hidden sm:block" /> Journeys
            </h1>
          </div>

          {/* Right Side: Statistics Grid */}
          <div className="w-full flex  flex-col lg:justify-end lg:flex-row gap-8 lg:gap-15 text-left">
            <div className="">
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                {formatNumber(tripRequests)}+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Trip Requests
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                {formatNumber(totalCustomers)}+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Total Customers
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                {formatNumber(activeDrivers)}+
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                Active Drivers
              </div>
            </div>

            <div>
              <div className="text-4xl! sm:text-3xl font-bold text-accent">
                {districts}
              </div>
              <div className="text-2xl! sm:text-sm text-white font-medium mt-1">
                District Covered
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Moving City & Car Animation Area */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none h-28 sm:h-36 z-20">
          {/* Continuous Right-to-Left City Scrolling Background */}
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

          {/* Driving Car Animation at Bottom Left */}
          <div className="absolute bottom-0 left-8 sm:left-16 z-30 ">
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
