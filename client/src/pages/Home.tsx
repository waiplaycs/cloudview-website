/*
 * 雲向 CLOUDVIEW — 主頁面
 * 風格: 清新都市主義 (Fresh Urbanism)
 * 整合所有區域組件
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import SalesSection from "@/components/SalesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// ...existing code...

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <ArchitectureSection />
      <AmenitiesSection />
      <LocationSection />
      <SalesSection />
      <ContactSection />
  <Footer />
// ...existing code...
    </div>
  );
}
