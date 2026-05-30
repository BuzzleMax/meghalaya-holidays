"use client";

import { motion } from "framer-motion";
import { Car, Users, Briefcase, MessageCircle, Plus } from "lucide-react";
import { containerVariants, cardVariants } from "../../../lib/motion-variants";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";

const CabFleet = () => {

  const vehicles = [
    {
      name: "Maruti Swift Dzire",
      type: "Sedan - Budget",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
      price: "₹3,500",
      passengers: 4,
      luggage: 2,
      ac: true,
      features: ["Perfect for couples", "Hill travel optimized", "Local driver included"],
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium SUV - Luxury",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
      price: "₹5,500",
      passengers: 7,
      luggage: 4,
      ac: true,
      features: ["Best for families", "Luxury comfort", "Expert hill driver"],
    },
    {
      name: "Tempo Traveller",
      type: "Group Tour",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
      price: "₹8,000",
      passengers: 12,
      luggage: 8,
      ac: true,
      features: ["Perfect for groups", "Pushback seats", "Professional driver"],
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Premium"
          highlight="Cab Fleet"
          subtitle="Choose from our range of well-maintained vehicles perfect for Northeast India's terrain"
        />

        {/* Vehicle Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-accent text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {vehicle.price}/day
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">{vehicle.name}</h3>
                    <p className="text-text-light text-sm sm:text-base">{vehicle.type}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {vehicle.ac && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-semibold">AC</span>
                    )}
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <p className="text-sm sm:text-base font-semibold text-text">{vehicle.passengers}</p>
                    <p className="text-xs text-text-light">Seats</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                    <Briefcase className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <p className="text-sm sm:text-base font-semibold text-text">{vehicle.luggage}</p>
                    <p className="text-xs text-text-light">Bags</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
                    <Car className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <p className="text-sm sm:text-base font-semibold text-text">Auto</p>
                    <p className="text-xs text-text-light">Trans</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm text-text-light">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="flex-1"
                    icon={MessageCircle}
                  >
                    <span className="hidden sm:inline">Book via WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-[52px] px-4"
                    icon={Plus}
                  >
                    <span className="sr-only">Add to trip</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CabFleet;
