import BeyondDestinations from "./components/BeyondDestinations";
import BookingForm from "./components/BookingForm";
import BookingToArrivalSection from "./components/BookingToArrivalSection";
import DownloadAppSection from "./components/DownloadAppSection";
import FreedomJourneySection from "./components/FreedomJourneySection";
import HeroSection from "./components/HeroSection";
import MoreThanMilesSection from "./components/MoreThanMilesSection";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Reviews from "./components/Reviews";
import ServicesSection from "./components/ServicesSection";
import SmartDriverSection from "./components/SmartDriverSection";
import States from "./components/States";
// import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BookingForm />
        <States />
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
      </footer>
    </>
  );
}

export default App;
