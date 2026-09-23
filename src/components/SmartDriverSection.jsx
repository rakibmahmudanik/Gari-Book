import driverImg from "../assets/no_commission_app_screen.png";
import Button from "./ui/Button";

export default function SmartDriverSection() {
  return (
    <section className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-4xl font-bold tracking-tight mb-8"
        >
          Be a Smart Driver
        </h2>

        {/* Main Banner Card (Yellow background, no shadow, simple & clean) */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full bg-accent rounded-2xl overflow-hidden pt-10 px-10 lg:px-20 flex flex-col lg:flex-row items-center lg:items-center justify-between"
        >
          {/* Left Content (Text & Button) */}
          <div className="flex items-center">
            <div className="flex flex-col items-start space-y-6 max-w-xl mb-8 lg:mb-16">
              <h3 className="text-4xl sm:text-6xl font-extrabold text-primary leading-tight tracking-tight">
                0% Commission <br />
                100% Freedom
              </h3>

              <Button className="bg-primary text-background text-left">
                Download Smart <br /> Driver App
              </Button>
            </div>
          </div>

          {/* Right Image (Bigger size and aligned to bottom) */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="w-full lg:w-auto flex justify-end"
          >
            <img
              src={driverImg}
              alt="Smart Driver"
              className="max-h-105 sm:max-h-130 w-auto object-contain translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
