import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay, FaTimes } from "react-icons/fa";

export default function Reviews() {
  const scrollRef = useRef(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  // Passenger data array with thumbnail, youtube video link, name, and designation
  const passengersData = [
    {
      id: 1,
      name: "Atif Haider",
      designation: "Banker",
      thumbnail: "https://img.youtube.com/vi/JsBwaJ_VIcA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/JsBwaJ_VIcA?si=Ym0qhpUQHPzd_AOR",
    },
    {
      id: 2,
      name: "Mohammad Habibur Rahman",
      designation: "Banker",
      thumbnail: "https://img.youtube.com/vi/CsxeEof1T3M/maxresdefault.jpg",
      videoUrl: "https://youtu.be/CsxeEof1T3M?si=UVFbnOW5RM80PSPQ",
    },
    {
      id: 3,
      name: "Sadia Afrin",
      designation: "Service Holder",
      thumbnail: "https://img.youtube.com/vi/8ma9XEGhi5s/maxresdefault.jpg",
      videoUrl: "https://youtu.be/8ma9XEGhi5s?si=2Jle0LdkZGMW7ff7",
    },
    {
      id: 4,
      name: "Atif Haider",
      designation: "Banker",
      thumbnail: "https://img.youtube.com/vi/JsBwaJ_VIcA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/JsBwaJ_VIcA?si=Ym0qhpUQHPzd_AOR",
    },
  ];

  // Scroll handler for Left/Right arrows
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Helper to accurately extract YouTube ID from both standard & short URLs
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return `${url}?autoplay=1`;

    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <section className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 overflow-hidden">
      <div className="max-w-full mx-auto">
        {/* Section Header with Title, Subtitle and Navigation Arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Our Passengers Speak For Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our journey was seamless and enjoyable from start to finish. The
              booking process was straightforward, and the staff were incredibly
              attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground hover:border-primary transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll Left"
            >
              <FaArrowLeft className="text-base" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground hover:border-primary transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll Right"
            >
              <FaArrowRight className="text-base" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          {passengersData.map((passenger) => (
            <div
              key={passenger.id}
              className="flex flex-col min-w-[320px] sm:min-w-[420px] max-w-[450px] flex-shrink-0 snap-start"
            >
              {/* Video Thumbnail Card with Play Button */}
              <div
                onClick={() => setActiveVideoUrl(passenger.videoUrl)}
                className="relative w-full h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-border mb-4 bg-muted group"
              >
                <img
                  src={passenger.thumbnail}
                  alt={passenger.name}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay (No image zoom hover effect) */}
                <div className="absolute inset-0 bg-black/20 transition-colors"></div>

                {/* Center Play Button with Hover Effect Only */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <FaPlay className="text-xl ml-1" />
                  </div>
                </div>
              </div>

              {/* Passenger Info */}
              <div>
                <h3 className="text-xl font-bold">{passenger.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {passenger.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal Popup */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-border">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Video Frame */}
            <div className="relative w-full aspect-video">
              <iframe
                src={getEmbedUrl(activeVideoUrl)}
                title="Passenger Review Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
