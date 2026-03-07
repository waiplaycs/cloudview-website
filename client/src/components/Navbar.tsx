/*
 * 雲向 CLOUDVIEW — 導航欄組件
 * 風格: 清新都市主義 — 毛玻璃效果，滾動後顯示背景
 * 字體: Noto Serif TC (品牌名) + Noto Sans TC (導航項)
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Globe, Instagram } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.highlights"), href: "#highlights" },
    { label: t("nav.landscape"), href: "#enzo-enea" },
    { label: t("nav.transport"), href: "#transport" },
    { label: t("nav.innovation"), href: "#location" },
    { label: t("nav.sales"), href: "#sales" },
    { label: t("nav.contact"), href: "#contact" },
  ];
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
                scrolled && !mobileOpen ? "text-[oklch(0.25_0.08_240)]" : "text-white"
              }`}
            >
              CLOUDVIEW
            </span>
            <span
              className={`font-display text-sm tracking-[0.4em] transition-colors duration-300 ${
                scrolled && !mobileOpen ? "text-[oklch(0.45_0.15_225)]" : "text-white/90"
              }`}
            >
              雲向
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`font-body text-sm tracking-wider transition-all duration-300 relative group cursor-pointer ${
                  scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[oklch(0.72_0.12_220)] group-hover:w-full transition-all duration-300" />
              </a>
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
                  {t("nav.language")}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md border-white/20 min-w-[120px]">
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20" onClick={() => i18n.changeLanguage('zh-HK')}>
                  繁體中文
                </DropdownMenuItem>
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20" onClick={() => i18n.changeLanguage('zh-CN')}>
                  简体中文
                </DropdownMenuItem>
                <DropdownMenuItem className="font-body text-sm cursor-pointer focus:bg-[oklch(0.72_0.12_220)]/20" onClick={() => i18n.changeLanguage('en-US')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="https://www.instagram.com/wingtai_living/?locale=zh_hk"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center transition-colors duration-300 hover:text-[oklch(0.72_0.12_220)] ${
                scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white/90"
              }`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className={`font-body text-sm tracking-widest transition-colors duration-300 hover:text-[oklch(0.72_0.12_220)] ${
                scrolled ? "text-[oklch(0.25_0.08_240)]" : "text-white/90"
              }`}
            >
              {t("nav.get_info")}
            </button>
            <button
              onClick={() => window.open(`https://wa.me/85212345678?text=${t('cta.whatsapp_msg')}`, '_blank')}
              className="btn-primary text-sm tracking-widest flex items-center gap-2"
              style={{ borderRadius: "2px" }}
            >
              <MessageCircle size={16} className="text-white" />
              {t("nav.whatsapp")}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-5">
            <button
              onClick={() => {
                const langs = ['zh-HK', 'zh-CN', 'en-US'];
                const currentIdx = langs.indexOf(i18n.language) !== -1 ? langs.indexOf(i18n.language) : 0;
                const nextLang = langs[(currentIdx + 1) % langs.length];
                i18n.changeLanguage(nextLang);
              }}
              className={`flex items-center justify-center transition-colors duration-300 ${
                scrolled && !mobileOpen ? "text-[oklch(0.25_0.08_240)]" : "text-white"
              }`}
              style={{ width: '40px', height: '40px' }}
              aria-label="Toggle Language"
            >
              <div className="flex items-center gap-1.5 font-body text-sm">
                <Globe size={18} />
                <span>{i18n.language === 'en-US' ? 'EN' : i18n.language === 'zh-CN' ? '简' : '繁'}</span>
              </div>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`transition-colors duration-300 ${
                scrolled && !mobileOpen ? "text-[oklch(0.25_0.08_240)]" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="font-display text-2xl text-white/90 tracking-widest hover:text-[oklch(0.72_0.12_220)] transition-colors duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {item.label}
            </a>
          ))}
          <div className="gold-line mt-4" />
          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://www.instagram.com/wingtai_living/?locale=zh_hk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[oklch(0.72_0.12_220)] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <button
              onClick={() => {
                window.open(`https://wa.me/85212345678?text=${t('cta.whatsapp_msg')}`, '_blank');
                setMobileOpen(false);
              }}
              className="btn-primary text-base tracking-widest flex items-center gap-2"
              style={{ borderRadius: "2px" }}
            >
              <MessageCircle size={18} className="text-white" />
              {t("nav.whatsapp")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
