import { useEffect, useRef, useState, useCallback } from "react";

const IMAGES = [
  { src: "/eco-garden.webp", alt: "Eco Garden" },
  { src: "/lake-pool.jpeg", alt: "Lake Pool" },
  { src: "/oasis-fitness.jpeg", alt: "Oasis Fitness" },
  { src: "/poolside-grill.jpeg", alt: "Poolside Grill" },
  { src: "/tree-house.jpeg", alt: "Tree House" },
  { src: "/vivid-playground.jpeg", alt: "Vivid Playground" },
  { src: "/cloud-lounge.jpeg", alt: "Cloud Lounge" },
];

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % IMAGES.length)), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, close]);

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
    <section id="enzo-enea" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/enzo-enea1.webp" 
          alt="Enzo Enea" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-md lg:max-w-lg reveal-left pb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[oklch(0.72_0.12_220)]" />
            <span className="font-english text-[oklch(0.72_0.12_220)] text-sm tracking-[0.3em] uppercase">
              Master Landscape Architect
            </span>
          </div>
          
          <h2 className="font-display text-white text-4xl md:text-6xl font-light tracking-wide mb-3">
            Enzo Enea
          </h2>
          <h3 className="font-display text-white/80 text-xl md:text-2xl font-light mb-6">
            世界級景觀設計大師
          </h3>
          
          <div className="space-y-4">
            <p className="font-body text-white/80 text-sm leading-relaxed">
              Enzo Enea 是享譽國際的瑞士園林建築大師及 Enea Landscape Architecture 創辦人，被譽為將古樹保育、藝術收藏與頂級建築完美結合的先驅。其設計理念提倡「室外即室內」(Outside In)，以空間平衡與古樹保育聞名，合作對象涵蓋 Zaha Hadid、安藤忠雄等普利茲克建築獎巨擘。
            </p>
            <p className="font-body text-white/80 text-sm leading-relaxed">
              他在國際間屢獲殿堂級殊榮：1998年成為首位榮獲英國切爾西花展「最佳展示花園」的瑞士人；其創立的全球唯一「樹木博物館」於2009年獲頒美國建築獎；事務所更榮獲 DGNB 史上首個鉑金與鑽石等級永續認證，並多次囊括 ASLA 專業大獎。
            </p>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              獲獎無數的瑞士園林設計師Enzo Enea設計「Eco Garden」，與前臨高爾夫球場的翠綠連綿景觀相連，洋溢不同層次的綠意。園內栽種多種樹木及花卉，並設置特色鳥舍，吸引附近雀鳥到訪，讓人與生物和諧共存，著力打造可持續環境。
            </p>
          </div>
        </div>

        {/* Right side — eco-garden large + small grid below */}
        <div className="w-full max-w-md reveal-right flex flex-col gap-3 self-end pb-8">
          {/* Large eco-garden image */}
          <button onClick={() => setLightboxIndex(0)} className="block w-full rounded-xl overflow-hidden shadow-2xl cursor-zoom-in">
            <img src="/eco-garden.webp" alt="Eco Garden" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700" />
          </button>
          {/* 3-col small grid — IMAGES[1..6] */}
          <div className="grid grid-cols-3 gap-2">
            {IMAGES.slice(1).map((img, i) => (
              <button key={img.src} onClick={() => setLightboxIndex(i + 1)} className="block w-full rounded-lg overflow-hidden shadow-xl cursor-zoom-in">
                <img src={img.src} alt={img.alt} className="w-full h-20 object-cover hover:scale-105 transition-transform duration-700" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-4 opacity-40">
        <span className="font-number text-white text-sm tracking-widest leading-none">03</span>
        <div className="w-12 h-[1px] bg-white" />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Image */}
          <img
            src={IMAGES[lightboxIndex].src}
            alt={IMAGES[lightboxIndex].alt}
            className="max-w-[80vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors z-10"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors z-10"
          >
            ›
          </button>

          {/* Counter + label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="text-white/50 text-sm font-body">{IMAGES[lightboxIndex].alt}</span>
            <span className="text-white/30 text-xs font-number">{lightboxIndex + 1} / {IMAGES.length}</span>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 mt-4">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === lightboxIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
