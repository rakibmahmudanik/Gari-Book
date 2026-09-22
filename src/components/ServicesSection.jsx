import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Import images placeholder
import carImg3 from "../assets/airport_rental.svg";
import businessImg from "../assets/busines.jpeg";
import vmsImg from "../assets/Frame_1000001473.png";
import clubImg from "../assets/garibook_club.jpg";
import carImg4 from "../assets/hourly_rental.svg";
import carImg1 from "../assets/intercity_car_rental.svg";
import carImg2 from "../assets/rideshare.svg";
import Button from "./ui/Button";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("rides");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tabs = [
    { id: "rides", label: "Rides" },
    { id: "business", label: "Garibook Business" },
    { id: "club", label: "Garibook Club" },
    { id: "vms", label: "VMS" },
  ];

  // Rides Tab Data Array
  const ridesData = [
    {
      title: "Intercity Car Rental",
      description: "Travel between cities with comfort and confidence.",
      image: carImg1,
    },
    {
      title: "Ride share",
      description: "Go anywhere in the city, quickly and easily.",
      image: carImg2,
    },
    {
      title: "Airport Rental",
      description:
        "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
      image: carImg3,
    },
    {
      title: "Hourly Rental",
      description: "Rent a car by the hour, tailored to your needs.",
      image: carImg4,
    },
  ];

  return (
    <section className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
          Our Services
        </h2>

        {/* Top 4 Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-base transition-all whitespace-nowrap shadow-sm cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: RIDES (Mapped Cards with Hover Effect) */}
        {activeTab === "rides" && (
          <div>
            <h3 className="text-4xl sm:text-4xl font-bold tracking-tight mb-10 leading-tight">
              Every Ride <br /> One Platform
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ridesData.map((item, index) => {
                // Determine if this card should be active/primary (First card by default, or any card being hovered)
                const isCardActive =
                  hoveredIndex !== null ? hoveredIndex === index : index === 0;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative rounded-xl p-10 flex flex-col justify-center overflow-hidden shadow-sm transition-all duration-300 min-h-[300px] ${
                      isCardActive
                        ? "bg-primary text-primary-foreground shadow-xl"
                        : "bg-muted/50 text-foreground hover:shadow-xl"
                    }`}
                  >
                    {/* White shape coming from outside on active/hover */}
                    <div
                      className={`absolute top-10 left-0 w-25 h-18 bg-background rounded-r-lg transition-transform duration-500 ease-out z-0 ${
                        isCardActive ? "translate-x-0" : "-translate-x-full"
                      }`}
                    ></div>

                    {/* Top Image with translate effect */}
                    <div
                      className={`relative z-10 transition-transform duration-400 ${
                        isCardActive ? "translate-x-3" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-15 w-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-auto">
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isCardActive
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: GARIBOOK BUSINESS */}
        {activeTab === "business" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-4xl font-bold tracking-tight leading-tight">
                Modern Car Rentals for Business
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Simplify your corporate transportation, ensure on-time team
                mobility, and gain control with our VMS.
              </p>
              <Button>
                <span className="flex items-center gap-2">
                  <span>Learn More</span> <FaArrowRight className="text-sm" />
                </span>
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={businessImg}
                alt="Business Car"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* TAB 3: GARIBOOK CLUB */}
        {activeTab === "club" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-4xl font-bold tracking-tight leading-tight">
                Turn Your Car into Earnings with Garibook Club
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Garibook Club is more than just a community. Join a vibrant
                network of car enthusiasts, all fueled by the same passion: the
                open road and the thrill of making money doing what they love.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition-all">
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={clubImg}
                alt="Garibook Club"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* TAB 4: VMS */}
        {activeTab === "vms" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-4xl font-bold tracking-tight leading-tight">
                Vehicle Management System - VMS
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Just like Garibook Business makes traveling easy for your team,
                our Vehicle Management System (VMS) helps you take care of your
                own cars. VMS is a great tool that works with Garibook Business
                to make sure your vehicles are used the best way possible.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition-all">
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden p-6">
              <img
                src={vmsImg}
                alt="VMS Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
