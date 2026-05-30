"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, MessageCircle, Send, Shield, Award, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Tour Packages", href: "#packages" },
    { name: "Cab Booking", href: "#cabs" },
    { name: "Homestays", href: "#homestays" },
    { name: "Contact Us", href: "#contact" },
  ];

  const destinations = [
    { name: "Meghalaya", href: "#meghalaya" },
    { name: "Assam", href: "#assam" },
    { name: "Arunachal Pradesh", href: "#arunachal" },
    { name: "Shillong", href: "#shillong" },
    { name: "Tawang", href: "#tawang" },
    { name: "Kaziranga", href: "#kaziranga" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent-glow rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Meghalaya Holidays</h3>
                <p className="text-sm text-white/70">Your Trusted Gateway</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Premium travel experiences across Northeast India. Discover the hidden gems of Meghalaya, Assam, and Arunachal Pradesh with our expert local guides.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors min-h-[44px] min-w-[44px]"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/70 hover:text-accent transition-colors flex items-center py-2 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest.name}>
                  <motion.a
                    href={dest.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/70 hover:text-accent transition-colors flex items-center py-2 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100" />
                    {dest.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-base">Police Bazar, Shillong, Meghalaya 793001</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-white/70 text-base">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-white/70 text-base">info@meghalayaholidays.com</span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-accent-glow text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all text-sm sm:text-base min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/10"
        >
          <div className="bg-white/5 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-white/70 text-base">Get exclusive deals and travel tips directly to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors text-sm sm:text-base min-h-[48px]"
                />
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-3 bg-gradient-to-r from-accent to-accent-glow rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-accent/30 transition-all text-sm sm:text-base min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          <div className="flex items-center space-x-2 text-white/70">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-sm">100% Secure Booking</span>
          </div>
          <div className="flex items-center space-x-2 text-white/70">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-sm">Verified Local Partners</span>
          </div>
          <div className="flex items-center space-x-2 text-white/70">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-sm">24/7 Customer Support</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-white/50 text-sm">
            © 2024 Meghalaya Holidays. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors">Cancellation Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
