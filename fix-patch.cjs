const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));

function update(key, callback) {
  let content = data[key];
  if (!content.includes('useTranslation')) {
    content = 'import { useTranslation } from "react-i18next";\n' + content;
  }
  content = content.replace(/(export default function [A-Za-z]+\([^)]*\)\s*\{)/, "$1\n  const { t } = useTranslation();\n");
  content = callback(content);
  fs.writeFileSync(key, content);
}

update('client/src/components/HighlightsSection.tsx', (code) => {
  // Move highlights inside the component
  const hookIndex = code.indexOf('const { t } = useTranslation();');
  const arrMatch = code.match(/const highlights = \[\s*\{[\s\S]*?\}\s*\];/);
  if (arrMatch) {
     code = code.replace(arrMatch[0], ''); // remove from outside
     const updatedArr = arrMatch[0]
        .replace(/"北部都會區核心優勢"/g, "t('highlights.core.title')")
        .replace(/"位於粉錦公路與青山公路交界核心試點，享未來20年發展紅利。毗鄰創科走廊，區內人口預計增至46萬，基建持續升級，長期增值潛力顯著。"/g, "t('highlights.core.desc')")
        .replace(/"便捷交通網絡"/g, "t('highlights.transport.title')")
        .replace(/"步行約8分鐘達上水站，1站到羅湖\/落馬洲，直通紅磡金鐘無需換乘。未來2027年北環線及新皇崗口岸啟用後，完美適配雙城生活。"/g, "t('highlights.transport.desc')")
        .replace(/"稀缺180°高爾夫景觀"/g, "t('highlights.golf.title')")
        .replace(/"南向\/西南向單位享180°無遮擋粉嶺高爾夫球場景觀\(170公頃\)。高層遠眺深圳天際線，落地玻璃窗設計強化景觀，部分帶40呎「三合一」露台。"/g, "t('highlights.golf.desc')")
        .replace(/"高實用率與優質戶型"/g, "t('highlights.layout.title')")
        .replace(/"實用率約86%，無多餘過道浪費。3.25-3.55米超高樓底，提供開放式至3房\(196–868呎\)，近九成為1–2房剛需戶型，居住空間更寬敞舒適。"/g, "t('highlights.layout.desc')")
        .replace(/"度假式會所與園林"/g, "t('highlights.clubhouse.title')")
        .replace(/"近2.8萬呎會所「Cloud Retreat」連園林。設五大主題花園、近50米園林泳池、Oasis Fitness健身室及兒童樹屋，滿足全齡段「雲端生活」。"/g, "t('highlights.clubhouse.desc')")
        .replace(/"成熟生活配套"/g, "t('highlights.lifestyle.title')")
        .replace(/"步行可達上水廣場、新都廣場、彩園商場等。鄰近北區醫院與多間診所，體育館及日常休閒娛樂一應俱全，盡享5-10分鐘成熟生活圈。"/g, "t('highlights.lifestyle.desc')")
        .replace(/"優質教育資源"/g, "t('highlights.education.title')")
        .replace(/"坐擁80小學校網\(覆蓋上水、粉嶺\)及北區中學校網，名校林立。鄰近香港中文大學及規劃中的香港科技大學新醫學院，學術氛圍濃厚。"/g, "t('highlights.education.desc')")
        .replace(/"投資價值與友好門檻"/g, "t('highlights.investment.title')")
        .replace(/"首批總價290萬港元起\(開放式\)，折實平均呎價13,974元，性價比突出。預計租金水平達每平方呎60港元，租金回報樂觀，跨境需求持續帶動升值。"/g, "t('highlights.investment.desc')");
     
     code = code.replace('const { t } = useTranslation();', 'const { t } = useTranslation();\n  ' + updatedArr);
  }

  return code
    .replace('項目亮點', "{t('highlights.title')}")
    .replace('雲向集多重優勢於一身，為您呈獻香港北部都會區最矚目的居住選擇。', "{t('highlights.subtitle')}")
    .replace('140公頃<br />翠綠球場全景', "<span dangerouslySetInnerHTML={{ __html: t('highlights.golf_banner_title') }} />")
    .replace('粉嶺香港哥爾夫球會擁有逾百年歷史，是香港最具代表性的私人球會。', "{t('highlights.golf_banner_desc')}")
    .replace('雲向單位前臨球場，讓您每日醒來即享稀有綠意景觀。', "{t('highlights.golf_banner_desc2')}")
    .replace('>140公頃高球場翠綠全景<', ">{t('highlights.golf_tag_1')}<")
    .replace('>三合一露台 · 寬闊3米<', ">{t('highlights.golf_tag_2')}<")
    .replace('>落地玻璃幕牆 · 採光最大化<', ">{t('highlights.golf_tag_3')}<");
});

