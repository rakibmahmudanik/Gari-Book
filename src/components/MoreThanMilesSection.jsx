import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import airportImg from "../assets/Airport Rental_Webp.webp";
import familyImg from "../assets/family_trips.webp";
import longTourImg from "../assets/Group Tour_Webp.webp";

gsap.registerPlugin(ScrollTrigger);

export default function MoreThanMilesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cardData = [
    {
      title: "Airport Rentals",
      image: airportImg,
    },
    {
      title: "Family Trips",
      image: familyImg,
    },
    {
      title: "Long Tours",
      image: longTourImg,
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      // Initial stacked & rotated state before entering viewport
      gsap.set(cards, {
        transformOrigin: "bottom center",
      });

      // ScrollTrigger animation using scrub
      gsap.fromTo(
        cards,
        {
          // Starting state (overlapped in the middle, rotated)
          y: (i) => (i === 1 ? 80 : 120),
          x: (i) => (i === 0 ? 100 : i === 2 ? -100 : 0),
          rotation: (i) => (i === 0 ? 115 : i === 2 ? -25 : 0),
          scale: 0.6,
          opacity: 0.3,
        },
        {
          // Original final state when 50% in view
          y: 0,
          x: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background text-foreground py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            More Than Miles — <br />
            We Bring People Together
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {cardData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-90 sm:h-100 flex flex-col justify-start p-8 border border-border bg-card"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
