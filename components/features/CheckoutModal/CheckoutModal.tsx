"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, MapPin, Calendar, Car, Package, Home, MessageCircle, CheckCircle, FileText } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: Array<{
    id: string;
    type: "cab" | "package" | "homestay";
    name: string;
    price: number;
    duration?: string;
    dates?: string;
  }>;
}

const CheckoutModal = ({ isOpen, onClose, selectedServices }: CheckoutModalProps) => {
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [travelNotes, setTravelNotes] = useState("");

  const calculateSubtotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const calculateDriverAllowance = () => {
    return selectedServices.length * 500;
  };

  const calculateTaxes = () => {
    return calculateSubtotal() * 0.05;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDriverAllowance() + calculateTaxes();
  };

  const generateWhatsAppMessage = () => {
    const message = `
🏔️ *MEGHALAYA HOLIDAYS - BOOKING REQUEST*

👤 *Passenger Details*
• Name: ${passengerDetails.name}
• Phone: ${passengerDetails.phone}
• Email: ${passengerDetails.email}
• Address: ${passengerDetails.address}

📋 *Selected Services*
${selectedServices.map((service, index) => {
  const icon = service.type === "cab" ? "🚖" : service.type === "package" ? "🗺️" : "🏡";
  return `${index + 1}. ${icon} ${service.name} - ₹${service.price.toLocaleString()}${service.duration ? ` (${service.duration})` : ""}${service.dates ? ` - ${service.dates}` : ""}`;
}).join("\n")}

💰 *Pricing Breakdown*
• Subtotal: ₹${calculateSubtotal().toLocaleString()}
• Driver Allowance: ₹${calculateDriverAllowance().toLocaleString()}
• Taxes (5%): ₹${calculateTaxes().toLocaleString()}
• *Total: ₹${calculateTotal().toLocaleString()}*

📝 *Travel Notes*
${travelNotes || "No additional notes"}

---
*Generated via Meghalaya Holidays Website*
    `.trim();

    return encodeURIComponent(message);
  };

  const handleWhatsAppBooking = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { scale: 0.95, y: 20, opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { scale: 0.95, y: 20, opacity: 0, transition: { duration: 0.2 } },
  };

  const contentVariantsMobile = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "cab":
        return Car;
      case "package":
        return Package;
      case "homestay":
        return Home;
      default:
        return Package;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case "cab":
        return "bg-blue-100 text-blue-600";
      case "package":
        return "bg-purple-100 text-purple-600";
      case "homestay":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Mobile Version */}
          <motion.div
            variants={contentVariantsMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed bottom-0 left-0 right-0 h-[90vh] bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl overflow-y-auto border-t border-white/20 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-4 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-text">Complete Your Booking</h2>
                  <p className="text-xs sm:text-sm text-text-light mt-1">Review your trip details and confirm</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-text-light" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Trip Summary */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/10">
                <h3 className="text-base sm:text-lg font-semibold text-text mb-4 flex items-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  Trip Summary
                </h3>
                
                <div className="space-y-3">
                  {selectedServices.map((service) => {
                    const Icon = getServiceIcon(service.type);
                    return (
                      <div key={service.id} className="flex items-start justify-between p-3 bg-white rounded-xl border border-gray-100">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className={`p-2 rounded-lg ${getServiceColor(service.type)}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text text-sm">{service.name}</h4>
                            {service.duration && (
                              <p className="text-xs text-text-light">{service.duration}</p>
                            )}
                            {service.dates && (
                              <p className="text-xs text-text-light">{service.dates}</p>
                            )}
                          </div>
                        </div>
                        <span className="font-semibold text-primary text-sm">₹{service.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Passenger Details */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text mb-4 flex items-center">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  Passenger Details
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        value={passengerDetails.name}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={passengerDetails.phone}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="email"
                        value={passengerDetails.email}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Pickup Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        value={passengerDetails.address}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, address: e.target.value })}
                        placeholder="Enter pickup location"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Notes */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-text mb-4 flex items-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  Travel Notes (Optional)
                </h3>
                <textarea
                  value={travelNotes}
                  onChange={(e) => setTravelNotes(e.target.value)}
                  placeholder="Any special requirements or preferences..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm"
                />
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-5 border border-accent/10">
                <h3 className="text-base sm:text-lg font-semibold text-text mb-4">Payment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Subtotal</span>
                    <span className="text-text font-medium">₹{calculateSubtotal().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Driver Allowance</span>
                    <span className="text-text font-medium">₹{calculateDriverAllowance().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Taxes (5%)</span>
                    <span className="text-text font-medium">₹{calculateTaxes().toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-accent/20 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-text text-base">Total Amount</span>
                      <span className="font-bold text-2xl text-accent">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppBooking}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-accent to-accent-glow text-white py-4 rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Confirm via WhatsApp</span>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Trust Badge */}
              <div className="text-center">
                <p className="text-xs text-text-light flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-success" />
                  Your booking will be confirmed via WhatsApp within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Version */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:block bg-white/95 backdrop-blur-glass rounded-3xl shadow-glass w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-6 rounded-t-3xl z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-text">Complete Your Booking</h2>
                  <p className="text-sm text-text-light mt-1">Review your trip details and confirm</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6 text-text-light" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Trip Summary */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/10">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Trip Summary
                </h3>
                
                <div className="space-y-3">
                  {selectedServices.map((service) => {
                    const Icon = getServiceIcon(service.type);
                    return (
                      <div key={service.id} className="flex items-start justify-between p-3 bg-white rounded-xl border border-gray-100">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${getServiceColor(service.type)}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text text-sm">{service.name}</h4>
                            {service.duration && (
                              <p className="text-xs text-text-light">{service.duration}</p>
                            )}
                            {service.dates && (
                              <p className="text-xs text-text-light">{service.dates}</p>
                            )}
                          </div>
                        </div>
                        <span className="font-semibold text-primary">₹{service.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Passenger Details */}
              <div>
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Passenger Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={passengerDetails.name}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={passengerDetails.phone}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={passengerDetails.email}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text">Pickup Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={passengerDetails.address}
                        onChange={(e) => setPassengerDetails({ ...passengerDetails, address: e.target.value })}
                        placeholder="Enter pickup location"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Notes */}
              <div>
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Travel Notes (Optional)
                </h3>
                <textarea
                  value={travelNotes}
                  onChange={(e) => setTravelNotes(e.target.value)}
                  placeholder="Any special requirements or preferences..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-5 border border-accent/10">
                <h3 className="text-lg font-semibold text-text mb-4">Payment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Subtotal</span>
                    <span className="text-text font-medium">₹{calculateSubtotal().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Driver Allowance</span>
                    <span className="text-text font-medium">₹{calculateDriverAllowance().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">Taxes (5%)</span>
                    <span className="text-text font-medium">₹{calculateTaxes().toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-accent/20 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-text">Total Amount</span>
                      <span className="font-bold text-2xl text-accent">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppBooking}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-accent to-accent-glow text-white py-4 rounded-xl font-semibold shadow-glow hover:shadow-accent/50 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Confirm via WhatsApp</span>
                <CheckCircle className="w-5 h-5" />
              </motion.button>

              {/* Trust Badge */}
              <div className="text-center">
                <p className="text-xs text-text-light flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-success" />
                  Your booking will be confirmed via WhatsApp within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
  );
};

export default CheckoutModal;
