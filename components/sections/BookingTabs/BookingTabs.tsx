"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, MapPin, Home, Calendar, Users, Search, ArrowRight } from "lucide-react";

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState<"cab" | "packages" | "homestays">("cab");

  const tabs = [
    { id: "cab" as const, label: "Book Cab", icon: Car },
    { id: "packages" as const, label: "Tour Packages", icon: MapPin },
    { id: "homestays" as const, label: "Homestays", icon: Home },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative z-20 -mt-16 sm:-mt-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Tab Headers */}
        <div className="flex border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 sm:py-5 px-2 sm:px-4 transition-all duration-300 relative min-h-[52px] ${
                activeTab === tab.id
                  ? "text-primary bg-primary/5"
                  : "text-text-light hover:text-primary hover:bg-gray-50"
              }`}
            >
              <tab.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${activeTab === tab.id ? "text-accent" : ""}`} />
              <span className="font-semibold text-sm">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "cab" && (
              <motion.div
                key="cab"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Drop Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter drop location"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Cab Type</label>
                    <select className="w-full px-3 sm:px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-sm min-h-[48px]">
                      <option>Sedan (Swift Dzire)</option>
                      <option>SUV (Innova Crysta)</option>
                      <option>Traveller (Tempo)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        max="12"
                        placeholder="Number of passengers"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-text-light text-center sm:text-left">
                    <span className="font-semibold text-primary">Starting from</span> ₹3,500/day
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-accent to-accent-glow text-white px-6 sm:px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all min-h-[52px]"
                  >
                    <Search className="w-5 h-5" />
                    <span className="text-base">Search Cabs</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === "packages" && (
              <motion.div
                key="packages"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <select className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-sm">
                        <option>Meghalaya</option>
                        <option>Assam</option>
                        <option>Arunachal Pradesh</option>
                        <option>All Northeast</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Duration</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <select className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-sm">
                        <option>3-4 Days</option>
                        <option>5-7 Days</option>
                        <option>8-10 Days</option>
                        <option>10+ Days</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Budget</label>
                    <select className="w-full px-3 sm:px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white text-sm min-h-[48px]">
                      <option>₹10,000 - ₹20,000</option>
                      <option>₹20,000 - ₹35,000</option>
                      <option>₹35,000 - ₹50,000</option>
                      <option>₹50,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Group Size</label>
                    <div className="relative">
                      <Users className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        max="20"
                        placeholder="Number of travelers"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-text-light text-center sm:text-left">
                    <span className="font-semibold text-primary">Packages starting from</span> ₹15,000
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-accent to-accent-glow text-white px-6 sm:px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all min-h-[52px]"
                  >
                    <Search className="w-5 h-5" />
                    <span className="text-base">Explore Packages</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === "homestays" && (
              <motion.div
                key="homestays"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Check-in</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Check-out</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="Number of guests"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-text-light text-center sm:text-left">
                    <span className="font-semibold text-primary">Homestays starting from</span> ₹1,500/night
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-accent to-accent-glow text-white px-6 sm:px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all min-h-[52px]"
                  >
                    <Search className="w-5 h-5" />
                    <span className="text-base">Find Stays</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingTabs;
