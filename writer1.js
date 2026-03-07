const fs = require('fs');

const highlightsContent = `import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const MIN_SCALE = 1.0;
const MAX_SCALE = 5.0;

export default function HighlightsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [scale, setScale] = useState(1.4);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastOffset = useRef({ x: 0, y: 0 });

  const openLightbox = () => {
    setScale(1.4);
    setOffset({ x: 0, y: 0 });
    setLightboxOpen(true);
  };
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s - e.deltaY * 0.003)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - lastOffset.current.x, y: e.clientY - lastOffset.current.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const nx = e.clientX - dragStart.current.x;
    const ny = e.clientY - dragStart.current.y;
    lastOffset.current = { x: nx, y: ny };
    setOffset({ x: nx, y: ny });
  };
  const onMouseUp = () => { isDragging.current = false; };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const HIGHLIGHTS = [
    { title: t('highlights.core.title'), desc: t('highlights.core.desc') },
    { title: t('highlights.transport.title'), desc: t('highlights.transport.desc') },
    { title: t('highlights.golf.title'), desc: t('highlights.golf.desc') },
    { title: t('highlights.layout.title'), desc: t('highlights.layout.desc') },
    { title: t('highlights.clubhouse.title'), desc: t('highlights.clubhouse.desc') },
    { title: t('highlights.lifestyle.title'), desc: t('highlights.lifestyle.desc') },
    { title: t('highlights.education.title'), desc: t('highlights.education.desc') },
    { title: t('highlights.investment.title'), desc: t('highlights.investment.desc') },
  ];

  return (
    <section id="highlights" ref={sectionRef} className="relative z-10 w-full bg-[#FAFAFA]">
      <div className="bg-sky-gradient py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="font-body text-[#2E4166] text-xs tracking-[0.3em] uppercase">Project Highlights</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-[#1A2640] text-4xl md:text-5xl font-light tracking-wide mb-6">
              {t('highlights.title')}
            </h2>
            <p className="font-body text-[#4A5D80] text-base max-w-2xl leading-relaxed">
              {t('highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((hl, i) => (
               <div key={i} className="reveal-up bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 group border border-white/50" style={{ transitionDelay: \`\${i * 0.1}s\` }}>
                 <div className="text-[oklch(0.45_0.15_225)]/20 font-number text-5xl mb-4 group-hover:text-[oklch(0.45_0.15_225)]/40 transition-colors">
                   {String(i + 1).padStart(2, "0")}
                 </div>
                 <h3 className="font-display text-[#1A2640] text-xl font-medium mb-3">{hl.title}</h3>
                 <p className="font-body text-[#4A5D80] text-sm leading-relaxed">{hl.desc}</p>
               </div>
            ))}
          </div>

          <div className="reveal mt-16 flex justify-center">
            <div className="flex items-center gap-4 opacity-40">
              <span className="font-number text-[#2E4166] text-sm tracking-widest leading-none">01</span>
              <div className="w-12 h-[1px] bg-[#2E4166]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-24 max-w-7xl mx-auto px-6 mb-24 z-20">
        <div className="reveal-up rounded-2xl overflow-hidden shadow-2xl relative group bg-black" style={{ aspectRatio: "21/9" }}>
          <img src="/golfview-banner.jpg" alt={t('highlights.golf_alt')} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl pointer-events-none">
            <h3 className="font-display text-white text-3xl md:text-5xl font-light mb-4 drop-shadow-lg leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t('highlights.golf_banner_title') }} />
            </h3>
            <p className="font-body text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md hidden md:block">
              {t('highlights.golf_banner_desc')}
            </p>
            <p className="font-body text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md hidden md:block mt-2">
              {t('highlights.golf_banner_desc2')}
            </p>
          </div>
          
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden lg:flex flex-col items-end gap-3 pointer-events-none">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded border border-white/20">
              <span className="font-body text-white/90 text-sm tracking-wider">{t('highlights.golf_tag_1')}</span>
            </div>
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded border border-white/20">
              <span className="font-body text-white/90 text-sm tracking-wider">{t('highlights.golf_tag_2')}</span>
            </div>
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded border border-white/20">
              <span className="font-body text-white/90 text-sm tracking-wider">{t('highlights.golf_tag_3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

const architectureContent = `import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const IMAGES = [
  "https://static.wixstatic.com/media/5f28eb_d92c2cddbaaa4942bd8302dffb595dda~mv2.jpg/v1/fill/w_1354,h_1020,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5f28eb_d92c2cddbaaa4942bd8302dffb595dda~mv2.jpg",
  "/enea-1.jpg",
  "/enea-2.jpg",
  "/enea-3.jpg",
];

export default function ArchitectureSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Landscape Master
            </span>
          </div>
          <h2 className="font-display text-[#1A2640] text-4xl md:text-5xl font-light tracking-wide">
            {t('architecture.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="flex flex-col gap-6 reveal-left">
            <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-display text-2xl mb-4 text-[#1A2640]">Enzo Enea</h3>
              <p className="font-body text-[#4A5D80] leading-relaxed mb-4">
                {t('architecture.desc1')}
              </p>
              <p className="font-body text-[#4A5D80] leading-relaxed mb-4">
                {t('architecture.desc2')}
              </p>
              <p className="font-body text-[#4A5D80] leading-relaxed">
                {t('architecture.desc3')}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[IMAGES[1], IMAGES[2], IMAGES[3]].map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100 group">
                  <img 
                    src={src} 
                    alt="Enea Design" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
             <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[600px] group">
               <img 
                 src={IMAGES[0]} 
                 alt="Enzo Enea" 
                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
             </div>
          </div>

        </div>

        <div className="reveal mt-16 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-[#2E4166] text-sm tracking-widest leading-none font-medium">02</span>
            <div className="w-12 h-[1px] bg-[#2E4166]" />
          </div>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync('client/src/components/HighlightsSection.tsx', highlightsContent);
fs.writeFileSync('client/src/components/ArchitectureSection.tsx', architectureContent);
console.log('done1');
