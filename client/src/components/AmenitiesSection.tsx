/*
 * 雲向 CLOUDVIEW — 交通優勢頁 (頁4)
 */

import { useEffect, useRef, useState, useCallback } from "react";

const MTR_LINES = [
  {
    color: "bg-[#0BA3DA]",
    textColor: "text-[#0BA3DA]",
    name: "東鐵線",
    badge: "現役",
    badgeColor: "bg-[#0BA3DA]/20 text-[#0BA3DA]",
    points: [
      "項目鄰近上水站，一站直達羅湖及落馬洲，一線通往大學、大圍、會展、以至金鐘站。",
      "瞬間直達多間著名大學，包括香港中文大學、浸會大學、城市大學及理工大學。",
    ],
  },
  {
    color: "bg-[#E2007A]",
    textColor: "text-[#E2007A]",
    name: "北環線",
    badge: "預計2034年竣工",
    badgeColor: "bg-[#E2007A]/15 text-[#E2007A]",
    points: [
      "北環線古洞站預計於2027年竣工，主線正進行詳細規劃及設計，並預計在2034年竣工，以配合北部都會區發展。",
      "支線由擬建新田站出發，途經洲頭以及河套，再接入皇崗口岸。",
      "東延線將從古洞站為起點延伸至坪輋，途經新界北新市鎮（包括羅湖/文錦渡）的各個發展節點。",
    ],
  },
  {
    color: "bg-[#F5A623]",
    textColor: "text-[#F5A623]",
    name: "新界東北線",
    badge: "規劃中",
    badgeColor: "bg-[#F5A623]/15 text-[#F5A623]",
    points: [
      "由香園圍途經坪輋等地區連接東鐵線粉嶺站，暢享香園圍口岸及轉乘東鐵線之便利。",
    ],
  },
];

const MIN_SCALE = 1.0;
const MAX_SCALE = 5.0;

export default function AmenitiesSection() {
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

  // Wheel zoom in lightbox
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s - e.deltaY * 0.003)));
  }, []);

  // Drag to pan in lightbox
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

  return (
    <section id="transport" ref={sectionRef} className="bg-sky-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">

        {/* Header */}
        <div className="reveal mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-[oklch(0.45_0.15_225)] text-xs tracking-[0.3em] uppercase">
              Transport
            </span>
          </div>
          <h2 className="font-display text-[oklch(0.18_0.06_240)] text-4xl md:text-5xl font-light tracking-wide">
            三線鐵路瞬動優勢
          </h2>
        </div>

        {/* Two-column layout: text left, map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: MTR lines text */}
          <div className="reveal-left space-y-5">
            {MTR_LINES.map((line) => (
              <div key={line.name} className="bg-white/70 backdrop-blur-sm rounded-lg p-5 shadow-sm">
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

          {/* Right: MTR Map zoomed in — shifted slightly right */}
          <div className="reveal-right pl-4">
            <button
              onClick={openLightbox}
              className="block w-full cursor-zoom-in group"
              title="點擊放大查看，可滾輪縮放"
            >
              <div
                className="w-full overflow-hidden rounded-xl shadow-2xl bg-white relative"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/mtrmap2.webp"
                  alt="MTR 路線圖"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-[1.45]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                    transform: "scale(1.4)",
                    transformOrigin: "center center",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-xl">
                  <span className="bg-black/50 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider">點擊放大 · 可縮放</span>
                </div>
              </div>
            </button>
            <p className="font-body text-[oklch(0.55_0.08_230)] text-xs mt-3 tracking-wider text-right">
              * 路線圖僅供參考，詳情以港鐵公司公佈為準
            </p>
          </div>

        </div>

        {/* Page Number */}
        <div className="reveal mt-10 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-[#2E4166] text-sm tracking-widest leading-none font-medium">04</span>
            <div className="w-12 h-[1px] bg-[#2E4166]" />
          </div>
        </div>

      </div>

      {/* Lightbox with zoom + pan */}
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
              alt="MTR 路線圖"
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
            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider pointer-events-none">
              滾輪縮放 · 拖動移動
            </div>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10"
          >
            ×
          </button>

          {/* Zoom indicator */}
          <div className="absolute bottom-6 right-8 text-white/50 text-xs font-number">
            {Math.round(scale * 100)}%
          </div>
        </div>
      )}
    </section>
  );
}
