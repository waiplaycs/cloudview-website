/*
 * 雲向 CLOUDVIEW — 主頁面
 * 風格: 清新都市主義 (Fresh Urbanism)
 * 整合所有區域組件
 */

import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import SalesSection from "@/components/SalesSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>雲向 CLOUDVIEW | 北都優越地段 盛綠園林會所</title>
        <meta name="description" content="雲向 CLOUDVIEW — 香港北部都會區一手新盤，毗鄰粉嶺高爾夫球場，提供一房至三房單位，實用面積196至868平方呎。" />
      </Helmet>
      <HeroSection />
      <HighlightsSection />
      <ArchitectureSection />
      <AmenitiesSection />
      <LocationSection />
      <SalesSection />
      <ContactSection />

    </div>
  );
}
