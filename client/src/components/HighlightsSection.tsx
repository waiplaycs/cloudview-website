import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Train, Leaf, Layout, Coffee, ShoppingBag, GraduationCap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const GOLF_IMAGES = [
  "/golfview3.jpg",
  "/golfview2.jpg",
  "/golfview5.jpg"
];

const getHighlights = (t: any) => [
  { icon: MapPin, title: t('highlights.core.title'), desc: t('highlights.core.desc') },
  { icon: Train, title: t('highlights.transport.title'), desc: t('highlights.transport.desc') },
  { icon: Leaf, title: t('highlights.golf.title'), desc: t('highlights.golf.desc') },
  { icon: Layout, title: t('highlights.layout.title'), desc: t('highlights.layout.desc') },
  { icon: Coffee, title: t('highlights.clubhouse.title'), desc: t('highlights.clubhouse.desc') },
  { icon: ShoppingBag, title: t('highlights.lifestyle.title'), desc: t('highlights.lifestyle.desc') },
  { icon: GraduationCap, title: t('highlights.education.title'), desc: t('highlights.education.desc') },
  { icon: TrendingUp, title: t('highlights.investment.title'), desc: t('highlights.investment.desc') }
];

export default function HighlightsSection() {
  const { t } = useTranslation();
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

  const highlights = getHighlights(t);

  return (
    <section id="highlights" ref={sectionRef} className="relative overflow-hidden">
      <div className="bg-sky-gradient py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
                Project Highlights
              </span>
            </div>
            <h2 className="font-display text-[oklch(0.18_0.06_240)] text-4xl md:text-5xl font-light tracking-wide">
              {t('highlights.title')}
            </h2>
            <p className="font-body text-[oklch(0.45_0.10_230)] text-base mt-4 max-w-xl leading-relaxed">
              {t('highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item: any, i: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="bg-white/70 backdrop-blur-sm p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-400 border border-white/50" style={{ borderRadius: "4px" }}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-[oklch(0.93_0.05_220)] flex items-center justify-center group-hover:bg-[oklch(0.45_0.15_225)] transition-colors duration-300">
                        <Icon size={22} className="text-[oklch(0.45_0.15_225)] group-hover:text-white transition-colors duration-300" />
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

      <div className="relative h-[500px] md:h-[600px] overflow-hidden group">
        {GOLF_IMAGES.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={t('highlights.golf_img_alt')}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.08_240/0.7)] to-transparent" />
        <button onClick={prevImage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/30 md:bg-black/20 hover:bg-black/50 md:hover:bg-black/40 text-white rounded-full backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ChevronLeft />
        </button>
        <button onClick={nextImage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/30 md:bg-black/20 hover:bg-black/50 md:hover:bg-black/40 text-white rounded-full backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ChevronRight />
        </button>

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
              <h2 className="font-display text-white text-4xl md:text-5xl font-light leading-tight tracking-wide mb-6" dangerouslySetInnerHTML={{ __html: t('highlights.golf_banner_title') }} />
              <p className="font-body text-white/80 text-base leading-relaxed mb-8">
                {t('highlights.golf_banner_desc')}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">{t('highlights.golf_tag_1')}</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">{t('highlights.golf_tag_2')}</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_220)]" />
                <span className="font-body text-white/80 text-sm tracking-wider">{t('highlights.golf_tag_3')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4 opacity-40">
          <span className="font-number text-white text-sm tracking-widest leading-none">02</span>
          <div className="w-12 h-[1px] bg-white" />
        </div>
      </div>
    </section>
  );
}
