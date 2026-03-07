import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const getMtrLines = (t: any) => [
  {
    color: "bg-[#0BA3DA]",
    textColor: "text-[#0BA3DA]",
    name: t('amenities.east_rail.name'),
    badge: t('amenities.east_rail.badge'),
    badgeColor: "bg-[#0BA3DA]/20 text-[#0BA3DA]",
    points: [
      t('amenities.east_rail.p1'),
      t('amenities.east_rail.p2'),
    ],
  },
  {
    color: "bg-[#E2007A]",
    textColor: "text-[#E2007A]",
    name: t('amenities.north_link.name'),
    badge: t('amenities.north_link.badge'),
    badgeColor: "bg-[#E2007A]/15 text-[#E2007A]",
    points: [
      t('amenities.north_link.p1'),
      t('amenities.north_link.p2'),
      t('amenities.north_link.p3'),
    ],
  },
  {
    color: "bg-[#F5A623]",
    textColor: "text-[#F5A623]",
    name: t('amenities.ne_new_territories.name'),
    badge: t('amenities.ne_new_territories.badge'),
    badgeColor: "bg-[#F5A623]/15 text-[#F5A623]",
    points: [
      t('amenities.ne_new_territories.p1'),
    ],
  },
];

const MIN_SCALE = 1.0;
const MAX_SCALE = 5.0;

export default function AmenitiesSection() {
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
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const MTR_LINES = getMtrLines(t);

  return (
    <section id="transport" ref={sectionRef} className="bg-sky-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="reveal mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Transport
            </span>
          </div>
          <h2 className="font-display text-[oklch(0.18_0.06_240)] text-4xl md:text-5xl font-light tracking-wide">
            {t('amenities.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="reveal-left space-y-5">
            {MTR_LINES.map((line) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${line.color}`} />
                  <h3 className={`font-display text-lg font-medium ${line.textColor}`}>{line.name}</h3>
                  <span className={`text-xs font-body px-2 py-0.5 rounded-full ${line.badgeColor}`}>
                    {line.badge}
                  </span>
                </div>
                <ul className="space-y-2 pl-6">
                  {line.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${line.color}`} />
                      <p className="font-body text-[oklch(0.30_0.08_235)] text-sm leading-relaxed">{pt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="reveal-right pl-4">
            <button
              onClick={openLightbox}
              className="block w-full cursor-zoom-in group"
              title={t('amenities.zoom_title')}
            >
              <div
                className="w-full overflow-hidden rounded-xl shadow-2xl bg-white relative"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/mtrmap2.webp"
                  alt={t('amenities.map_alt')}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-[1.45]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                    transform: "scale(1.4)",
                    transformOrigin: "center center",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-xl">
                  <span className="bg-black/50 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider">{t('amenities.zoom_hint')}</span>
                </div>
              </div>
            </button>
            <p className="font-body text-[oklch(0.55_0.08_230)] text-xs mt-3 tracking-wider text-right">
              {t('amenities.disclaimer')}
            </p>
          </div>
        </div>

        <div className="reveal mt-10 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-[#2E4166] text-sm tracking-widest leading-none font-medium">04</span>
            <div className="w-12 h-[1px] bg-[#2E4166]" />
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
            style={{ width: "85vw", height: "80vh", cursor: isDragging.current ? "grabbing" : "grab" }}
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <img
              src="/mtrmap2.webp"
              alt={t('amenities.map_alt')}
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
              {t('amenities.zoom_control')}
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
