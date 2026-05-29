import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import SearchEngine from "@/components/sections/SearchEngine/SearchEngine";
import CabFleet from "@/components/sections/CabFleet/CabFleet";
import TourPackages from "@/components/sections/TourPackages/TourPackages";
import Reviews from "@/components/sections/Reviews/Reviews";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchEngine />
      <CabFleet />
      <TourPackages />
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </main>
  );
}