update('client/src/components/ArchitectureSection.tsx', (code) => {
    return code
    .replace('世界級景觀設計大師', "{t('architecture.title')}")
    .replace('Enzo Enea 是享譽國際的瑞士園林建築大師及 Enea Landscape Architecture 創辦人，被譽為將古樹保育、藝術收藏與頂級建築完美結合的先驅。其設計理念提倡「室外即室內」(Outside In)，以空間平衡與古樹保育聞名，合作對象涵蓋 Zaha Hadid、安藤忠雄等普利茲克建築獎巨擘。', "{t('architecture.desc1')}")
    .replace('他在國際間屢獲殿堂級殊榮：1998年成為首位榮獲英國切爾西花展「最佳展示花園」的瑞士人；其創立的全球唯一「樹木博物館」於2009年獲頒美國建築獎；事務所更榮獲 DGNB 史上首個鉑金與鑽石等級永續認證，並多次囊括 ASLA 專業大獎。', "{t('architecture.desc2')}")
    .replace('獲獎無數的瑞士園林設計師Enzo Enea設計「Eco Garden」，與前臨高爾夫球場的翠綠連綿景觀相連，洋溢不同層次的綠意。園內栽種多種樹木及花卉，並設置特色鳥舍，吸引附近雀鳥到訪，讓人與生物和諧共存，著力打造可持續環境。', "{t('architecture.desc3')}");
});

update('client/src/components/LocationSection.tsx', (code) => {
    return code
    .replace('兩大創科新城', "{t('location.title1')}")
    .replace('全新經濟引擎', "{t('location.title2')}")
    .replace('傲踞北部都會區核心地段<br />', "<span dangerouslySetInnerHTML={{ __html: t('location.subtitle_html') }} />")
    .replace('擁五大關口地利 · 創新理想生活', "") 
    .replace('河套區港深創科園', "{t('location.park1_title')}")
    .replace('佔地 <strong>87.7 公頃</strong>，是全港唯一與深圳一水相連的創科園區，著力驅動六大支柱產業。首三座大樓主體工程已完成。', "<span dangerouslySetInnerHTML={{ __html: t('location.park1_desc') }} />")
    .replace('新田科技城 · 北都大學城', "{t('location.park2_title')}")
    .replace('預計提供約 <strong>210 公頃</strong>創科土地，毗鄰深圳皇崗福田，與深圳科創園區產生協同效應。政府已預留 <strong>90 公頃</strong> 用地發展北都大學城，最早 2026 年起逐步供用。', "<span dangerouslySetInnerHTML={{ __html: t('location.park2_desc') }} />")
    .replace(/"生命健康科技"/g, "t('location.tags.health')")
    .replace(/"人工智能"/g, "t('location.tags.ai')")
    .replace(/"新能源"/g, "t('location.tags.energy')")
    .replace(/"新材料"/g, "t('location.tags.material')")
    .replace(/"微電子"/g, "t('location.tags.micro')")
    .replace(/"機械人"/g, "t('location.tags.robotics')")
    .replace(/"210公頃創科土地"/g, "t('location.tags.land')")
    .replace(/"90公頃大學城"/g, "t('location.tags.uni')")
    .replace(/"2026年起逐步供用"/g, "t('location.tags.year')")
    .replace('點擊放大 · 可縮放', "{t('location.zoom_hint')}")
    .replace('* 地圖僅供參考，詳情以政府公佈為準', "{t('location.disclaimer')}")
    .replace('北部都會區地圖', "{t('location.map_alt')}")
    .replace('滾輪縮放 · 拖動移動', "{t('location.zoom_control')}")
    .replace('alt="北部都會區交通及創科地圖"', "alt={t('location.map_alt2')}");
});

update('client/src/components/AmenitiesSection.tsx', (code) => {
    code = code.replace(/const MTR_LINES = \[([\s\S]*?)\];/, () => {
        return `const getMtrLines = (t) => [
  {
    color: "bg-[#0BA3DA]",
    textColor: "text-[#0BA3DA]",
    name: t('amenities.east_rail.name'),
    badge: t('amenities.east_rail.badge'),
    badgeColor: "bg-[#0BA3DA]/20 text-[#0BA3DA]",
    points: [
      t('amenities.east_rail.p1'),
      t('amenities.east_rail.p2'),
    ],
  },
  {
    color: "bg-[#E2007A]",
    textColor: "text-[#E2007A]",
    name: t('amenities.north_link.name'),
    badge: t('amenities.north_link.badge'),
    badgeColor: "bg-[#E2007A]/15 text-[#E2007A]",
    points: [
      t('amenities.north_link.p1'),
      t('amenities.north_link.p2'),
      t('amenities.north_link.p3'),
    ],
  },
  {
    color: "bg-[#F5A623]",
    textColor: "text-[#F5A623]",
    name: t('amenities.ne_new_territories.name'),
    badge: t('amenities.ne_new_territories.badge'),
    badgeColor: "bg-[#F5A623]/15 text-[#F5A623]",
    points: [
      t('amenities.ne_new_territories.p1'),
    ],
  },
];`;
    });
    code = code.replace('MTR_LINES.map', 'getMtrLines(t).map');
    
    return code
    .replace('三線鐵路瞬動優勢', "{t('amenities.title')}")
    .replace('點擊放大查看，可滾輪縮放', "{t('amenities.zoom_title')}")
    .replace('點擊放大 · 可縮放', "{t('amenities.zoom_hint')}")
    .replace('* 路線圖僅供參考，詳情以港鐵公司公佈為準', "{t('amenities.disclaimer')}")
    .replace('滾輪縮放 · 拖動移動', "{t('amenities.zoom_control')}")
    .replace('alt="MTR 路線圖"', "alt={t('amenities.map_alt')} ")
    .replace('alt="MTR 路線圖"', "alt={t('amenities.map_alt')} ");
});

