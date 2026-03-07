/*
 * 雲向 CLOUDVIEW — 頁腳組件
 * 風格: 深海藍背景，白色文字，法律聲明
 */

import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[oklch(0.12_0.05_245)] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Legal Disclaimer only */}
        <div className="border-t border-white/10 pt-8">
          <p className="font-body text-white/30 text-xs leading-relaxed mb-4">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
