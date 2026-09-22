import { IoCarSport, IoCash, IoSpeedometer } from "react-icons/io5";

// Import your section image placeholder
import journeyImage from "../assets/garibook_freedom.webp";

export default function FreedomJourneySection() {
  // Data array for the 3 info cards without background
  const infoData = [
    {
      icon: <IoCarSport className="text-white text-2xl" />,
      iconBg: "bg-blue-600",
      title: "Choose the Car",
      description: "Pick what suits your comfort.",
    },
    {
      icon: <IoSpeedometer className="text-black text-2xl" />,
      iconBg: "bg-amber-400",
      title: "Choose the Driver",
      description: "Based on ratings and reviews.",
    },
    {
      icon: <IoCash className="text-white text-2xl" />,
      iconBg: "bg-emerald-600",
      title: "Choose the Fare",
      description: "Select the bid that fits your budget.",
    },
  ];

  return (
    <section className="w-full bg-[#010816] text-[#f7f9fb] py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-15">
          Freedom in Every Journey
        </h2>

        {/* Full Image Container */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-800">
          <img
            src={journeyImage}
            alt="Freedom in Every Journey"
            className="w-full h-[300px] sm:h-[450px] lg:h-[550px] object-cover"
          />
        </div>

        {/* Info Grid (Card type without background, font increased and right aligned on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 items-end">
          {infoData.map((item, index) => (
            <div className="flex  lg:justify-end">
              <div
                key={index}
                className="flex flex-col md:items-start space-y-4 px-4"
              >
                {/* Colored Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center shadow-md`}
                >
                  {item.icon}
                </div>

                {/* Title and Description with increased font size */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-left">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-400 text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
