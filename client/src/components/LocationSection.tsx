/*
 * 雲向 CLOUDVIEW — 創科新城頁 (頁5)
 * Layout: full-bleed map right, floating text panel left — no overlap
 */

import { useEffect, useRef, useState, useCallback } from "react";

const MIN_SCALE = 1.0;
const MAX_SCALE = 5.0;

export default function LocationSection() {
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
      className="relative min-h-screen flex overflow-hidden bg-[#EEF4F9]"
    >
      {/* ── Right: full-height map ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pr-6 reveal-right flex items-center">
        <button
          onClick={openLightbox}
          className="block w-full h-full cursor-zoom-in group"
          title="點擊放大"
        >
          <img
            src="/mtr-map.webp"
            alt="北部都會區交通及創科地圖"
            className="w-full h-full object-contain object-right"
          />
          {/* gradient fade on left edge so text stays readable */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#EEF4F9] to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="bg-black/50 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider">
              點擊放大 · 可縮放
            </span>
          </div>
        </button>
      </div>

      {/* ── Left: text panel ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[44%] min-h-screen px-8 md:px-14 py-20">

        {/* Header */}
        <div className="reveal mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Northern Metropolis
            </span>
          </div>
          <h2 className="font-display text-[oklch(0.16_0.07_240)] text-4xl md:text-5xl font-light tracking-wide leading-tight mb-1">
            兩大創科新城
          </h2>
          <h3 className="font-display text-[oklch(0.25_0.10_235)] text-xl md:text-2xl font-light tracking-wide mb-4">
            全新經濟引擎
          </h3>
          <p className="font-body text-[oklch(0.38_0.10_230)] text-sm leading-loose">
            傲踞北部都會區核心地段<br />
            擁五大關口地利 · 創新理想生活
          </p>
        </div>

        {/* Zone 1a */}
        <div className="reveal-left mb-5">
          <div className="border-l-4 border-[#0BA3DA] pl-4 py-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0BA3DA] flex-shrink-0" />
              <h4 className="font-display text-[#0BA3DA] text-base font-medium tracking-wide">
                河套區港深創科園
              </h4>
            </div>
            <p className="font-body text-[oklch(0.28_0.08_235)] text-sm leading-relaxed mb-2">
              佔地 <strong>87.7 公頃</strong>，是全港唯一與深圳一水相連的創科園區，著力驅動六大支柱產業。首三座大樓主體工程已完成。
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["生命健康科技","人工智能","新能源","新材料","微電子","機械人"].map((t) => (
                <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full border border-[#0BA3DA]/40 text-[#0BA3DA]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Zone 1b */}
        <div className="reveal-left">
          <div className="border-l-4 border-[#7B5EA7] pl-4 py-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#7B5EA7] flex-shrink-0" />
              <h4 className="font-display text-[#7B5EA7] text-base font-medium tracking-wide">
                新田科技城 · 北都大學城
              </h4>
            </div>
            <p className="font-body text-[oklch(0.28_0.08_235)] text-sm leading-relaxed mb-2">
              預計提供約 <strong>210 公頃</strong>創科土地，毗鄰深圳皇崗福田，與深圳科創園區產生協同效應。政府已預留 <strong>90 公頃</strong>用地發展北都大學城，最早 2026 年起逐步供用。
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["210公頃創科土地","90公頃大學城","2026年起逐步供用"].map((t) => (
                <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full border border-[#7B5EA7]/40 text-[#7B5EA7]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer + page number */}
        <div className="reveal mt-10 flex items-end justify-between">
          <p className="font-body text-[oklch(0.60_0.05_230)] text-[10px] leading-relaxed">
            * 地圖僅供參考，詳情以政府公佈為準
          </p>
          <div className="flex items-center gap-3 opacity-35">
            <span className="font-number text-[#2E4166] text-sm tracking-widest">05</span>
            <div className="w-10 h-[1px] bg-[#2E4166]" />
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
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
              alt="北部都會區地圖"
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
              滾輪縮放 · 拖動移動
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