update('client/src/components/SalesSection.tsx', (code) => {
    code = code.replace(/const unitTypes = \[([\s\S]*?)\];/, () => {
        return `const getUnitTypes = (t) => [
  { type: t('sales.units.studio.type'), area: "196 - 220", percentage: "12%", count: t('sales.units.studio.count') },
  { type: t('sales.units.1br.type'), area: "292 - 445", percentage: "58%", count: t('sales.units.1br.count') },
  { type: t('sales.units.2br.type'), area: "445 - 620", percentage: "30%", count: t('sales.units.2br.count') },
  { type: t('sales.units.3br.type'), area: "620 - 868", percentage: t('sales.units.3br.percentage'), count: t('sales.units.3br.count') },
];`;
    });
    code = code.replace('unitTypes.map', 'getUnitTypes(t).map');

    code = code.replace(/const salesDocs = \[([\s\S]*?)\];/, () => {
        return `const getSalesDocs = (t) => [
  { icon: FileText, title: t('sales.docs.brochure.title'), desc: t('sales.docs.brochure.desc'), action: t('sales.docs.brochure.action'), href: "https://www.cloudview.hk/api/uploads/20260216%20Cloudview%20Sales%20Brochure.pdf" },
  { icon: DollarSign, title: t('sales.docs.price.title'), desc: t('sales.docs.price.desc'), action: t('sales.docs.price.action'), href: "https://www.cloudview.hk/api/uploads/CLOUDVIEW_PL1.pdf" },
  { icon: Newspaper, title: t('sales.docs.leaflet.title'), desc: t('sales.docs.leaflet.desc'), action: t('sales.docs.leaflet.action'), href: "https://www.cloudview.hk/CLOUDVIEW_Leaflet_250x375mmH_260127-RGB-2page-200dpi.pdf" },
  { icon: Calendar, title: t('sales.docs.schedule.title'), desc: t('sales.docs.schedule.desc'), action: null, href: null },
  { icon: Info, title: t('sales.docs.showflat.title'), desc: t('sales.docs.showflat.desc'), action: t('sales.docs.showflat.action'), href: null },
];`;
    });
    code = code.replace('salesDocs.map', 'getSalesDocs(t).map');

    return code
    .replace('售樓資訊', "{t('sales.title')}")
    .replace('了解雲向的戶型配置、定價及銷售安排，把握入市良機。', "{t('sales.subtitle')}")
    .replace('>戶型配置<', ">{t('sales.table.title')}<")
    .replace('>戶型<', ">{t('sales.table.type')}<")
    .replace('實用面積 (呎)', "{t('sales.table.area')}")
    .replace('>佔比<', ">{t('sales.table.percentage')}<")
    .replace('>數量<', ">{t('sales.table.count')}<")
    .replace('>1房<', ">{t('sales.tabs.1br')}<")
    .replace('>2房<', ">{t('sales.tabs.2br')}<")
    .replace('alt={`示範單位${galleryTab} ${idx+1}`}', "alt={`${t('sales.gallery.alt_prefix')} ${galleryTab} ${idx+1}`}")
    .replace('alt={`示範單位${galleryTab} ${lightboxIndex+1}`}', "alt={`${t('sales.gallery.alt_prefix')} ${galleryTab} ${lightboxIndex+1}`}")
    .replace('>點擊放大<', ">{t('sales.gallery.zoom_hint')}<")
    .replace('示範單位照片', "{t('sales.gallery.title')}")
    .replace('點擊放大平面圖', "{t('sales.floorplan.zoom_hint')}")
    .replace('標準層平面圖', "{t('sales.floorplan.title')}")
    .replace('alt="戶型平面圖"', "alt={t('sales.floorplan.alt')} ")
    .replace('alt="戶型平面圖"', "alt={t('sales.floorplan.alt')} ")
    .replace('觀看宣傳影片', "{t('sales.video.title')}")
    .replace('>銷售文件<', ">{t('sales.docs.title')}<")
    .replace('>上一張<', ">{t('sales.gallery.prev')}<")
    .replace('>下一張<', ">{t('sales.gallery.next')}<");
});

update('client/src/components/FloatingCTA.tsx', (code) => {
    return code
    .replace('https://wa.me/85212345678?text=你好，我對雲向項目有興趣，我想了解更多', "https://wa.me/85212345678?text=${t('cta.whatsapp_msg')}")
    .replace(/'https:\/\/wa\.me\/85212345678\?text=\$\{t\('cta.whatsapp_msg'\)\}'/, "`https://wa.me/85212345678?text=${t('cta.whatsapp_msg')}`")
    .replace('WhatsApp 查詢', "{t('cta.whatsapp')}")
    .replace('aria-label="查詢"', "aria-label={t('cta.aria')} ");
});
