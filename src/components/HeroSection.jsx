import { Typewriter } from "react-simple-typewriter";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Button from "./ui/Button";

export default function HeroSection() {
  const fadeRef = useScrollReveal({
    type: "fade",
    direction: "up",
    distance: 80,
    duration: 1,
  });
  return (
    <section className="relative w-full bg-background text-foreground py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left Side: Large Heading */}
        <div className="w-full lg:h-50 lg:w-3/6">
          <h1 className="text-4xl h-20 sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <Typewriter
              words={[
                "Your Journey Starts Here ...",
                "Assurance of Effortless Travel",
                "Luxury Trips with Comfort",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              cursorColor="#0f51ff"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>

        {/* Right Side: Description and CTA Button */}
        <div
          ref={fadeRef}
          className="w-full lg:w-2/5 flex flex-col items-start space-y-6"
        >
          <p className="text-xl text-muted-foreground font-semibold leading-relaxed">
            Choose your city, pick your car and enjoy the journey with
            Garibook’s best drivers.
          </p>

          <Button>Download</Button>
        </div>
      </div>
    </section>
  );
}
