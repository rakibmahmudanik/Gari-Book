import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BeyondDestinations from "./components/BeyondDestinations";
import BookingToArrivalSection from "./components/BookingToArrivalSection";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
import FreedomJourneySection from "./components/FreedomJourneySection";
import MoreThanMilesSection from "./components/MoreThanMilesSection";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Reviews from "./components/Reviews";
import BookingStatesWrapper from "./components/ScrollTriggeredAnimation/BookingStatesWrapper";
import ServicesSection from "./components/ServicesSection";
import SmartDriverSection from "./components/SmartDriverSection";
// import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 300,
    });
  }, []);
  return (
    <>
      <Navbar />
      <main>
        {/* <HeroSection /> */}
        {/* <BookingForm /> */}
        <BookingStatesWrapper />
        {/* <States /> */}
        <ServicesSection />
        <FreedomJourneySection />
        <MoreThanMilesSection />
        <BookingToArrivalSection />
        <SmartDriverSection />
        <NewsCard />
        <Reviews />
        <BeyondDestinations />
      </main>
      <footer>
        <DownloadAppSection />
        <Footer />
      </footer>
    </>
  );
}

export default App;
