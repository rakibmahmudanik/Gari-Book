import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReuseableCard from "./Common/ReuseableCard";

export default function NewsCard() {
  const [newsData, setNewsData] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Ba jodi async fetch use korte chan:

    fetch("newsData.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error("Error loading news:", err));
  }, []);

  // console.log(newsData);

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

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="100"
      className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-full mx-auto">
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            We Featured by Top news <br className="hidden sm:block" /> Platforms
          </h2>

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
          className=" w-full flex items-stretch justify-between gap-5 overflow-x-auto pb-6 scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          {newsData.map((news) => (
            <div key={news.id} className="snap-start">
              <ReuseableCard
                image={news.image}
                date={news.date}
                title={news.title}
                description={news.description}
                publisherLogo={news.publisherLogo}
                readUrl={news.readUrl}
                showFooter={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
