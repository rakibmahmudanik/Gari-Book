import BookingForm from "./components/BookingForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
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
      </main>
    </>
  );
}

export default App;
