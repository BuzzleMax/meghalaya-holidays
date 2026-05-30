"use client";

import { motion } from "framer-motion";
import { Star, Shield, MapPin, Award, ChevronDown } from "lucide-react";
import { itemVariants } from "../../../lib/motion-variants";
import SearchWidget from "../BookingTabs/BookingTabs";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/50" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-background" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-32 sm:pb-40 text-center"
      >
        {/* Trust Badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 shadow-lg">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white/95 text-sm sm:text-base font-semibold">
              100% Secure & Verified Travel Partner
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight px-2"
        >
          Discover The Land of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">
            Clouds
          </span>{" "}
          Securely
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed px-2 font-light"
        >
          Your trusted gateway to Meghalaya, Assam & Arunachal Pradesh
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 shadow-lg">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
            <span className="text-white text-sm sm:text-base md:font-semibold">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 shadow-lg">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white text-sm sm:text-base md:font-semibold">Local Experts</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl border border-white/30 shadow-lg">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white text-sm sm:text-base md:font-semibold">500+ Happy Travelers</span>
          </div>
        </motion.div>

        {/* Search Widget */}
        <motion.div variants={itemVariants} className="relative z-20">
          <SearchWidget />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/60" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/25 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
