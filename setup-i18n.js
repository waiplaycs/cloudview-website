const fs = require('fs');

const files = {
  'client/src/components/HighlightsSection.tsx': `import { useEffect, useRef, useState, useCallback } from "react";
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

  const highlights = [
    { title: t('highlights.transport.title'), desc: t('highlights.transport.desc') },
    { title: t('highlights.living.title'), desc: t('highlights.living.desc') },
    { title: t('highlights.education.title'), desc: t('highlights.education.desc') },
    { title: t('highlights.potential.title'), desc: t('highlights.potential.desc') }
  ];

  return (
    <section id="highlights" ref={sectionRef} className="bg-sky-gradient min-h-screen py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="reveal mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Project Highlights
            </span>
            <div className="gold-line md:hidden" />
          </div>
          <h2 className="font-display text-[oklch(0.18_0.06_240)] text-4xl md:text-5xl font-light tracking-wide">
            {t('highlights.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-up">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 mb-4 bg-[oklch(0.95_0.02_225)] rounded-full flex items-center justify-center text-[oklch(0.45_0.15_225)]">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl mb-2 text-[oklch(0.18_0.06_240)]">{h.title}</h3>
                <p className="font-body text-[oklch(0.35_0.05_240)] text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-right">
            <button
              onClick={openLightbox}
              className="block w-full cursor-zoom-in group"
              title={t('highlights.zoom_hint')}
            >
              <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white relative" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/mtr-map.webp"
                  alt={t('highlights.map_alt')}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-2xl">
                  <span className="bg-black/60 text-white text-xs font-body px-4 py-2 rounded-full tracking-wider shadow-lg">
                    {t('highlights.zoom_btn')}
                  </span>
                </div>
              </div>
            </button>
            <p className="font-body text-[oklch(0.55_0.08_230)] text-xs mt-3 tracking-wider text-right">
              * {t('highlights.disclaimer')}
            </p>
          </div>
        </div>

        <div className="reveal mt-16 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-[#2E4166] text-sm tracking-widest leading-none font-medium">01</span>
            <div className="w-12 h-[1px] bg-[#2E4166]" />
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 transition-opacity" onClick={closeLightbox}>
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
            style={{ width: "90vw", height: "85vh", cursor: isDragging.current ? "grabbing" : "grab" }}
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <img
              src="/mtr-map.webp"
              alt={t('highlights.map_alt')}
              draggable={false}
              style={{
                width: "100%", height: "100%", objectFit: "contain",
                transform: \`scale(\${scale}) translate(\${offset.x / scale}px, \${offset.y / scale}px)\`,
                transformOrigin: "center center",
                transition: isDragging.current ? "none" : "transform 0.15s ease", userSelect: "none",
              }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs font-body px-4 py-2 rounded-full tracking-wider pointer-events-none shadow-lg border border-white/10">
              {t('highlights.zoom_control')}
            </div>
          </div>
          <button onClick={closeLightbox} className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors text-4xl leading-none z-10 p-2">
            ×
          </button>
          <div className="absolute bottom-6 right-8 text-white/50 text-xs font-number bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {Math.round(scale * 100)}%
          </div>
        </div>
      )}
    </section>
  );
}
`};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(file, content);
});
console.log('Files updated successfully');
