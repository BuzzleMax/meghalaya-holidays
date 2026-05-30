"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Package, Car, Home, Phone, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", icon: MapPin, href: "#explore" },
    { name: "Packages", icon: Package, href: "#packages" },
    { name: "Book Cabs", icon: Car, href: "#cabs" },
    { name: "Homestays", icon: Home, href: "#homestays" },
    { name: "Contact", icon: Phone, href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-50 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-glass shadow-glass border border-white/20"
            : "bg-white/70 backdrop-blur-glass shadow-glass border border-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-primary leading-tight">Meghalaya Holidays</span>
                <span className="text-xs text-text-light hidden sm:block">Premium Travel Experiences</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative px-4 py-2.5 rounded-lg text-text hover:text-primary transition-colors group"
                >
                  <span className="flex items-center space-x-2">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-accent to-accent-glow text-white px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-accent/50 transition-all text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4" />
              <span>Plan My Trip</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-4 rounded-lg hover:bg-gray-100 transition-colors active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 sm:top-20 left-4 right-4 sm:left-4 sm:right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 sm:p-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors active:scale-95 min-h-[48px]"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-text">{link.name}</span>
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-accent-glow text-white px-6 py-4 rounded-xl font-semibold shadow-glow text-sm sm:text-base min-h-[52px]"
              >
                <Sparkles className="w-5 h-5" />
                <span>Plan My Trip</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
