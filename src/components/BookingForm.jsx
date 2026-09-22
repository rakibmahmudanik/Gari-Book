import { useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCar,
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState("car"); // 'car' or 'airport'
  const [carTripType, setCarTripType] = useState("oneway"); // 'oneway', 'round', 'hourly'
  const [airportTripType, setAirportTripType] = useState("airport"); // 'airport', 'home'
  const [hours, setHours] = useState(2);

  return (
    <div className="relative w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 z-30 -mb-40">
      {/* Top Tabs Container inside a white wrapper look */}
      <div className=" inline-flex  items-center gap-3 p-5 border border-border rounded-t-2xl">
        <button
          onClick={() => setActiveTab("car")}
          className={`px-8 py-4 rounded-lg font-bold text-base transition-all shadow-sm ${
            activeTab === "car"
              ? "bg-[var(--foreground)] text-[var(--background)] shadow-lg"
              : "bg-[var(--background)] text-[var(--foreground)] opacity-70 hover:opacity-100"
          }`}
        >
          Car Rental
        </button>

        <button
          onClick={() => setActiveTab("airport")}
          className={`px-8 py-4 rounded-lg font-bold text-base transition-all shadow-sm ${
            activeTab === "airport"
              ? "bg-[var(--foreground)] text-[var(--background)] shadow-lg"
              : "bg-[var(--background)] text-[var(--foreground)] opacity-70 hover:opacity-100"
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main White Card Body */}
      <div className="bg-[var(--background)] text-[var(--foreground)] rounded-3xl rounded-tl-none shadow-2xl p-6 sm:p-10 border border-[var(--border)]">
        {/* CAR RENTAL TAB CONTENT */}
        {activeTab === "car" && (
          <div>
            {/* Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pb-8 border-b border-[var(--border)]">
              {/* Field 1: Choose a Car */}
              <div className="flex flex-col space-y-2 p-3  border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaCar className="text-base" />
                  <span>
                    Choose a Car <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] focus:outline-none cursor-pointer">
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Select Car Type
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Sedan
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    SUV
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Microbus
                  </option>
                </select>
              </div>

              {/* Field 2: Pickup Location */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-500 text-base" />
                  <span>
                    Pickup Location <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                />
              </div>

              {/* Field 3: Drop-off Location (Shown for One Way & Round Way) */}
              {carTripType !== "hourly" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                  <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600 text-base" />
                    <span>
                      Drop-off Location <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                    className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                  />
                </div>
              )}

              {/* Field 4: Pickup Date & Time */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaCalendarAlt className="text-base" />
                  <span>
                    Pickup Date & Time <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY 00:00 PM"
                  className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                />
              </div>

              {/* Extra Field for Round Way: Return Date */}
              {carTripType === "round" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border md:col-span-4 lg:col-span-1">
                  <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <FaCalendarAlt className="text-base" />
                    <span>
                      Return Date & Time <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="calender"
                    placeholder="MM/DD/YYYY 00:00 PM"
                    className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                  />
                </div>
              )}

              {/* Extra Field for Hourly: Select Hours */}
              {carTripType === "hourly" && (
                <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                  <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <FaCalendarAlt className="text-base" />
                    <span>
                      Select Hours <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setHours(Math.max(2, hours - 1))}
                      className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)] text-[var(--foreground)]"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-base font-semibold text-[var(--foreground)]">
                      {hours} hours
                    </span>
                    <button
                      onClick={() => setHours(hours + 1)}
                      className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)] text-[var(--foreground)]"
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

            {/* Bottom Radio Buttons & Continue Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <label
                  onClick={() => setCarTripType("oneway")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "oneway"
                      ? "bg-[var(--muted)] shadow-sm"
                      : "hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "oneway" ? "border-primary" : "border-[var(--muted-foreground)]"}`}
                  >
                    {carTripType === "oneway" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--foreground)]">
                    One Way
                  </span>
                </label>

                <label
                  onClick={() => setCarTripType("round")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "round"
                      ? "bg-[var(--muted)] shadow-sm"
                      : "hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "round" ? "border-primary" : "border-[var(--muted-foreground)]"}`}
                  >
                    {carTripType === "round" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--foreground)]">
                    Round Way
                  </span>
                </label>

                <label
                  onClick={() => setCarTripType("hourly")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    carTripType === "hourly"
                      ? "bg-[var(--muted)] shadow-sm"
                      : "hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${carTripType === "hourly" ? "border-primary" : "border-[var(--muted-foreground)]"}`}
                  >
                    {carTripType === "hourly" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--foreground)]">
                    Hourly
                  </span>
                </label>
              </div>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/30 transition-all active:scale-95">
                <span>Continue</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        )}

        {/* AIRPORT RENTAL TAB CONTENT */}
        {activeTab === "airport" && (
          <div>
            {/* Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pb-8 border-b border-[var(--border)]">
              {/* Field 1: Choose a Car */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaCar className="text-base" />
                  <span>
                    Choose a Car <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] focus:outline-none cursor-pointer">
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Select Car Type
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Sedan
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    SUV
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Microbus
                  </option>
                </select>
              </div>

              {/* Field 2: Pickup Location */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-500 text-base" />
                  <span>
                    Pickup Location <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                />
              </div>

              {/* Field 3: Drop-off Airport */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600 text-base" />
                  <span>
                    Drop-off Airport <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] focus:outline-none cursor-pointer">
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Select Airport
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Hazrat Shahjalal International Airport
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Shah Amanat International Airport
                  </option>
                  <option className="bg-[var(--background)] text-[var(--foreground)]">
                    Osmani International Airport
                  </option>
                </select>
              </div>

              {/* Field 4: Pickup Date & Time */}
              <div className="flex flex-col space-y-2 p-3 border-r-2 border-border">
                <label className="text-sm font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                  <FaCalendarAlt className="text-base" />
                  <span>
                    Pickup Date & Time <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY 00:00 PM"
                  className="w-full bg-transparent text-base font-semibold text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
                />
              </div>
            </div>

            {/* Bottom Radio Buttons & Continue Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <label
                  onClick={() => setAirportTripType("airport")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    airportTripType === "airport"
                      ? "bg-[var(--muted)] shadow-sm"
                      : "hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${airportTripType === "airport" ? "border-primary" : "border-[var(--muted-foreground)]"}`}
                  >
                    {airportTripType === "airport" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--foreground)]">
                    From Airport
                  </span>
                </label>

                <label
                  onClick={() => setAirportTripType("home")}
                  className={`flex items-center gap-3 cursor-pointer px-5 py-3 rounded-2xl transition-all ${
                    airportTripType === "home"
                      ? "bg-[var(--muted)] shadow-sm"
                      : "hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${airportTripType === "home" ? "border-primary" : "border-[var(--muted-foreground)]"}`}
                  >
                    {airportTripType === "home" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--foreground)]">
                    From Home
                  </span>
                </label>
              </div>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/30 transition-all active:scale-95">
                <span>Continue</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
