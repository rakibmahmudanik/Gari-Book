import airportImg from "../assets/Airport Rental_Webp.webp";
import familyImg from "../assets/family_trips.webp";
import longTourImg from "../assets/Group Tour_Webp.webp";

export default function MoreThanMilesSection() {
  // Data array for the 3 visual feature cards
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

  return (
    <section className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            More Than Miles — <br />
            We Bring People Together
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl h-90 sm:h-100 flex flex-col justify-start p-8 border border-border"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
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
