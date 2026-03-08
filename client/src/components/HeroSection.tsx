/*
 * 雲向 CLOUDVIEW — 英雄區域
 * 風格: 全屏建築圖像，左側文字，右側圖片，視差效果
 * 動畫: stagger fade-up 文字進入
 */

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const HERO_IMAGE = "/hero-bg.webp";

export default function HeroSection() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#highlights");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="雲向 CLOUDVIEW 建築外觀"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.15_0.08_240/0.75)] via-[oklch(0.20_0.08_235/0.45)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.08_240/0.6)] via-transparent to-transparent" />
      </div>

      {/* Cloud Decorations */}
      <div className="absolute top-20 right-10 w-64 h-32 opacity-20 animate-float-cloud pointer-events-none">
        <svg viewBox="0 0 200 100" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="60" rx="90" ry="35" />
          <ellipse cx="70" cy="45" rx="50" ry="30" />
          <ellipse cx="130" cy="48" rx="45" ry="28" />
          <ellipse cx="100" cy="38" rx="40" ry="25" />
        </svg>
      </div>
      <div className="absolute top-40 right-60 w-48 h-24 opacity-15 animate-float-cloud-slow pointer-events-none">
        <svg viewBox="0 0 200 100" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="60" rx="85" ry="30" />
          <ellipse cx="65" cy="45" rx="45" ry="28" />
          <ellipse cx="135" cy="48" rx="40" ry="26" />
          <ellipse cx="100" cy="38" rx="38" ry="22" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl ml-auto flex flex-col items-center sm:items-end">
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="font-body text-white/80 text-xs tracking-[0.3em] uppercase">
              {t("hero.sub_title")}
            </span>
            <div className="gold-line" />
          </div>

          {/* Main Title */}
          <div
            className={`transition-all duration-700 text-center sm:text-right ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h1 className="font-display text-white leading-tight mb-2">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light tracking-wider">
                {t("hero.title")}
              </span>
              <span className="font-english block text-3xl md:text-4xl font-light tracking-[0.3em] text-white/80 mt-1">
                CLOUDVIEW
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div
            className={`mt-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            <p className="font-display text-white/90 text-xl md:text-2xl font-light tracking-widest text-center sm:text-right">
              {t("hero.slogan")}
            </p>
          </div>

          {/* Description */}
          <div
            className={`mt-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <p className="font-body text-white/75 text-base leading-relaxed max-w-xl text-center">
              {t("hero.desc")}
            </p>
          </div>

          {/* Key Stats */}
          <div
            className={`mt-10 grid grid-cols-3 gap-6 max-w-md transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.65s" }}
          >
            {[
              { num: "765", unit: t("hero.total_units"), label: t("hero.units_label") },
              { num: "38", unit: t("hero.floors"), label: t("hero.floors_label") },
              { num: "3.5", unit: t("hero.height"), label: t("hero.height_label") },
            ].map((stat, i) => (
              <div key={i} className="stat-card flex flex-col items-center sm:items-end text-center sm:text-right">
                <div className="flex items-baseline gap-1">
                  <span className="font-number text-white text-3xl font-medium">
                    {stat.num}
                  </span>
                  <span className="font-body text-white/70 text-sm">{stat.unit}</span>
                </div>
                <p className="font-body text-white/60 text-xs tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Prominent CTA Button */}
          <div
            className={`mt-12 flex justify-center sm:justify-end transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button
              onClick={() => window.open(`https://wa.me/85293185118?text=${t('cta.whatsapp_msg')}`, '_blank')}
              className="group relative inline-flex items-center gap-6 bg-gradient-to-r from-[oklch(0.65_0.12_220)] to-[oklch(0.55_0.12_230)] hover:from-[oklch(0.70_0.12_220)] hover:to-[oklch(0.60_0.12_230)] px-10 py-5 transition-all duration-300 overflow-hidden shadow-lg shadow-[oklch(0.65_0.12_220)]/30 border border-white/10 cursor-pointer"
              style={{ borderRadius: "4px" }}
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="font-display text-white text-2xl tracking-[0.2em] relative z-10 font-medium">{t("hero.book_visit")}</span>
              <div className="w-px h-8 bg-white/40 relative z-10"></div>
              <span className="font-body text-white text-base tracking-[0.2em] relative z-10">{t("hero.dedicated_service")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.2s" }}
      >
        <span className="font-body text-xs tracking-[0.3em]">SCROLL</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Expected Date - Bottom Left */}
      <div 
        className={`absolute bottom-8 left-8 z-10 text-left transition-all duration-1000 hidden md:block ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.4s" }}
      >
        <p className="font-body text-white/70 text-base md:text-lg font-medium tracking-[0.15em] drop-shadow-md">
          {t("hero.ec")}
        </p>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4 opacity-40">
        <span className="font-number text-white text-sm tracking-widest leading-none">01</span>
        <div className="w-12 h-[px] bg-white" />
      </div>
    </section>
  );
}
