import exploreRideImg from "../assets/BookingToArrival/explore.jpeg";
import freedom from "../assets/BookingToArrival/freedom.jpg";
import chooseCarImg from "../assets/BookingToArrival/prefarred_car.jpg";
import safeTravelImg from "../assets/BookingToArrival/safe_travel.svg";
import smoothExpImg from "../assets/BookingToArrival/smooth.jpg";
import Button from "./ui/Button";

export default function BookingToArrivalSection() {
  // Clean array: id, image, and layout type
  const bentoData = [
    {
      id: 1,
      image: exploreRideImg,
      layout: "horizontal", // Will take 2 columns span (Top Row - 1st Card)
    },
    {
      id: 2,
      image: freedom,
      layout: "vertical", // Will take 1 column span (Top Row - 2nd Card)
    },
    {
      id: 3,
      image: safeTravelImg,
      layout: "vertical", // Will take 1 column span (Bottom Row - 1st Card)
    },
    {
      id: 4,
      image: chooseCarImg,
      layout: "vertical", // Will take 1 column span (Bottom Row - 2nd Card)
    },
    {
      id: 5,
      image: smoothExpImg,
      layout: "vertical", // Will take 1 column span (Bottom Row - 3rd Card)
    },
  ];

  return (
    <section className="w-full bg-[#010816] text-[#f7f9fb] py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight"
          >
            From Booking to Arrival It’s <br />
            All in Your Hands
          </h2>
          <div data-aos="fade-right" data-aos-delay="200">
            <Button className="bg-primary text-background">Download</Button>
          </div>
        </div>

        {/* Bento Grid Mapped Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bentoData.map((item, index) => {
            // Dynamically assign colSpan based on layout
            const spanClass =
              item.layout === "horizontal" ? "lg:col-span-2" : "lg:col-span-1";

            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${300 * index + 300}`}
                key={item.id}
                className={`${spanClass} rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 bg-[#0b132b]/50 border border-slate-800`}
              >
                {/* Image Container with full coverage */}
                <div className="w-full h-72 sm:h-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt="Bento Grid Feature"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
