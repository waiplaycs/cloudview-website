import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'zh-HK': {
    translation: {
      nav: {
        home: "首頁",
        highlights: "雲向亮點",
        landscape: "園林大師",
        transport: "三線鐵路",
        innovation: "創科新城",
        sales: "售樓資訊",
        contact: "預約參觀",
        language: "繁體中文",
        get_info: "領取資料",
        whatsapp: "WhatsApp",
      },
      hero: {
        sub_title: "CLOUDVIEW",
        title: "雲向",
        slogan: "北部都會區·創科生活新地標",
        desc: "傲踞北部都會區核心，盡享三線鐵路優勢。\n知名園林大師打造，締造無與倫比的寫意生活空間。",
        total_units: "伙",
        units_label: "住宅單位",
        floors: "層",
        floors_label: "雙頂層會所",
        height: "米",
        height_label: "極高特高樓底",
        book_visit: "預約參觀示範單位",
        dedicated_service: "專人為你服務",
        ec: "電子場刊",
      },
      contact: {
        title: "聯絡我們",
        subtitle: "填寫以下資料，我們的專員將盡快與您聯絡，安排參觀示範單位及講解詳情。",
        success_title: "登記成功！",
        success_desc: "感謝您的查詢。我們的專員將於24小時內透過您提供的聯絡方式與您聯絡。",
        re_register: "重新登記",
        form_title: "預約參觀 / 索取資料",
        form_subtitle: "請填寫您的基本資料",
        name: "姓名",
        name_ph: "請填寫您的姓名",
        phone: "聯絡電話",
        phone_ph: "請填寫您的電話號碼",
        email: "電郵地址",
        email_ph: "請填寫您的電郵地址",
        unit: "感興趣的戶型",
        unit_ph: "選擇戶型 (可選)",
        unit_studio: "開放式 (約196-220呎)",
        unit_1br: "1房 (約292-445呎)",
        unit_2br: "2房 (約445-620呎)",
        unit_3br: "3房 (約620-868呎)",
        message: "留言 / 查詢 (選填)",
        message_ph: "例如：想了解付款計劃、想安排周末參觀...",
        submitting: "提交中...",
        submit: "立即提交",
        privacy: "本人同意接收大鴻輝集團的最新資訊及優惠",
      },
      footer: {
        disclaimer: "重要聲明：本網頁包含的圖片及資訊僅供參考，並不構成任何要約或承諾。所有銷售詳情以《一手住宅物業銷售條例》及賣方公佈的售樓說明書為準。項目模擬圖為畫家對該發展項目之想像，並非按比例繪製。建議準買家參閱售樓說明書以了解項目詳情。所有資訊以有關政府部門之最後批准為準。"
      }
    }
  },
  'zh-CN': {
    translation: {
      nav: {
        home: "首页",
        highlights: "云向亮点",
        landscape: "园林大师",
        transport: "三线铁路",
        innovation: "创科新城",
        sales: "售楼资讯",
        contact: "预约参观",
        language: "简体中文",
        get_info: "领取资料",
        whatsapp: "WhatsApp",
      },
      hero: {
        sub_title: "CLOUDVIEW",
        title: "云向",
        slogan: "北部都会区·创科生活新地标",
        desc: "傲踞北部都会区核心，尽享三线铁路优势。\n知名园林大师打造，缔造无与伦比的写意生活空间。",
        total_units: "伙",
        units_label: "住宅单位",
        floors: "层",
        floors_label: "双顶层会所",
        height: "米",
        height_label: "极高特高楼底",
        book_visit: "预约参观示范单位",
        dedicated_service: "专人为您服务",
        ec: "电子场刊",
      },
      contact: {
        title: "联系我们",
        subtitle: "填写以下资料，我们的专员将尽快与您联络，安排参观示范单位及讲解详情。",
        success_title: "登记成功！",
        success_desc: "感谢您的查询。我们的专员将于24小时内透过您提供的联系方式与您联络。",
        re_register: "重新登记",
        form_title: "预约参观 / 索取资料",
        form_subtitle: "请填写您的基本资料",
        name: "姓名",
        name_ph: "请填写您的姓名",
        phone: "联系电话",
        phone_ph: "请填写您的电话号码",
        email: "电邮地址",
        email_ph: "请填写您的电邮地址",
        unit: "感兴趣的户型",
        unit_ph: "选择户型 (可选)",
        unit_studio: "开放式 (约196-220呎)",
        unit_1br: "1房 (约292-445呎)",
        unit_2br: "2房 (约445-620呎)",
        unit_3br: "3房 (约620-868呎)",
        message: "留言 / 查询 (选填)",
        message_ph: "例如：想了解付款计划、想安排周末参观...",
        submitting: "提交中...",
        submit: "立即提交",
        privacy: "本人同意接收大鸿辉集团的最新信息及优惠",
      },
      footer: {
        disclaimer: "重要声明：本网页包含的图片及信息仅供参考，并不构成任何要约或承诺。所有销售详情以《一手住宅物业销售条例》及卖方公布的售楼说明书为准。项目模拟图为画家对该发展项目之想象，并非按比例绘制。建议准买家参阅售楼说明书以了解项目详情。所有信息以有关政府部门之最后批准为准。"
      }
    }
  },
  'en-US': {
    translation: {
      nav: {
        home: "Home",
        highlights: "Highlights",
        landscape: "Landscape",
        transport: "Transport",
        innovation: "Innovation Hub",
        sales: "Sales Info",
        contact: "Book Visit",
        language: "English",
        get_info: "Get Info",
        whatsapp: "WhatsApp",
      },
      hero: {
        sub_title: "CLOUDVIEW",
        title: "CLOUDVIEW",
        slogan: "Northern Metropolis · New Tech Living Landmark",
        desc: "Located in the core of Northern Metropolis, enjoying 3 railway lines.\nCrafted by renowned landscape masters for unparalleled living.",
        total_units: " U",
        units_label: "Residences",
        floors: " F",
        floors_label: "Clubhouse",
        height: " M",
        height_label: "Ceiling Height",
        book_visit: "Book Showflat Visit",
        dedicated_service: "Dedicated Service",
        ec: "E-Brochure",
      },
      contact: {
        title: "Contact Us",
        subtitle: "Fill in your details below. Our specialist will contact you shortly to arrange a showflat visit and explain the details.",
        success_title: "Registration Successful!",
        success_desc: "Thank you for your inquiry. Our specialist will contact you within 24 hours.",
        re_register: "Register Again",
        form_title: "Book Visit / Get Info",
        form_subtitle: "Please provide your basic details",
        name: "Name",
        name_ph: "Enter your name",
        phone: "Phone Number",
        phone_ph: "Enter your phone number",
        email: "Email Address",
        email_ph: "Enter your email address",
        unit: "Interested Unit Type",
        unit_ph: "Select Type (Optional)",
        unit_studio: "Studio (196-220 sq.ft)",
        unit_1br: "1-Bedroom (292-445 sq.ft)",
        unit_2br: "2-Bedroom (445-620 sq.ft)",
        unit_3br: "3-Bedroom (620-868 sq.ft)",
        message: "Message / Inquiry (Optional)",
        message_ph: "e.g., Learn about payment plans, arrange weekend visit...",
        submitting: "Submitting...",
        submit: "Submit Now",
        privacy: "I agree to receive the latest news and offers from Tai Hung Fai Group",
      },
      footer: {
        disclaimer: "Important Disclaimer: The images and information contained in this website are for reference only and do not constitute any offer or commitment. All sales details are subject to the Residential Properties (First-hand Sales) Ordinance and the sales brochure announced by the vendor. The project simulated images are artist's impressions and are not drawn to scale. Prospective purchasers are advised to refer to the sales brochure for details. All information is subject to the final approval of relevant government departments."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-HK',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
