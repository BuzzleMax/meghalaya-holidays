"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Map, Home, Calendar, Users, Search, ArrowRight } from "lucide-react";
import Input from "../../ui/Input";

type TabType = "cab" | "packages" | "stays";

const SearchEngine = () => {
  const [activeTab, setActiveTab] = useState<TabType>("cab");

  const tabs = [
    { id: "cab" as TabType, label: "Book Cab", icon: Car },
    { id: "packages" as TabType, label: "Tour Packages", icon: Map },
    { id: "stays" as TabType, label: "Stays/Homestays", icon: Home },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "cab":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Pickup Location"
              placeholder="Enter pickup location"
              icon={Map}
            />
            <Input
              label="Drop Location"
              placeholder="Enter drop location"
              icon={Map}
            />
            <Input
              label="Travel Date"
              placeholder="Select date"
              icon={Calendar}
              type="date"
            />
            <div className="flex flex-col">
              <label className="text-sm font-medium text-text mb-2">Cab Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent">
                <option value="">Select cab type</option>
                <option value="sedan">Sedan (Swift Dzire)</option>
                <option value="suv">SUV (Innova Crysta)</option>
                <option value="traveller">Traveller (Group)</option>
              </select>
            </div>
          </div>
        );
      case "packages":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              label="Destination"
              placeholder="Where do you want to go?"
              icon={Map}
            />
            <Input
              label="Travel Date"
              placeholder="Select date"
              icon={Calendar}
              type="date"
            />
            <Input
              label="Number of Travelers"
              placeholder="How many people?"
              icon={Users}
              type="number"
            />
          </div>
        );
      case "stays":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Location"
              placeholder="Where do you want to stay?"
              icon={Map}
            />
            <Input
              label="Check-in Date"
              placeholder="Select date"
              icon={Calendar}
              type="date"
            />
            <Input
              label="Check-out Date"
              placeholder="Select date"
              icon={Calendar}
              type="date"
            />
            <Input
              label="Number of Guests"
              placeholder="How many guests?"
              icon={Users}
              type="number"
            />
          </div>
        );
    }
  };

  return (
    <div className="relative z-20 -mt-20 sm:-mt-24 md:-mt-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden"
      >
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 sm:px-6 py-4 sm:py-5 transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white border-b-2 border-accent"
                  : "bg-white text-text hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-semibold text-sm sm:text-base">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8"
          >
            {renderTabContent()}

            {/* Search Button */}
            <div className="mt-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2 btn-primary px-8 py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-accent/30"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchEngine;
