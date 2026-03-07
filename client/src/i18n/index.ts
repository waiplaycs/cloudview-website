import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'zh-HK': { translation: { nav: { home: '首頁', highlights: '項目亮點', landscape: '景觀設計', transport: '交通優勢', innovation: '創科新城', sales: '售樓資訊', contact: '聯絡我們', get_info: '索取最新資訊', whatsapp: 'WhatsApp 查詢', language: '語言' } } },
  'zh-CN': { translation: { nav: { home: '首页', highlights: '项目亮点', landscape: '景观设计', transport: '交通优势', innovation: '创科新城', sales: '售楼信息', contact: '联系我们', get_info: '索取最新信息', whatsapp: 'WhatsApp 查询', language: '语言' } } },
  'en-US': { translation: { nav: { home: 'Home', highlights: 'Highlights', landscape: 'Landscape', transport: 'Transport', innovation: 'Tech Hub', sales: 'Sales Info', contact: 'Contact Us', get_info: 'Latest Info', whatsapp: 'WhatsApp Us', language: 'Language' } } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-HK',
  fallbackLng: 'zh-HK',
  interpolation: { escapeValue: false }
});

export default i18n;
