/*
 * 雲向 CLOUDVIEW — 導航欄組件
 * 風格: 清新都市主義 — 毛玻璃效果，滾動後顯示背景
 * 字體: Noto Serif TC (品牌名) + Noto Sans TC (導航項)
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "首頁", href: "#home" },
  { label: "項目亮點", href: "#highlights" },
  { label: "景觀設計", href: "#enzo-enea" },
  { label: "交通優勢", href: "#amenities" },
  { label: "創科新城", href: "#location" },
  { label: "售樓資訊", href: "#sales" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col items-start"
          >
            <span
              className={`font-english text-2xl font-light tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white"
              }`}
            >
              CLOUDVIEW
            </span>
            <span
              className={`font-display text-sm tracking-[0.4em] transition-colors duration-300 ${
                scrolled ? "text-[oklch(0.45_0.15_225)]" : "text-white/90"
              }`}
            >
              雲向
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-body text-sm tracking-wider transition-all duration-300 relative group ${
                  scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[oklch(0.72_0.12_220)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 font-body text-sm tracking-widest transition-colors duration-300 hover:text-[oklch(0.72_0.12_220)] ${
                    scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white/90"
                  }`}
                  style={{ outline: "none" }}
                >
                  <Globe size={16} />
                  語言
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md border-white/20 min-w-[120px]">
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20">
                  繁體中文
                </DropdownMenuItem>
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20" onClick={() => alert("簡體中文版本翻譯建置中...")}>
                  简体中文
                </DropdownMenuItem>
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20" onClick={() => alert("English version is under construction...")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleNavClick("#contact")}
              className={`font-body text-sm tracking-widest transition-colors duration-300 hover:text-[oklch(0.72_0.12_220)] ${
                scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white/90"
              }`}
            >
              索取最新資訊
            </button>
            <button
              onClick={() => window.open('https://wa.me/85212345678?text=你好，我對雲向項目有興趣，我想了解更多', '_blank')}
              className="btn-primary text-sm tracking-widest flex items-center gap-2"
              style={{ borderRadius: "2px" }}
            >
              <MessageCircle size={16} className="text-white" />
              WhatsApp 查詢
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.18_0.06_240)] transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="font-display text-2xl text-white/90 tracking-widest hover:text-[oklch(0.72_0.12_220)] transition-colors duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {item.label}
            </button>
          ))}
          <div className="gold-line mt-4" />
          <button
            onClick={() => {
              window.open('https://wa.me/85212345678?text=你好，我對雲向項目有興趣，我想了解更多', '_blank');
              setMobileOpen(false);
            }}
            className="btn-primary text-base tracking-widest mt-4 flex items-center gap-2"
            style={{ borderRadius: "2px" }}
          >
            <MessageCircle size={18} className="text-white" />
            WhatsApp 查詢
          </button>
        </div>
      </div>
    </>
  );
}
