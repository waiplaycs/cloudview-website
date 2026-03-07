import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const MIN_SCALE = 1.0;
const MAX_SCALE = 5.0;

export default function LocationSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [scale, setScale] = useState(1.0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastOffset = useRef({ x: 0, y: 0 });

  const openLightbox = () => {
    setScale(1.0);
    setOffset({ x: 0, y: 0 });
    lastOffset.current = { x: 0, y: 0 };
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
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:block overflow-hidden bg-[#EEF4F9]"
    >
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[55%] p-6 lg:p-0 lg:pr-6 reveal-right flex items-center h-[40vh] lg:h-auto order-2 lg:order-none z-0 mt-4 lg:mt-0 mb-10 lg:mb-0">
        <button
          onClick={openLightbox}
          className="block w-full h-full cursor-zoom-in group relative"
          title={t('location.zoom_hint')}
        >
          <img
            src="/mtr-map.webp"
            alt={t('location.map_alt')}
            className="w-full h-full object-contain lg:object-right"
          />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#EEF4F9] to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute bottom-2 lg:bottom-6 right-2 lg:right-6 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="bg-black/50 text-white text-[10px] lg:text-xs font-body px-2 lg:px-3 py-1 lg:py-1.5 rounded-full tracking-wider">
              {t('location.zoom_control')}
            </span>
          </div>
        </button>
      </div>

      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[44%] lg:min-h-screen px-6 md:px-14 pt-20 pb-6 lg:py-20 order-1 lg:order-none">
        <div className="reveal mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Northern Metropolis
            </span>
          </div>
          <h2 className="font-display text-[oklch(0.16_0.07_240)] text-4xl md:text-5xl font-light tracking-wide leading-tight mb-1">
            {t('location.title1')}
          </h2>
          <h3 className="font-display text-[oklch(0.25_0.10_235)] text-xl md:text-2xl font-light tracking-wide mb-4">
            {t('location.title2')}
          </h3>
          <p className="font-body text-[oklch(0.38_0.10_230)] text-sm leading-loose" dangerouslySetInnerHTML={{ __html: t('location.subtitle_html') }} />
        </div>

        <div className="reveal-left mb-5">
          <div className="border-l-4 border-[#0BA3DA] pl-4 py-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0BA3DA] flex-shrink-0" />
              <h4 className="font-display text-[#0BA3DA] text-base font-medium tracking-wide">
                {t('location.park1_title')}
              </h4>
            </div>
            <p className="font-body text-[oklch(0.28_0.08_235)] text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: t('location.park1_desc') }} />
            <div className="flex flex-wrap gap-1.5">
              {[t('location.tags.health'), t('location.tags.ai'), t('location.tags.energy'), t('location.tags.material'), t('location.tags.micro'), t('location.tags.robotics')].map((tag) => (
                <span key={tag} className="text-[10px] font-body px-2 py-0.5 rounded-full border border-[#0BA3DA]/40 text-[#0BA3DA]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-left">
          <div className="border-l-4 border-[#7B5EA7] pl-4 py-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#7B5EA7] flex-shrink-0" />
              <h4 className="font-display text-[#7B5EA7] text-base font-medium tracking-wide">
                {t('location.park2_title')}
              </h4>
            </div>
            <p className="font-body text-[oklch(0.28_0.08_235)] text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: t('location.park2_desc') }} />
            <div className="flex flex-wrap gap-1.5">
              {[t('location.tags.land'), t('location.tags.uni'), t('location.tags.year')].map((tag) => (
                <span key={tag} className="text-[10px] font-body px-2 py-0.5 rounded-full border border-[#7B5EA7]/40 text-[#7B5EA7]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-10 flex items-end justify-between">
          <p className="font-body text-[oklch(0.60_0.05_230)] text-[10px] leading-relaxed">
            {t('location.disclaimer')}
          </p>
          <div className="flex items-center gap-3 opacity-35">
            <span className="font-number text-[#2E4166] text-sm tracking-widest">05</span>
            <div className="w-10 h-[1px] bg-[#2E4166]" />
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={closeLightbox}
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
            style={{
              width: "90vw",
              height: "85vh",
              cursor: isDragging.current ? "grabbing" : "grab",
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <img
              src="/mtr-map.webp"
              alt={t('location.map_alt')}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                transformOrigin: "center center",
                transition: isDragging.current ? "none" : "transform 0.15s ease",
                userSelect: "none",
              }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider pointer-events-none">
              {t('location.zoom_control')}
            </div>
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10"
          >
            ×
          </button>
          <div className="absolute bottom-6 right-8 text-white/50 text-xs font-number">
            {Math.round(scale * 100)}%
          </div>
        </div>
      )}
    </section>
  );
}
