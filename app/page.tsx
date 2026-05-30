"use client";

import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import CabFleet from "@/components/sections/CabFleet/CabFleet";
import TourPackages from "@/components/sections/TourPackages/TourPackages";
import Reviews from "@/components/sections/Reviews/Reviews";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import TripPlannerSidebar from "@/components/features/TripPlannerSidebar/TripPlannerSidebar";
import CheckoutModal from "@/components/features/CheckoutModal/CheckoutModal";
import { useState } from "react";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<any[]>([]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CabFleet />
      <TourPackages />
      <WhyChooseUs />
      <Reviews />
      <TripPlannerSidebar />
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedServices={selectedServices}
      />
    </main>
  );
}
