"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Package, Home, X, Plus, Minus, ChevronRight, CheckCircle } from "lucide-react";

interface SelectedService {
  id: string;
  type: "cab" | "package" | "homestay";
  name: string;
  price: number;
  duration?: string;
  dates?: string;
}

const TripPlannerSidebar = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const addService = (service: SelectedService) => {
    setSelectedServices([...selectedServices, service]);
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== id));
  };

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

  const sidebarVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const sidebarVariantsDesktop = {
    hidden: { x: 400, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { x: 400, opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
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
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 bg-gradient-to-r from-primary to-primary-light text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Package className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold text-xs sm:text-base hidden sm:inline">Trip Planner</span>
            {selectedServices.length > 0 && (
              <span className="bg-accent text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                {selectedServices.length}
              </span>
            )}
          </div>
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed md:static right-0 bottom-0 md:top-0 h-[85vh] md:h-full w-full md:w-96 bg-white shadow-2xl z-50 md:z-40 border-t md:border-l border-gray-100 overflow-y-auto rounded-t-3xl md:rounded-none"
            >
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text">Trip Planner</h2>
                  <p className="text-xs sm:text-sm text-text-light">Customize your journey</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-text-light" />
                </button>
              </div>

              {/* Drag Handle for Mobile */}
              <div className="md:hidden flex justify-center mb-4">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Selected Services */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-semibold text-text mb-3 sm:mb-4 flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-success" />
                  Selected Services
                </h3>
                
                <AnimatePresence mode="popLayout">
                  {selectedServices.length === 0 ? (
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-center py-6 sm:py-8 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
                    >
                      <Package className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-2 sm:mb-3" />
                      <p className="text-text-light text-xs sm:text-sm">No services selected yet</p>
                      <p className="text-text-light text-xs mt-1">
                        Add cabs, packages, or homestays to your trip
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-2 sm:space-y-3">
                      {selectedServices.map((service) => {
                        const Icon = getServiceIcon(service.type);
                        return (
                          <motion.div
                            key={service.id}
                            variants={itemVariants}
                            layout
                            className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100 hover:border-primary/30 transition-all"
                          >
                            <div className="flex items-start justify-between">
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
                              <button
                                onClick={() => removeService(service.id)}
                                className="p-1 hover:bg-red-100 rounded-lg transition-colors group"
                              >
                                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-red-500" />
                              </button>
                            </div>
                            <div className="mt-2 sm:mt-3 flex items-center justify-between">
                              <span className="text-xs text-text-light capitalize">{service.type}</span>
                              <span className="font-semibold text-primary text-sm">₹{service.price.toLocaleString()}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6 border border-primary/10">
                <h3 className="text-xs sm:text-sm font-semibold text-text mb-3 sm:mb-4">Pricing Breakdown</h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-text-light">Subtotal</span>
                    <span className="text-text font-medium">₹{calculateSubtotal().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-text-light">Driver Allowance</span>
                    <span className="text-text font-medium">₹{calculateDriverAllowance().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-text-light">Taxes (5%)</span>
                    <span className="text-text font-medium">₹{calculateTaxes().toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-primary/20 pt-2 sm:pt-3 mt-2 sm:mt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-text text-xs sm:text-sm">Estimated Total</span>
                      <span className="font-bold text-lg sm:text-xl text-primary">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary-light text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-sm sm:text-base"
                >
                  <span>Continue Planning</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-accent-glow text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all text-sm sm:text-base"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Finalize Booking</span>
                </motion.button>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs text-text-light flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-success" />
                  Secure booking • No hidden charges
                </p>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TripPlannerSidebar;
