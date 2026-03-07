import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, DollarSign, Calendar, Info, Newspaper, Play } from "lucide-react";

export default function SalesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [floorplanOpen, setFloorplanOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState<'1BR' | '2BR'>('1BR');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const unitTypes = [
    { type: t('sales.units.studio.type'), area: "196 - 220", percentage: "12%", count: t('sales.units.studio.count') },
    { type: t('sales.units.1br.type'), area: "292 - 445", percentage: "58%", count: t('sales.units.1br.count') },
    { type: t('sales.units.2br.type'), area: "445 - 620", percentage: "30%", count: t('sales.units.2br.count') },
    { type: t('sales.units.3br.type'), area: "620 - 868", percentage: t('sales.units.3br.percentage'), count: t('sales.units.3br.count') },
  ];

  const salesDocs = [
    { icon: FileText, title: t('sales.docs.brochure.title'), desc: t('sales.docs.brochure.desc'), action: t('sales.docs.brochure.action'), href: "https://www.cloudview.hk/api/uploads/20260216%20Cloudview%20Sales%20Brochure.pdf" },
    { icon: DollarSign, title: t('sales.docs.price.title'), desc: t('sales.docs.price.desc'), action: t('sales.docs.price.action'), href: "https://www.cloudview.hk/api/uploads/CLOUDVIEW_PL1.pdf" },
    { icon: Newspaper, title: t('sales.docs.leaflet.title'), desc: t('sales.docs.leaflet.desc'), action: t('sales.docs.leaflet.action'), href: "https://www.cloudview.hk/CLOUDVIEW_Leaflet_250x375mmH_260127-RGB-2page-200dpi.pdf" },
    { icon: Calendar, title: t('sales.docs.schedule.title'), desc: t('sales.docs.schedule.desc'), action: null, href: null },
    { icon: Info, title: t('sales.docs.showflat.title'), desc: t('sales.docs.showflat.desc'), action: t('sales.docs.showflat.action'), href: null },
  ];

  const GALLERY_1BR = [
    '/101.jpg',
    '/102.jpg',
    '/103.jpg',
    '/104.webp',
  ];
  const GALLERY_2BR = [
    '/201.jpg',
    '/202.jpg',
    '/203.jpg',
    '/204.jpg',
    '/205.jpg',
    '/206.jpg',
  ];
  const galleryImages = galleryTab === '1BR' ? GALLERY_1BR : GALLERY_2BR;

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
    <section id="sales" ref={sectionRef} className="bg-ocean-gradient py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-white/50 text-xs tracking-[0.3em] uppercase">
              Sales Information
            </span>
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl font-light tracking-wide">
            {t('sales.title')}
          </h2>
          <p className="font-body text-white/60 text-base mt-4 max-w-xl leading-relaxed">
            {t('sales.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="font-display text-white text-2xl font-light tracking-wide mb-6">
              {t('sales.table.title')}
            </h3>
            <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
              <table className="w-full">
                <thead>
                  <tr className="bg-[oklch(0.45_0.15_225)]">
                    <th className="font-body text-white text-xs tracking-[0.2em] text-left px-5 py-4">{t('sales.table.type')}</th>
                    <th className="font-body text-white text-xs tracking-[0.2em] text-left px-5 py-4">{t('sales.table.area')}</th>
                    <th className="font-body text-white text-xs tracking-[0.2em] text-left px-5 py-4">{t('sales.table.percentage')}</th>
                    <th className="font-body text-white text-xs tracking-[0.2em] text-left px-5 py-4">{t('sales.table.count')}</th>
                  </tr>
                </thead>
                <tbody>
                  {unitTypes.map((unit, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/10 hover:bg-white/10 transition-colors duration-200 ${
                        i % 2 === 0 ? "bg-white/5" : "bg-white/10"
                      }`}
                    >
                      <td className="font-display text-white text-sm px-5 py-4">{unit.type}</td>
                      <td className="font-body text-white/80 text-sm px-5 py-4">{unit.area}</td>
                      <td className="font-body text-[oklch(0.72_0.12_220)] text-sm px-5 py-4 font-medium">{unit.percentage}</td>
                      <td className="font-body text-white/70 text-sm px-5 py-4">{unit.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8">
                <div className="flex gap-2 mb-4">
                  <button
                    className={`px-4 py-2 rounded-full font-body text-sm tracking-wider transition-colors duration-200 ${galleryTab === '1BR' ? 'bg-[oklch(0.72_0.12_220)] text-white' : 'bg-white/10 text-white/60'}`}
                    onClick={() => setGalleryTab('1BR')}
                  >{t('sales.tabs.1br')}</button>
                  <button
                    className={`px-4 py-2 rounded-full font-body text-sm tracking-wider transition-colors duration-200 ${galleryTab === '2BR' ? 'bg-[oklch(0.72_0.12_220)] text-white' : 'bg-white/10 text-white/60'}`}
                    onClick={() => setGalleryTab('2BR')}
                  >{t('sales.tabs.2br')}</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((src, idx) => (
                    <button
                      key={src}
                      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 cursor-zoom-in"
                      onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                    >
                      <img src={src} alt={`${t('sales.gallery.alt_prefix')} ${galleryTab} ${idx+1}`} className="w-full h-32 object-cover group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                        <span className="bg-black/60 text-white text-xs font-body px-2 py-1 rounded">{t('sales.gallery.zoom_hint')}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="font-body text-white/40 text-xs mt-2 tracking-wider">{t('sales.gallery.title')}</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setFloorplanOpen(true)}
                className="w-full group cursor-zoom-in relative overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                <img
                  src="/floorplan.jpg"
                  alt={t('sales.floorplan.alt')}
                  className="w-full object-contain max-h-48 bg-white/5"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <span className="bg-black/60 text-white text-xs font-body px-3 py-1.5 rounded-full tracking-wider">{t('sales.floorplan.zoom_hint')}</span>
                </div>
              </button>
              <p className="font-body text-white/40 text-xs mt-2 tracking-wider">{t('sales.floorplan.title')}</p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setVideoOpen(true)}
                className="w-full group cursor-pointer relative overflow-hidden bg-black/30 border border-white/15 hover:border-[oklch(0.72_0.12_220)] transition-all duration-300"
                style={{ borderRadius: "4px", aspectRatio: "16/9" }}
              >
                <video
                  src="/vid.mp4"
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <Play size={22} className="text-white ml-1" fill="white" />
                  </div>
                  <span className="font-body text-white text-sm tracking-wider">{t('sales.video.title')}</span>
                </div>
              </button>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-display text-white text-2xl font-light tracking-wide mb-6">
              {t('sales.docs.title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {salesDocs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={i}
                    className={`bg-white/10 border border-white/15 p-5 transition-all duration-300 ${doc.action ? "hover:bg-white/15 hover:border-[oklch(0.72_0.12_220)] group cursor-pointer" : "opacity-70"}`}
                    style={{ borderRadius: "4px" }}
                    onClick={() => {
                      if (!doc.action) return;
                      if (doc.href) {
                        window.open(doc.href, "_blank", "noopener,noreferrer");
                      } else {
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <div className="w-10 h-10 bg-[oklch(0.45_0.15_225/0.5)] flex items-center justify-center mb-3 group-hover:bg-[oklch(0.45_0.15_225)] transition-colors duration-300" style={{ borderRadius: "2px" }}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <h4 className="font-display text-white text-base font-medium mb-1">{doc.title}</h4>
                    <p className="font-body text-white/60 text-xs leading-relaxed mb-3 whitespace-pre-line">{doc.desc}</p>
                    {doc.action && (
                      <span className="font-body text-[oklch(0.72_0.12_220)] text-xs tracking-wider group-hover:text-white transition-colors duration-300">
                        {doc.action} →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="reveal mt-12 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-white text-sm tracking-widest leading-none">06</span>
            <div className="w-12 h-[1px] bg-white" />
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setLightboxOpen(false)}>
          <div className="relative max-w-4xl w-[90vw] max-h-[88vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={galleryImages[lightboxIndex]} alt={`${t('sales.gallery.alt_prefix')} ${galleryTab} ${lightboxIndex+1}`} className="w-full h-full object-contain" />
            <div className="flex gap-2 mt-4 mb-2">
              <button className="px-3 py-1 rounded bg-black/20 text-white text-xs" disabled={lightboxIndex === 0} onClick={() => setLightboxIndex(i => Math.max(0, i-1))}>{t('sales.gallery.prev')}</button>
              <button className="px-3 py-1 rounded bg-black/20 text-white text-xs" disabled={lightboxIndex === galleryImages.length-1} onClick={() => setLightboxIndex(i => Math.min(galleryImages.length-1, i+1))}>{t('sales.gallery.next')}</button>
            </div>
          </div>
          <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10">×</button>
        </div>
      )}
      {floorplanOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setFloorplanOpen(false)}>
          <div className="relative max-w-5xl w-[92vw] max-h-[88vh] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src="/floorplan.jpg" alt={t('sales.floorplan.alt')} className="w-full h-full object-contain" />
          </div>
          <button onClick={() => setFloorplanOpen(false)} className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10">×</button>
        </div>
      )}

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setVideoOpen(false)}>
          <div className="relative w-[90vw] max-w-4xl" style={{ aspectRatio: "16/9" }} onClick={(e) => e.stopPropagation()}>
            <video src="/vid.mp4" controls autoPlay className="w-full h-full rounded-xl shadow-2xl" />
          </div>
          <button onClick={() => setVideoOpen(false)} className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-10">×</button>
        </div>
      )}
    </section>
  );
}
