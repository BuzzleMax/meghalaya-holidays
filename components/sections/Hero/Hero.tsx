"use client";

import { motion } from "framer-motion";
import { Star, Shield, MapPin, Award, ChevronDown } from "lucide-react";
import { itemVariants } from "../../../lib/motion-variants";

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/40" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-background" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 text-center"
      >
        {/* Trust Badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/20">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              100% Secure & Verified Travel Partner
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight px-2"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Your trusted gateway to Meghalaya, Assam & Arunachal Pradesh
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-2"
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-xl border border-white/20">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent fill-accent" />
            <span className="text-white text-xs sm:text-sm md:font-semibold">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-xl border border-white/20">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-white text-xs sm:text-sm md:font-semibold">Local Experts</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-xl border border-white/20">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-white text-xs sm:text-sm md:font-semibold">500+ Happy Travelers</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white/60" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
