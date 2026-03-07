import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const sharedKeysZhHk = {
  nav: {
    home: "首頁", highlights: "雲向亮點", landscape: "園林大師", transport: "三線鐵路", innovation: "創科新城",
    sales: "售樓資訊", contact: "預約參觀", language: "繁體中文", get_info: "領取資料", whatsapp: "WhatsApp",
  },
  hero: {
    sub_title: "CLOUDVIEW", title: "雲向", slogan: "北部都會區·創科生活新地標", desc: "傲踞北部都會區核心，盡享三線鐵路優勢。\n知名園林大師打造，締造無與倫比的寫意生活空間。",
    total_units: "伙", units_label: "住宅單位", floors: "層", floors_label: "雙頂層會所", height: "米", height_label: "極高特高樓底",
    book_visit: "預約參觀示範單位", dedicated_service: "專人為你服務", ec: "電子場刊",
  },
  highlights: {
    title: "項目亮點",
    subtitle: "雲向集多重優勢於一身，為您呈獻香港北部都會區最矚目的居住選擇。",
    core: { title: "北部都會區核心優勢", desc: "位於粉錦公路與青山公路交界核心試點，享未來20年發展紅利。毗鄰創科走廊，區內人口預計增至46萬，基建持續升級，長期增值潛力顯著。" },
    transport: { title: "便捷交通網絡", desc: "步行約8分鐘達上水站，1站到羅湖/落馬洲，直通紅磡金鐘無需換乘。未來2027年北環線及新皇崗口岸啟用後，完美適配雙城生活。" },
    golf: { title: "稀缺180°高爾夫景觀", desc: "南向/西南向單位享180°無遮擋粉嶺高爾夫球場景觀(170公頃)。高層遠眺深圳天際線，落地玻璃窗設計強化景觀，部分帶40呎「三合一」露台。" },
    layout: { title: "高實用率與優質戶型", desc: "實用率約86%，無多餘過道浪費。3.25-3.55米超高樓底，提供開放式至3房(196–868呎)，近九成為1–2房剛需戶型，居住空間更寬敞舒適。" },
    clubhouse: { title: "度假式會所與園林", desc: "近2.8萬呎會所「Cloud Retreat」連園林。設五大主題花園、近50米園林泳池、Oasis Fitness健身室及兒童樹屋，滿足全齡段「雲端生活」。" },
    lifestyle: { title: "成熟生活配套", desc: "步行可達上水廣場、新都廣場、彩園商場等。鄰近北區醫院與多間診所，體育館及日常休閒娛樂一應俱全，盡享5-10分鐘成熟生活圈。" },
    education: { title: "優質教育資源", desc: "坐擁80小學校網(覆蓋上水、粉嶺)及北區中學校網，名校林立。鄰近香港中文大學及規劃中的香港科技大學新醫學院，學術氛圍濃厚。" },
    investment: { title: "投資價值與友好門檻", desc: "首批總價290萬港元起(開放式)，折實平均呎價13,974元，性價比突出。預計租金水平達每平方呎60港元，租金回報樂觀，跨境需求持續帶動升值。" },
    golf_img_alt: "粉嶺高爾夫球場景觀",
    golf_banner_title: "140公頃<br />翠綠球場全景",
    golf_banner_desc: "粉嶺香港哥爾夫球會擁有逾百年歷史，是香港最具代表性的私人球會。雲向單位前臨球場，讓您每日醒來即享稀有綠意景觀。",
    golf_tag_1: "140公頃高球場翠綠全景",
    golf_tag_2: "三合一露台 · 寬闊3米",
    golf_tag_3: "落地玻璃幕牆 · 採光最大化"
  },
  architecture: {
    title: "知名景觀設計大師",
    desc1: "憑藉其獨特的設計理念和對自然環境的深刻理解，為多個國際頂尖項目打造出令人驚歎的景觀空間。",
    desc2: "在「雲向」，Enzo Enea 將自然生態與現代居住完美融合，創造出「Cloud Retreat」度假式會所。",
    desc3: "項目包含五大主題花園、近50米園林泳池及兒童樹屋，讓住戶在都市中亦能享受寧靜寫意的綠色生活。"
  },
  location: {
    zoom_hint: "點擊放大",
    zoom_control: "點擊放大 · 可縮放",
    map_alt: "北部都會區交通及創科地圖",
    title1: "兩大創科新城",
    title2: "全新經濟引擎",
    subtitle_html: "傲踞北部都會區核心地段<br />擁五大關口地利 · 創新理想生活",
    park1_title: "河套區港深創科園",
    park1_desc: "佔地 <strong>87.7 公頃</strong>，是全港唯一與深圳一水相連的創科園區，著力驅動六大支柱產業。首三座大樓主體工程已完成。",
    tags: {
      health: "生命健康科技", ai: "人工智能", energy: "新能源", material: "新材料", micro: "微電子", robotics: "機械人",
      land: "210公頃創科土地", uni: "90公頃大學城", year: "2026年起逐步供用"
    },
    park2_title: "新田科技城 · 北都大學城",
    park2_desc: "預計提供約 <strong>210 公頃</strong>創科土地，毗鄰深圳皇崗福田，與深圳科創園區產生協同效應。政府已預留 <strong>90 公頃</strong>用地發展北都大學城 ，最早 2026 年起逐步供用。",
    disclaimer: "* 地圖僅供參考，詳情以政府公佈為準"
  },
  amenities: {
    east_rail: {
      name: "東鐵線", badge: "現役",
      p1: "項目鄰近上水站，一站直達羅湖及落馬洲，一線通往大學、大圍、會展、以至金鐘站。",
      p2: "瞬間直達多間著名大學，包括香港中文大學、浸會大學、城市大學及理工大學。"
    },
    north_link: {
      name: "北環線", badge: "預計2034年竣工",
      p1: "北環線古洞站預計於2027年竣工，主線正進行詳細規劃及設計，並預計在2034年竣工，以配合北部都會區發展。",
      p2: "支線由擬建新田站出發，途經洲頭以及河套，再接入皇崗口岸。",
      p3: "東延線將從古洞站為起點延伸至坪輋，途經新界北新市鎮（包括羅湖/文錦渡）的各個發展節點。"
    },
    ne_new_territories: {
      name: "新界東北線", badge: "規劃中",
      p1: "由香園圍途經坪輋等地區連接東鐵線粉嶺站，暢享香園圍口岸及轉乘東鐵線之便利。"
    },
    title: "三線鐵路瞬動優勢", zoom_title: "點擊放大查看，可滾輪縮放", map_alt: "MTR 路線圖", zoom_hint: "點擊放大 · 可縮放", zoom_control: "滾輪縮放 · 拖動移動",
    disclaimer: "* 路線圖僅供參考，詳情以港鐵公司公佈為準"
  },
  sales: {
    title: "售樓資訊", subtitle: "了解雲向的戶型配置、定價及銷售安排，把握入市良機。",
    table: { title: "戶型配置", type: "戶型", area: "實用面積 (呎)", percentage: "佔比", count: "數量" },
    units: {
      studio: { type: "開放式", count: "約92伙" },
      "1br": { type: "一房", count: "約444伙" },
      "2br": { type: "兩房", count: "約230伙" },
      "3br": { type: "三房", count: "部分樓層", percentage: "特色戶" }
    },
    tabs: { "1br": "1房", "2br": "2房" },
    gallery: { alt_prefix: "示範單位", zoom_hint: "點擊放大", title: "示範單位照片", prev: "上一張", next: "下一張" },
    floorplan: { alt: "戶型平面圖", zoom_hint: "點擊放大平面圖", title: "標準層平面圖" },
    video: { title: "觀看宣傳影片" },
    docs: {
      title: "銷售文件",
      brochure: { title: "售樓說明書", desc: "包含項目詳細資料及條款", action: "下載文件" },
      price: { title: "價單", desc: "最新單位定價及付款辦法", action: "查閱價單" },
      leaflet: { title: "宣傳單張", desc: "項目宣傳資料", action: "下載單張" },
      schedule: { title: "銷售安排", desc: "容後公布" },
      showflat: { title: "示範單位", desc: "九龍觀塘巧明街100號\n安盛金融大樓18樓", action: "預約參觀" }
    }
  },
  contact: {
    title: "聯絡我們", subtitle: "填寫以下資料，我們的專員將盡快與您聯絡，安排參觀示範單位及講解詳情。",
    success_title: "登記成功！", success_desc: "感謝您的查詢。我們的專員將於24小時內透過您提供的聯絡方式與您聯絡。",
    re_register: "重新登記", form_title: "預約參觀 / 索取資料", form_subtitle: "請填寫您的基本資料",
    name: "姓名", name_ph: "請填寫您的姓名", phone: "聯絡電話", phone_ph: "請填寫您的電話號碼", email: "電郵地址", email_ph: "請填寫您的電郵地址",
    unit: "感興趣的戶型", unit_ph: "選擇戶型 (可選)", unit_studio: "開放式 (約196-220呎)", unit_1br: "1房 (約292-445呎)", unit_2br: "2房 (約445-620呎)", unit_3br: "3房 (約620-868呎)",
    message: "留言 / 查詢 (選填)", message_ph: "例如：想了解付款計劃、想安排周末參觀...", submitting: "提交中...", submit: "立即提交", privacy: "本人同意接收大鴻輝集團的最新資訊及優惠",
  },
  footer: {
    disclaimer: "重要聲明：本網頁包含的圖片及資訊僅供參考，並不構成任何要約或承諾。所有銷售詳情以《一手住宅物業銷售條例》及賣方公佈的售樓說明書為準。項目模擬圖為畫家對該發展項目之想像，並非按比例繪製。建議準買家參閱售樓說明書以了解項目詳情。所有資訊以有關政府部門之最後批准為準。"
  },
  cta: { whatsapp_msg: "你好，我對雲向項目有興趣，我想了解更多", whatsapp: "WhatsApp 查詢", aria: "查詢" }
};

