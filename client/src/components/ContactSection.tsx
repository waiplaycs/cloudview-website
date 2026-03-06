/*
 * 雲向 CLOUDVIEW — 聯絡表單區域
 * 風格: 天空藍漸層背景，白色表單卡片，右側建築圖像
 */

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390670563/Ze3u637JsALmM5sdedd6MJ/cloudview_hero-knk3x8KoJbCBEju3oUt9HR.webp";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    unitType: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data?.error ?? "提交失敗，請稍後再試。");
      }
    } catch {
      setError("網絡錯誤，請檢查連線後重試。");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="雲向背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.06_240/0.88)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-body text-white/50 text-xs tracking-[0.3em] uppercase">
              Contact Us
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl font-light tracking-wide">
            聯絡我們
          </h2>
          <p className="font-body text-white/60 text-base mt-4 max-w-lg mx-auto leading-relaxed">
            立即登記，優先獲取最新銷售資訊及預約參觀示範單位。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10"
              style={{ borderRadius: "4px" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle size={60} className="text-[oklch(0.72_0.12_220)] mb-6" />
                  <h3 className="font-display text-white text-2xl font-light tracking-wide mb-3">
                    已收到您的查詢
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm">
                    感謝您的登記！我們的專人將盡快與您聯絡，為您提供最新銷售資訊及安排參觀。
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setError(null); setForm({ name: "", phone: "", unitType: "", message: "" }); }}
                    className="mt-8 font-body text-[oklch(0.72_0.12_220)] text-xs tracking-widest hover:text-white transition-colors duration-300"
                  >
                    重新登記 →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="font-display text-white text-xl font-light tracking-wide">
                      優先登記查詢
                    </h3>
                    <p className="font-body text-[oklch(0.72_0.12_220)] text-xs tracking-widest mt-1">
                      專人接待 · 盡快回覆
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="請輸入您的姓名"
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                        聯絡電話 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="請輸入您的電話號碼"
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                      感興趣的戶型
                    </label>
                    <select
                      name="unitType"
                      value={form.unitType}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.25_0.08_240)] border border-white/20 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                      style={{ borderRadius: "2px" }}
                    >
                      <option value="">請選擇戶型</option>
                      <option value="studio">開放式 (196-220呎)</option>
                      <option value="1br">一房 (292-445呎)</option>
                      <option value="2br">兩房 (445-620呎)</option>
                      <option value="3br">三房 (620-868呎)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                      查詢內容
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="請輸入您的查詢或留言..."
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300 resize-none"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-300 bg-red-500/10 border border-red-400/30 px-4 py-3 text-sm font-body" style={{ borderRadius: "2px" }}>
                      <AlertCircle size={16} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-3 text-sm tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ borderRadius: "2px" }}
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? "提交中…" : "立即登記查詢"}
                  </button>

                  <p className="font-body text-white/40 text-xs text-center leading-relaxed">
                    提交即表示您同意我們的私隱政策，您的個人資料將僅用於本次查詢。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="reveal mt-12 flex justify-end">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-number text-white text-sm tracking-widest leading-none">07</span>
            <div className="w-12 h-[1px] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
