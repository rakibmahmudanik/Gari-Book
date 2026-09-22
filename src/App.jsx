import BookingForm from "./components/BookingForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
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
      </main>
    </>
  );
}

export default App;