const sharedKeysZhCn = {
  nav: {
    home: "首页", highlights: "云向亮点", landscape: "园林大师", transport: "三线铁路", innovation: "创科新城",
    sales: "售楼资讯", contact: "预约参观", language: "简体中文", get_info: "领取资料", whatsapp: "WhatsApp",
  },
  hero: {
    sub_title: "CLOUDVIEW", title: "云向", slogan: "北部都会区·创科生活新地标", desc: "傲踞北部都会区核心，尽享三线铁路优势。\n知名园林大师打造，缔造无与伦比的写意生活空间。",
    total_units: "伙", units_label: "住宅单位", floors: "层", floors_label: "双顶层会所", height: "米", height_label: "极高特高楼底",
    book_visit: "预约参观示范单位", dedicated_service: "专人为您服务", ec: "电子场刊",
  },
  highlights: {
    title: "项目亮点",
    subtitle: "云向集多重优势于一身，为您呈献香港北部都会区最瞩目的居住选择。",
    core: { title: "北部都会区核心优势", desc: "位于粉锦公路与青山公路交界核心试点，享未来20年发展红利。毗邻创科走廊，区内人口预计增至46万，基建持续升级，长期增值潜力显著。" },
    transport: { title: "便捷交通网络", desc: "步行约8分钟达上水站，1站到罗湖/落马洲，直通红磡金钟无需换乘。未来2027年北环线及新皇岗口岸启用后，完美适配双城生活。" },
    golf: { title: "稀缺180°高尔夫景观", desc: "南向/西南向单位享180°无遮挡粉岭高尔夫球场景观(170公顷)。高层远眺深圳天际线，落地玻璃窗设计强化景观，部分带40呎「三合一」露台。" },
    layout: { title: "高实用率与优质户型", desc: "实用率约86%，无多余过道浪费。3.25-3.55米超高楼底，提供开放式至3房(196–868呎)，近九成为1–2房刚需户型，居住空间更宽敞舒适。" },
    clubhouse: { title: "度假式会所与园林", desc: "近2.8万呎会所「Cloud Retreat」连园林。设五大主题花园、近50米园林泳池、Oasis Fitness健身室及儿童树屋，满足全龄段「云端生活」。" },
    lifestyle: { title: "成熟生活配套", desc: "步行可达上水广场、新都广场、彩园商场等。邻近北区医院与多间诊所，体育馆及日常休闲娱乐一应俱全，尽享5-10分钟成熟生活圈。" },
    education: { title: "优质教育资源", desc: "坐拥80小学校网(覆盖上水、粉岭)及北区中学校网，名校林立。邻近香港中文大学及规划中的香港科技大学新医学院，学术氛围浓厚。" },
    investment: { title: "投资价值与友好门槛", desc: "首批总价290万港元起(开放式)，折实平均呎价13,974元，性价比突出。预计租金水平达每平方呎60港元，租金回报乐观，跨境需求持续带动升值。" },
    golf_img_alt: "粉岭高尔夫球场景观",
    golf_banner_title: "140公顷<br />翠绿球场全景",
    golf_banner_desc: "粉岭香港哥尔夫球会拥有逾百年历史，是香港最具代表性的私人球会。云向单位前临球场，让您每日醒来即享稀有绿意景观。",
    golf_tag_1: "140公顷高球场翠绿全景",
    golf_tag_2: "三合一露台 · 宽阔3米",
    golf_tag_3: "落地玻璃幕墙 · 采光最大化"
  },
  architecture: {
    title: "知名景观设计大师",
    desc1: "凭借其独特的设计理念和对自然环境的深刻理解，为多个国际顶尖项目打造出令人惊叹的景观空间。",
    desc2: "在「云向」，Enzo Enea 将自然生态与现代居住完美融合，创造出「Cloud Retreat」度假式会所。",
    desc3: "项目包含五大主题花园、近50米园林泳池及儿童树屋，让住户在都市中亦能享受宁静写意的绿色生活。"
  },
  location: {
    zoom_hint: "点击放大",
    zoom_control: "点击放大 · 可缩放",
    map_alt: "北部都会区交通及创科地图",
    title1: "两大创科新城",
    title2: "全新经济引擎",
    subtitle_html: "傲踞北部都会区核心地段<br />拥五大关口地利 · 创新理想生活",
    park1_title: "河套区港深创科园",
    park1_desc: "占地 <strong>87.7 公顷</strong>，是全港唯一与深圳一水相连的创科园区，着力驱动六大支柱产业。首三座大楼主体工程已完成。",
    tags: {
      health: "生命健康科技", ai: "人工智能", energy: "新能源", material: "新材料", micro: "微电子", robotics: "机器人",
      land: "210公顷创科土地", uni: "90公顷大学城", year: "2026年起逐步供用"
    },
    park2_title: "新田科技城 · 北都大学城",
    park2_desc: "预计提供约 <strong>210 公顷</strong>创科土地，毗邻深圳皇岗福田，与深圳科创园区产生协同效应。政府已预留 <strong>90 公顷</strong>用地发展北都大学城 ，最早 2026 年起逐步供用。",
    disclaimer: "* 地图仅供参考，详情以政府公布为准"
  },
  amenities: {
    east_rail: {
      name: "东铁线", badge: "现役",
      p1: "项目邻近上水站，一站直达罗湖及落马洲，一线通往大学、大围、会展、以至金钟站。",
      p2: "瞬间直达多间著名大学，包括香港中文大学、浸会大学、城市大学及理工大学。"
    },
    north_link: {
      name: "北环线", badge: "预计2034年竣工",
      p1: "北环线古洞站预计于2027年竣工，主线正进行详细规划及设计，并预计在2034年竣工，以配合北部都会区发展。",
      p2: "支线由拟建新田站出发，途经洲头以及河套，再接入皇岗口岸。",
      p3: "东延线将从古洞站为起点延伸至坪輋，途经新界北新市镇（包括罗湖/文锦渡）的各个发展节点。"
    },
    ne_new_territories: {
      name: "新界东北线", badge: "规划中",
      p1: "由香园围途经坪輋等地区连接东铁线粉岭站，畅享香园围口岸及转乘东铁线之便利。"
    },
    title: "三线铁路瞬动优势", zoom_title: "点击放大查看，可滚轮缩放", map_alt: "MTR 路线图", zoom_hint: "点击放大 · 可缩放", zoom_control: "滚轮缩放 · 拖动移动",
    disclaimer: "* 路线图仅供参考，详情以港铁公司公布为准"
  },
  sales: {
    title: "售楼资讯", subtitle: "了解云向的户型配置、定价及销售安排，把握入市良机。",
    table: { title: "户型配置", type: "户型", area: "实用面积 (呎)", percentage: "占比", count: "数量" },
    units: {
      studio: { type: "开放式", count: "约92伙" },
      "1br": { type: "一房", count: "约444伙" },
      "2br": { type: "两房", count: "约230伙" },
      "3br": { type: "三房", count: "部分楼层", percentage: "特色户" }
    },
    tabs: { "1br": "1房", "2br": "2房" },
    gallery: { alt_prefix: "示范单位", zoom_hint: "点击放大", title: "示范单位照片", prev: "上一张", next: "下一张" },
    floorplan: { alt: "户型平面图", zoom_hint: "点击放大平面图", title: "标准层平面图" },
    video: { title: "观看宣传影片" },
    docs: {
      title: "销售文件",
      brochure: { title: "售楼说明书", desc: "包含项目详细资料及条款", action: "下载文件" },
      price: { title: "价单", desc: "最新单位定价及付款办法", action: "查阅价单" },
      leaflet: { title: "宣传单张", desc: "项目宣传资料", action: "下载单张" },
      schedule: { title: "销售安排", desc: "容后公布" },
      showflat: { title: "示范单位", desc: "九龙观塘巧明街100号\n安盛金融大楼18楼", action: "预约参观" }
    }
  },
  contact: {
    title: "联系我们", subtitle: "填写以下资料，我们的专员将尽快与您联络，安排参观示范单位及讲解详情。",
    success_title: "登记成功！", success_desc: "感谢您的查询。我们的专员将于24小时内透过您提供的联系方式与您联络。",
    re_register: "重新登记", form_title: "预约参观 / 索取资料", form_subtitle: "请填写您的基本资料",
    name: "姓名", name_ph: "请填写您的姓名", phone: "联系电话", phone_ph: "请填写您的电话号码", email: "电邮地址", email_ph: "请填写您的电邮地址",
    unit: "感兴趣的户型", unit_ph: "选择户型 (可选)", unit_studio: "开放式 (约196-220呎)", unit_1br: "1房 (约292-445呎)", unit_2br: "2房 (约445-620呎)", unit_3br: "3房 (约620-868呎)",
    message: "留言 / 查询 (选填)", message_ph: "例如：想了解付款计划、想安排周末参观...", submitting: "提交中...", submit: "立即提交", privacy: "本人同意接收大鸿辉集团的最新信息及优惠",
  },
  footer: {
    disclaimer: "重要声明：本网页包含的图片及信息仅供参考，并不构成任何要约或承诺。所有销售详情以《一手住宅物业销售条例》及卖方公布的售楼说明书为准。项目模拟图为画家对该发展项目之想象，并非按比例绘制。建议准买家参阅售楼说明书以了解项目详情。所有信息以有关政府部门之最后批准为准。"
  },
  cta: { whatsapp_msg: "你好，我对云向项目有兴趣，我想了解更多", whatsapp: "WhatsApp 查询", aria: "查询" }
};

