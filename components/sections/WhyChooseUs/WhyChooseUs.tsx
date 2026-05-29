"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Receipt, Headphones, Home, Map } from "lucide-react";
import { containerVariants, cardVariants } from "../../../lib/motion-variants";
import SectionHeader from "../../ui/SectionHeader";

const WhyChooseUs = () => {

  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Local Drivers",
      description: "Experienced drivers with deep knowledge of Northeast terrain and culture",
    },
    {
      icon: Receipt,
      title: "Transparent Pricing",
      description: "No hidden charges. Clear breakdown of all costs upfront",
    },
    {
      icon: ShieldCheck,
      title: "Insured Trips",
      description: "Comprehensive travel insurance for complete peace of mind",
    },
    {
      icon: Headphones,
      title: "24/7 Local Support",
      description: "Round-the-clock assistance from our local team",
    },
    {
      icon: Home,
      title: "Handpicked Homestays",
      description: "Curated stays with authentic local experiences",
    },
    {
      icon: Map,
      title: "Customized Itineraries",
      description: "Personalized trips tailored to your preferences",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-background to-background-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Why"
          highlight="Choose Us"
          subtitle="Your trusted partner for authentic Northeast India experiences"
        />

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 20px 40px -10px rgba(27, 67, 50, 0.15)"
              }}
              transition={{ duration: 0.3 }}
              className="group glass-card rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 flex-shrink-0">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 glass-card px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-accent fill-accent"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-text font-semibold text-sm sm:text-base">500+ Happy Travelers</span>
            <span className="text-text-muted hidden sm:inline">•</span>
            <span className="text-text-muted text-sm sm:text-base">4.9/5 Average Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
