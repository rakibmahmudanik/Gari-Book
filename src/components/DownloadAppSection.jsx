import mobileAppImg from "../assets/app-with-logo.png";
import Button from "./ui/Button";

export default function DownloadAppSection() {
  return (
    <section className="w-full bg-background text-foreground pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Main Banner Card with relative positioning and top overflow allowance */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative w-full bg-primary rounded-2xl overflow-visible py-15 md:py-17 lg:py-20 px-8 md:px-15 lg:px-20 flex flex-col lg:flex-row items-center justify-between text-white mt-12 lg:mt-0"
        >
          {/* Left Content (Title, Subtitle & Button) */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-start space-y-4 max-w-xl z-10 ml-15"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Download <br />
              Garibook Mobile App
            </h2>

            <p className="text-sm sm:text-xl text-blue-100 max-w-md">
              Download our Customer, Smart Driver and Enterprise App
            </p>

            {/* Reusable Button */}
            <div className="pt-2">
              <Button className="bg-accent text-black">Download App</Button>
            </div>
          </div>

          {/* Right Image Container - Bottom aligned, top overflowing outside the card */}
          <div
            data-aos="fade-down-right"
            data-aos-delay="300"
            className="lg:absolute lg:right-30 lg:bottom-0 mt-8 lg:mt-0 flex justify-center z-20 pointer-events-none"
          >
            <img
              src={mobileAppImg}
              alt="Garibook Mobile App"
              className="max-h-100 lg:max-h-130 w-auto object-contain translate-15 md:translate-17 lg:translate-0 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
