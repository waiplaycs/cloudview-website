/*
 * 雲向 CLOUDVIEW — 項目亮點區域
 * 風格: 天空藍漸層背景，圖文並排，滾動觸發動畫
 */

import { useEffect, useRef, useState } from "react";
import { MapPin, Train, Leaf, Layout, Coffee, ShoppingBag, GraduationCap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const GOLF_IMAGES = [
  "/golfview3.jpg",
  "/golfview2.jpg",
  "/golfview5.jpg"
];

const highlights = [
  {
    icon: MapPin,
    title: "北部都會區核心優勢",
    desc: "位於粉錦公路與青山公路交界核心試點，享未來20年發展紅利。毗鄰創科走廊，區內人口預計增至46萬，基建持續升級，長期增值潛力顯著。",
  },
  {
    icon: Train,
    title: "便捷交通網絡",
    desc: "步行約8分鐘達上水站，1站到羅湖/落馬洲，直通紅磡金鐘無需換乘。未來2027年北環線及新皇崗口岸啟用後，完美適配雙城生活。",
  },
  {
    icon: Leaf,
    title: "稀缺180°高爾夫景觀",
    desc: "南向/西南向單位享180°無遮擋粉嶺高爾夫球場景觀(170公頃)。高層遠眺深圳天際線，落地玻璃窗設計強化景觀，部分帶40呎「三合一」露台。",
  },
  {
    icon: Layout,
    title: "高實用率與優質戶型",
    desc: "實用率約86%，無多餘過道浪費。3.25-3.55米超高樓底，提供開放式至3房(196–868呎)，近九成為1–2房剛需戶型，居住空間更寬敞舒適。",
  },
  {
    icon: Coffee,
    title: "度假式會所與園林",
    desc: "近2.8萬呎會所「Cloud Retreat」連園林。設五大主題花園、近50米園林泳池、Oasis Fitness健身室及兒童樹屋，滿足全齡段「雲端生活」。",
  },
  {
    icon: ShoppingBag,
    title: "成熟生活配套",
    desc: "步行可達上水廣場、新都廣場、彩園商場等。鄰近北區醫院與多間診所，體育館及日常休閒娛樂一應俱全，盡享5-10分鐘成熟生活圈。",
  },
  {
    icon: GraduationCap,
    title: "優質教育資源",
    desc: "坐擁80小學校網(覆蓋上水、粉嶺)及北區中學校網，名校林立。鄰近香港中文大學及規劃中的香港科技大學新醫學院，學術氛圍濃厚。",
  },
  {
    icon: TrendingUp,
    title: "投資價值與友好門檻",
    desc: "首批總價290萬港元起(開放式)，折實平均呎價13,974元，性價比突出。預計租金水平達每平方呎60港元，租金回報樂觀，跨境需求持續帶動升值。",
  },
];

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % GOLF_IMAGES.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + GOLF_IMAGES.length) % GOLF_IMAGES.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="highlights" ref={sectionRef} className="relative overflow-hidden">
      {/* Top Section — Sky Blue Background */}
      <div className="bg-sky-gradient py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="reveal mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
                Project Highlights
              </span>
            </div>
            <h2 className="font-display text-[oklch(0.18_0.06_240)] text-4xl md:text-5xl font-light tracking-wide">
              項目亮點
            </h2>
            <p className="font-body text-[oklch(0.45_0.10_230)] text-base mt-4 max-w-xl leading-relaxed">
              雲向集多重優勢於一身，為您呈獻香港北部都會區最矚目的居住選擇。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bg-white/70 backdrop-blur-sm p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-400 border border-white/50"
                    style={{ borderRadius: "4px" }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-[oklch(0.93_0.05_220)] flex items-center justify-center group-hover:bg-[oklch(0.45_0.15_225)] transition-colors duration-300">
                        <Icon
                          size={22}
                          className="text-[oklch(0.45_0.15_225)] group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-display text-[oklch(0.18_0.06_240)] text-lg font-medium tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-[oklch(0.40_0.08_230)] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section — Golf Course Image Carousel */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden group">
        {GOLF_IMAGES.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="粉嶺高爾夫球場景觀"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.08_240/0.7)] to-transparent" />
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {GOLF_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeImage ? "w-8 h-2 bg-[oklch(0.45_0.15_225)]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pointer-events-auto">
            <div className="reveal-left max-w-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="gold-line" />
                <span className="font-body text-white/70 text-xs tracking-[0.3em] uppercase">
                  Exclusive View
                </span>
              </div>
              <h2 className="font-display text-white text-4xl md:text-5xl font-light leading-tight tracking-wide mb-6">
                140公頃<br />翠綠球場全景
              </h2>
              <p className="font-body text-white/80 text-base leading-relaxed mb-8">
                粉嶺香港哥爾夫球會擁有逾百年歷史，是香港最具代表性的私人球會。
                雲向單位前臨球場，讓您每日醒來即享稀有綠意景觀。
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">140公頃高球場翠綠全景</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">三合一露台 · 寬闊3米</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">落地玻璃幕牆 · 採光最大化</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4 opacity-40">
          <span className="font-number text-white text-sm tracking-widest leading-none">02</span>
          <div className="w-12 h-[1px] bg-white" />
        </div>
      </div>
    </section>
  );
}
