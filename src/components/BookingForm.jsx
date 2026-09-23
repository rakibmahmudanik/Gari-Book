import { useState } from "react";
import {
  FaCalendarAlt,
  FaCar,
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Button from "./ui/Button";

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("car"); // 'car' or 'airport'
  const [carTripType, setCarTripType] = useState("oneway"); // 'oneway', 'round', 'hourly'
  const [airportTripType, setAirportTripType] = useState("airport"); // 'airport', 'home'
  const [hours, setHours] = useState(2);

  const zoomIn = useScrollReveal({
    type: "zoom",
    scale: 0.8,
    start: "top bottom",
    duration: 1.2,
    delay: 0.2,
    ease: "back.out(1.7)",
    toggleActions: "play none none none",
  });

  return (
    <div
      ref={zoomIn}
      className="relative w-full -mb-70  max-w-full mx-auto px-4 sm:px-6 lg:px-8 z-30"
    >
      {/* Top Tabs Container inside a white wrapper look */}
      <div className="inline-flex items-center gap-3 p-5 border border-border rounded-t-2xl bg-background">
        <button
          onClick={() => setActiveTab("car")}
          className={`px-8 py-4 rounded-lg font-bold text-base transition-all shadow-sm ${
            activeTab === "car"
              ? "bg-foreground text-background shadow-lg"
              : "bg-background text-foreground opacity-70 hover:opacity-100"
          }`}
        >
          Car Rental
        </button>

        <button
          onClick={() => setActiveTab("airport")}
          className={`px-8 py-4 rounded-lg font-bold text-base transition-all shadow-sm ${
            activeTab === "airport"
              ? "bg-foreground text-background shadow-lg"
              : "bg-background text-foreground opacity-70 hover:opacity-100"
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main White Card Body */}
      <div className="bg-background text-foreground rounded-3xl rounded-tl-none shadow-2xl border border-border p-6 sm:p-10">
        {/* CAR RENTAL TAB CONTENT */}
        {activeTab === "car" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pb-8 border-b border-border">
              {/* Field 1: Choose a Car */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaCar className="text-base" />
                  <span>
                    Choose a Car <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer">
                  <option className="bg-background text-foreground">
                    Select Car Type
                  </option>
                  <option className="bg-background text-foreground">
                    Sedan
                  </option>
                  <option className="bg-background text-foreground">SUV</option>
                  <option className="bg-background text-foreground">
                    Microbus
                  </option>
                </select>
              </div>

              {/* Field 2: Pickup Location */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-500 text-base" />
                  <span>
                    Pickup Location <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  className="w-full bg-transparent text-base font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>

              {/* Field 3: Drop-off Location */}
              {carTripType !== "hourly" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                  <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600 text-base" />
                    <span>
                      Drop-off Location <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                    className="w-full bg-transparent text-base font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              )}

              {/* Field 4: Pickup Date & Time */}
              <div className="flex flex-col space-y-2 p-3 rounded-xl bg-muted/50 border border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaCalendarAlt className="text-base" />
                  <span>
                    Pickup Date & Time <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="datetime-local"
                  className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer"
                />
              </div>

              {/* Extra Field for Round Way */}
              {carTripType === "round" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border md:col-span-4 lg:col-span-1">
                  <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                    <FaCalendarAlt className="text-base" />
                    <span>
                      Return Date & Time <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer"
                  />
                </div>
              )}

              {/* Extra Field for Hourly */}
              {carTripType === "hourly" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                  <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                    <FaCalendarAlt className="text-base" />
                    <span>
                      Select Hours <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setHours(Math.max(2, hours - 1))}
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted text-foreground"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-base font-semibold text-foreground">
                      {hours} hours
                    </span>
                    <button
                      onClick={() => setHours(hours + 1)}
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted text-foreground"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                  <span className="text-xs text-red-500 mt-0.5">
                    Minimum 2 hours is required for an hourly trip.
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Radio & Continue Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <label
                  onClick={() => setCarTripType("oneway")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "oneway"
                      ? "bg-muted shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "oneway" ? "border-primary" : "border-muted-foreground"}`}
                  >
                    {carTripType === "oneway" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-foreground">
                    One Way
                  </span>
                </label>

                <label
                  onClick={() => setCarTripType("round")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "round"
                      ? "bg-muted shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "round" ? "border-primary" : "border-muted-foreground"}`}
                  >
                    {carTripType === "round" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-foreground">
                    Round Way
                  </span>
                </label>

                <label
                  onClick={() => setCarTripType("hourly")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "hourly"
                      ? "bg-muted shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "hourly" ? "border-primary" : "border-muted-foreground"}`}
                  >
                    {carTripType === "hourly" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-foreground">
                    Hourly
                  </span>
                </label>
              </div>

              <Button className="bg-primary text-background">Continue</Button>
            </div>
          </div>
        )}

        {/* AIRPORT RENTAL TAB CONTENT */}
        {activeTab === "airport" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pb-8 border-b border-border">
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaCar className="text-base" />
                  <span>
                    Choose a Car <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer">
                  <option className="bg-background text-foreground">
                    Select Car Type
                  </option>
                  <option className="bg-background text-foreground">
                    Sedan
                  </option>
                  <option className="bg-background text-foreground">SUV</option>
                  <option className="bg-background text-foreground">
                    Microbus
                  </option>
                </select>
              </div>

              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-500 text-base" />
                  <span>
                    Pickup Location <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  className="w-full bg-transparent text-base font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600 text-base" />
                  <span>
                    Drop-off Airport <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer">
                  <option className="bg-background text-foreground">
                    Select Airport
                  </option>
                  <option className="bg-background text-foreground">
                    Hazrat Shahjalal International Airport
                  </option>
                  <option className="bg-background text-foreground">
                    Shah Amanat International Airport
                  </option>
                  <option className="bg-background text-foreground">
                    Osmani International Airport
                  </option>
                </select>
              </div>

              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                  <FaCalendarAlt className="text-base" />
                  <span>
                    Pickup Date & Time <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="datetime-local"
                  className="w-full bg-transparent text-base font-semibold text-foreground focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <label
                  onClick={() => setAirportTripType("airport")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    airportTripType === "airport"
                      ? "bg-muted shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${airportTripType === "airport" ? "border-primary" : "border-muted-foreground"}`}
                  >
                    {airportTripType === "airport" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-foreground">
                    From Airport
                  </span>
                </label>

                <label
                  onClick={() => setAirportTripType("home")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    airportTripType === "home"
                      ? "bg-muted shadow-sm"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${airportTripType === "home" ? "border-primary" : "border-muted-foreground"}`}
                  >
                    {airportTripType === "home" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-foreground">
                    From Home
                  </span>
                </label>
              </div>

              <Button className="bg-primary text-background">Continue</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
