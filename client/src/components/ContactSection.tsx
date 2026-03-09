/*
 * 雲向 CLOUDVIEW — 聯絡表單區域
 * 風格: 天空藍漸層背景，白色表單卡片，右側建築圖像
 */

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import { reportConversion } from "../lib/analytics";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390670563/Ze3u637JsALmM5sdedd6MJ/cloudview_hero-knk3x8KoJbCBEju3oUt9HR.webp";

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("缺少 EmailJS 設定，請管理員檢查 .env");
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      reportConversion();
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err?.text || err?.message || "提交失敗，請檢查連線後重試。");
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
            {t("contact.title")}
          </h2>
          <p className="font-body text-white/60 text-base mt-4 max-w-lg mx-auto leading-relaxed">
            {t("contact.subtitle")}
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
                    {t("contact.success_title")}
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm">
                    {t("contact.success_desc")}
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setError(null); setForm({ name: "", phone: "", email: "", unitType: "", message: "" }); }}
                    className="mt-8 font-body text-[oklch(0.72_0.12_220)] text-xs tracking-widest hover:text-white transition-colors duration-300"
                  >
                    {t("contact.re_register")}
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="font-display text-white text-xl font-light tracking-wide">
                      {t("contact.form_title")}
                    </h3>
                    <p className="font-body text-[oklch(0.72_0.12_220)] text-xs tracking-widest mt-1">
                      {t("contact.form_subtitle")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.name_ph")}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.phone_ph")}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.email_ph")}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                      {t("contact.unit")}
                    </label>
                    <select
                      name="unitType"
                      value={form.unitType}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.25_0.08_240)] border border-white/20 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.72_0.12_220)] transition-colors duration-300"
                      style={{ borderRadius: "2px" }}
                    >
                      <option value="">{t("contact.unit_ph")}</option>
                      <option value="studio">{t("contact.unit_studio")}</option>
                      <option value="1br">{t("contact.unit_1br")}</option>
                      <option value="2br">{t("contact.unit_2br")}</option>
                      <option value="3br">{t("contact.unit_3br")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider block mb-2">
                      {t("contact.message")}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder={t("contact.message_ph")}
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
                    {loading ? t("contact.submitting") : t("contact.submit")}
                  </button>

                  <p className="font-body text-white/40 text-xs text-center leading-relaxed">
                    {t("contact.privacy")}
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

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </section>
  );
}
