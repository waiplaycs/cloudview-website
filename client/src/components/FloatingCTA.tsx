/*
 * 雲向 CLOUDVIEW — 浮動查詢按鈕
 * 風格: 固定右側，天藍色背景，滾動後顯示
 */

import { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <div
      className={`fixed right-6 bottom-8 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Expanded Options */}
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-fade-up">
          <button
            onClick={() => {
              window.open('https://wa.me/85212345678?text=你好，我對雲向項目有興趣，我想了解更多', '_blank');
              setExpanded(false);
            }}
            className="flex items-center gap-3 bg-white shadow-xl px-5 py-3 text-[oklch(0.25_0.08_240)] hover:bg-[oklch(0.93_0.05_220)] transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span className="font-body text-sm tracking-wider">WhatsApp 查詢</span>
          </button>
          <a
            href="tel:+85212345678"
            className="flex items-center gap-3 bg-white shadow-xl px-5 py-3 text-[oklch(0.25_0.08_240)] hover:bg-[oklch(0.93_0.05_220)] transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            <Phone size={16} className="text-[oklch(0.45_0.15_225)]" />
            <span className="font-body text-sm tracking-wider">2345 6789</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-[oklch(0.45_0.15_225)] hover:bg-[oklch(0.38_0.16_228)] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ borderRadius: "2px" }}
        aria-label="查詢"
      >
        {expanded ? (
          <X size={22} />
        ) : (
          <MessageCircle size={22} />
        )}
      </button>
    </div>
  );
}