const sharedKeysEn = {
  nav: {
    home: "Home", highlights: "Highlights", landscape: "Landscape", transport: "Transport", innovation: "Innovation Hub",
    sales: "Sales Info", contact: "Book Visit", language: "English", get_info: "Get Info", whatsapp: "WhatsApp",
  },
  hero: {
    sub_title: "CLOUDVIEW", title: "CLOUDVIEW", slogan: "Northern Metropolis · New Tech Living Landmark", desc: "Located in the core of Northern Metropolis, enjoying 3 railway lines.\nCrafted by renowned landscape masters for unparalleled living.",
    total_units: " U", units_label: "Residences", floors: " F", floors_label: "Clubhouse", height: " M", height_label: "Ceiling Height",
    book_visit: "Book Showflat Visit", dedicated_service: "Dedicated Service", ec: "E-Brochure",
  },
  highlights: {
    title: "Project Highlights",
    subtitle: "CLOUDVIEW combines multiple advantages to present the most eye-catching residential choice in the Northern Metropolis.",
    core: { title: "Core Advantages", desc: "Located at the intersection of Fan Kam Road and Castle Peak Road, enjoying the next 20 years of development. Realizing significant long-term value potential." },
    transport: { title: "Convenient Transport", desc: "About 8 mins walk to Sheung Shui Station, 1 stop to Lo Wu/Lok Ma Chau. Connects seamlessly to dual-city living." },
    golf: { title: "Rare 180° Golf View", desc: "South/Southwest facing units enjoy an unobstructed 180° view of Fanling Golf Course (170 hectares)." },
    layout: { title: "High Practical Rate", desc: "Approx. 86% practical rate with no wasted corridors. Extra high ceilings of 3.25-3.55m, offering spacious living." },
    clubhouse: { title: "Resort-style Clubhouse", desc: "A 28,000 sq.ft. clubhouse \"Cloud Retreat\" with landscaped gardens, 50m pool, and Oasis Fitness to satisfy all ages." },
    lifestyle: { title: "Mature Amenities", desc: "Walking distance to Landmark North, Metropolis Plaza, and Choi Yuen Plaza. Close to North District Hospital and clinics." },
    education: { title: "Quality Education", desc: "Located in Primary School Net 80 and North District Secondary School Net, surrounded by renowned schools and near CUHK." },
    investment: { title: "Investment Value", desc: "Starting from HK$2.9 million (Studio), offering outstanding value for money and optimistic rental yield." },
    golf_img_alt: "Fanling Golf Course View",
    golf_banner_title: "140 Hectares<br />Panoramic Golf View",
    golf_banner_desc: "The Hong Kong Golf Club in Fanling has over a century of history. CLOUDVIEW units face the course, offering a rare green view every day.",
    golf_tag_1: "140 Hectares Green View",
    golf_tag_2: "3-in-1 Balcony · 3m Wide",
    golf_tag_3: "Floor-to-Ceiling Windows"
  },
  architecture: {
    title: "Renowned Landscape Architect",
    desc1: "With his unique design philosophy and profound understanding of the natural environment, he has created stunning landscape spaces for top international projects.",
    desc2: "At CLOUDVIEW, Enzo Enea perfectly integrates natural ecology with modern living to create the 'Cloud Retreat' resort clubhouse.",
    desc3: "The project includes five themed gardens, an approx. 50-metre landscaped pool, and a children's treehouse, offering a tranquil green lifestyle in the city."
  },
  location: {
    zoom_hint: "Click to enlarge",
    zoom_control: "Click to enlarge · Zoomable",
    map_alt: "Northern Metropolis Transport & Tech Map",
    title1: "Two Major Tech Cities",
    title2: "New Economic Engine",
    subtitle_html: "Strategically located in the core of Northern Metropolis<br />Enjoying the geographical advantage of 5 checkpoints",
    park1_title: "HSITP in Lok Ma Chau Loop",
    park1_desc: "Covering <strong>87.7 hectares</strong>, it is the only tech park in Hong Kong physically adjacent to Shenzhen, driving 6 pillar industries.",
    tags: {
      health: "Life & Health Tech", ai: "AI", energy: "New Energy", material: "New Material", micro: "Microelectronics", robotics: "Robotics",
      land: "210 hectares Tech Land", uni: "90 hectares University Town", year: "Progressive Supply from 2026"
    },
    park2_title: "San Tin Technopole · University Town",
    park2_desc: "Expected to provide approx. <strong>210 hectares</strong> of I&T land, synergizing with Shenzhen's tech parks. <strong>90 hectares</strong> reserved for a University Town.",
    disclaimer: "* Map is for reference only. Details are subject to government announcements."
  },
  amenities: {
    east_rail: {
      name: "East Rail Line", badge: "In Service",
      p1: "Close to Sheung Shui Station, one stop to Lo Wu and Lok Ma Chau, direct line to University, Tai Wai, Exhibition Centre, and Admiralty.",
      p2: "Instant access to renowned universities including CUHK, HKBU, CityU, and PolyU."
    },
    north_link: {
      name: "Northern Link", badge: "Exp. Completion 2034",
      p1: "Kwu Tung Station expected to complete in 2027. Main line under detailed planning, targeting 2034 to support Northern Metropolis.",
      p2: "Spur line from proposed San Tin Station connects via Chau Tau to the Loop, extending to Huanggang Port.",
      p3: "Eastern extension starts from Kwu Tung to Ping Che, passing through New Territories North development nodes."
    },
    ne_new_territories: {
      name: "New Territories Northeast Line", badge: "Under Planning",
      p1: "Connecting Heung Yuen Wai via Ping Che to Fanling Station, offering convenience to the port and East Rail Line interchanges."
    },
    title: "Three-line Railway Advantage", zoom_title: "Click to enlarge view, supports scroll zoom", map_alt: "MTR Route Map", zoom_hint: "Click to enlarge · Zoomable", zoom_control: "Scroll to zoom · Drag to pan",
    disclaimer: "* Route map is for reference only. Details are subject to MTR Corporation announcements."
  },
  sales: {
    title: "Sales Information", subtitle: "Learn more about CLOUDVIEW's unit layouts, pricing, and sales arrangements.",
    table: { title: "Unit Types", type: "Type", area: "Saleable Area (sq.ft)", percentage: "Percentage", count: "Quantity" },
    units: {
      studio: { type: "Studio", count: "Approx. 92 Units" },
      "1br": { type: "1-Bedroom", count: "Approx. 444 Units" },
      "2br": { type: "2-Bedroom", count: "Approx. 230 Units" },
      "3br": { type: "3-Bedroom", count: "Selected Floors", percentage: "Special Units" }
    },
    tabs: { "1br": "1-Bedroom", "2br": "2-Bedroom" },
    gallery: { alt_prefix: "Showflat", zoom_hint: "Click to enlarge", title: "Showflat Photos", prev: "Previous", next: "Next" },
    floorplan: { alt: "Floorplan", zoom_hint: "Click to enlarge floorplan", title: "Typical Floorplan" },
    video: { title: "Watch Promotional Video" },
    docs: {
      title: "Sales Documents",
      brochure: { title: "Sales Brochure", desc: "Detailed project information and terms", action: "Download File" },
      price: { title: "Price List", desc: "Latest unit pricing and payment methods", action: "View Price List" },
      leaflet: { title: "Promotional Leaflet", desc: "Project promotional material", action: "Download Leaflet" },
      schedule: { title: "Sales Arrangements", desc: "To be announced" },
      showflat: { title: "Showflat", desc: "18/F, AXA Tower\n100 How Ming St, Kwun Tong", action: "Book Visit" }
    }
  },
  contact: {
    title: "Contact Us", subtitle: "Fill in your details below. Our specialist will contact you shortly to arrange a showflat visit and explain the details.",
    success_title: "Registration Successful!", success_desc: "Thank you for your inquiry. Our specialist will contact you within 24 hours.",
    re_register: "Register Again", form_title: "Book Visit / Get Info", form_subtitle: "Please provide your basic details",
    name: "Name", name_ph: "Enter your name", phone: "Phone Number", phone_ph: "Enter your phone number", email: "Email Address", email_ph: "Enter your email address",
    unit: "Interested Unit Type", unit_ph: "Select Type (Optional)", unit_studio: "Studio (196-220 sq.ft)", unit_1br: "1-Bedroom (292-445 sq.ft)", unit_2br: "2-Bedroom (445-620 sq.ft)", unit_3br: "3-Bedroom (620-868 sq.ft)",
    message: "Message / Inquiry (Optional)", message_ph: "e.g., Learn about payment plans, arrange weekend visit...", submitting: "Submitting...", submit: "Submit Now", privacy: "I agree to receive the latest news and offers from Tai Hung Fai Group",
  },
  footer: {
    disclaimer: "Important Disclaimer: The images and information contained in this website are for reference only and do not constitute any offer or commitment. All sales details are subject to the Residential Properties (First-hand Sales) Ordinance and the sales brochure announced by the vendor. The project simulated images are artist's impressions and are not drawn to scale. Prospective purchasers are advised to refer to the sales brochure for details. All information is subject to the final approval of relevant government departments."
  },
  cta: { whatsapp_msg: "Hello, I am interested in the CLOUDVIEW project and would like to know more.", whatsapp: "WhatsApp Inquiry", aria: "Inquiry" }
};

const resources = {
  "zh-HK": { translation: sharedKeysZhHk },
  "zh-CN": { translation: sharedKeysZhCn },
  "en-US": { translation: sharedKeysEn }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh-HK",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
