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

const apartmentComplexSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  "name": "雲向 CLOUDVIEW",
  "description": "北部都會區創科生活新地標，毗鄰170公頃粉嶺高爾夫球場，享受2.8萬呎度假式會所與園林。",
  "url": "https://hk-cloudview.com/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "粉嶺",
    "addressRegion": "新界",
    "addressCountry": "HK",
    "streetAddress": "粉錦公路與青山公路交界 (北部都會區核心)"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "value": "True",
      "name": "近2.8萬呎度假式會所 Cloud Retreat"
    },
    {
      "@type": "LocationFeatureSpecification",
      "value": "True",
      "name": "近50米園林泳池"
    },
    {
      "@type": "LocationFeatureSpecification",
      "value": "True",
      "name": "Oasis Fitness健身室"
    },
    {
      "@type": "LocationFeatureSpecification",
      "value": "True",
      "name": "180°無遮擋粉嶺高爾夫球場景觀"
    }
  ],
  "tourBookingPage": "https://hk-cloudview.com/#contact"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "雲向 CLOUDVIEW 提供哪些戶型？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "雲向提供開放式至3房單位，實用面積介乎 196 至 868 平方呎。其中近九成為1至2房單位，樓底極高達 3.25-3.55 米，部分更設有三合一露台。"
      }
    },
    {
      "@type": "Question",
      "name": "雲向的地理位置與交通如何？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "項目傲踞香港北部都會區核心，步行約 8 分鐘可達港鐵上水站，1 站即達羅湖或落馬洲口岸，未來更享北環線及新界東北線優勢，無縫連接大灣區與香港市區。"
      }
    },
    {
      "@type": "Question",
      "name": "雲向的入場價格大約是多少？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "首批開放式單位總價約 290 萬港元起，折實平均呎價約 13,974 元。項目預期租金回報樂觀，極具投資及自住價值。"
      }
    },
    {
      "@type": "Question",
      "name": "雲向有會所與園林設施嗎？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "有的，項目特聘國際知名景觀設計大師 Enzo Enea 打造近 2.8 萬呎的度假式會所「Cloud Retreat」及園林，包括五大主題花園、近 50米園林泳池及兒童樹屋等。"
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>雲向 CLOUDVIEW | 北都優越地段 盛綠園林會所</title>
        <meta name="description" content="雲向 CLOUDVIEW — 香港北部都會區一手新盤，毗鄰粉嶺高爾夫球場，提供一房至三房單位，實用面積196至868平方呎。" />
        {/* Keywords for Generative Engine Optimization */}
        <meta name="keywords" content="雲向, CLOUDVIEW, 北部都會區新盤, 粉嶺新樓, 上水站新樓盤, Enzo Enea 園林, 粉嶺高爾夫球場景觀, 香港大灣區房地產, 香港一房新盤, 雲向價單" />
        
        {/* Inject JSON-LD Schemas for AI and Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify(apartmentComplexSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
