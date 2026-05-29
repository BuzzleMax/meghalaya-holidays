"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight, Calendar, Users, Mountain } from "lucide-react";
import { containerVariants, cardVariants } from "../../../lib/motion-variants";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";

const TourPackages = () => {

  const packages = [
    {
      id: 1,
      name: "Mystical Meghalaya",
      duration: "5D/4N",
      price: "₹24,999",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      highlights: [
        "Living Root Bridges of Cherrapunji",
        "Crystal Clear Waters of Dawki",
        "Shillong City Tour",
        "Mawlynnong - Cleanest Village",
      ],
      itinerary: [
        "Day 1: Arrival in Shillong",
        "Day 2: Cherrapunji Waterfalls",
        "Day 3: Dawki River Experience",
        "Day 4: Mawlynnong Village",
        "Day 5: Departure",
      ],
      groupSize: "2-6",
      bestTime: "Oct - Mar",
    },
    {
      id: 2,
      name: "Arunachal Adventure",
      duration: "7D/6N",
      price: "₹42,999",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      highlights: [
        "Tawang Monastery Experience",
        "Sela Pass Mountain Views",
        "Bumla Border Visit",
        "Nuranang Waterfall",
      ],
      itinerary: [
        "Day 1: Guwahati to Bomdila",
        "Day 2: Tawang Journey",
        "Day 3: Tawang Monastery",
        "Day 4: Bumla Border",
        "Day 5: Sela Pass",
        "Day 6: Dirang Valley",
        "Day 7: Return to Guwahati",
      ],
      groupSize: "4-8",
      bestTime: "Apr - Oct",
    },
    {
      id: 3,
      name: "Assam Wildlife Escape",
      duration: "6D/5N",
      price: "₹32,999",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80",
      highlights: [
        "Kaziranga Rhino Safari",
        "Majuli River Island",
        "Tea Garden Experience",
        "Brahmaputra River Cruise",
      ],
      itinerary: [
        "Day 1: Guwahati Arrival",
        "Day 2: Kaziranga National Park",
        "Day 3: Jeep Safari Experience",
        "Day 4: Majuli Island",
        "Day 5: Tea Gardens",
        "Day 6: Departure",
      ],
      groupSize: "2-6",
      bestTime: "Nov - Apr",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Curated"
          highlight="Tour Packages"
          subtitle="Handcrafted itineraries exploring the hidden gems of Northeast India"
        />

        {/* Package Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-background-card rounded-3xl premium-shadow overflow-hidden border border-gray-100 hover:border-accent/40 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <motion.img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
                  <div className="bg-accent text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-accent/30">
                    {pkg.duration}
                  </div>
                  <div className="glass-card text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {pkg.price}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center space-x-2">
                  <div className="flex items-center glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
                    <span className="ml-1.5 font-semibold text-text text-xs sm:text-sm">{pkg.rating}</span>
                    <span className="ml-1 text-text-muted text-xs">({pkg.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{pkg.name}</h3>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center text-text-muted text-xs sm:text-sm font-medium">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-primary" />
                    {pkg.groupSize} travelers
                  </div>
                  <div className="flex items-center text-text-muted text-xs sm:text-sm font-medium">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-primary" />
                    {pkg.bestTime}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-text mb-2 flex items-center">
                    <Mountain className="w-4 h-4 mr-1.5 text-accent" />
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-text-muted flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary Preview */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="text-sm font-semibold text-text mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                    Itinerary Preview
                  </h4>
                  <div className="space-y-1">
                    {pkg.itinerary.slice(0, 3).map((day, idx) => (
                      <div key={idx} className="text-sm text-text-light">
                        {day}
                      </div>
                    ))}
                    {pkg.itinerary.length > 3 && (
                      <div className="text-sm text-accent font-medium">
                        +{pkg.itinerary.length - 3} more days
                      </div>
                    )}
                  </div>
                </div>

                <button className="w-full btn-primary px-6 py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 flex items-center justify-center space-x-2">
                  <span>View Full Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourPackages;
