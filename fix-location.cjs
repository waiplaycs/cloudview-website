const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));
let code = data['client/src/components/LocationSection.tsx'];

// Add useTranslation
code = code.replace(
  "import { Map as MapComponent } from \"./Map\";",
  "import { Map as MapComponent } from \"./Map\";\nimport { useTranslation } from \"react-i18next\";"
);
code = code.replace(
  "export default function LocationSection() {",
  "export default function LocationSection() {\n  const { t } = useTranslation();"
);

code = code.replace(
  "兩大創科新城",
  "{t('location.title1')}"
);

code = code.replace(
  "全新經濟引擎",
  "{t('location.title2')}"
);

code = code.replace(
  "傲踞北部都會區核心地段<br />擁五大關口地利 · 創新理想生活",
  "{t('location.subtitle_html')}"
);
code = code.replace(
  " dangerouslySetInnerHTML={{ __html: \"{t('location.subtitle_html')}\" }}",
  " dangerouslySetInnerHTML={{ __html: t('location.subtitle_html') }}"
);

code = code.replace(
  "河套區港深創科園",
  "{t('location.park1_title')}"
);
code = code.replace(
  /佔地 <strong>87.7 公頃<\/strong>，是全港唯一與深圳一水相連的創科園區，著力驅動六大支柱產業。首三座大樓主體工程已完成。/g,
  "{t('location.park1_desc')}"
);
code = code.replace(
  " dangerouslySetInnerHTML={{ __html: \"{t('location.park1_desc')}\" }}",
  " dangerouslySetInnerHTML={{ __html: t('location.park1_desc') }}"
);

code = code.replace(
  "新田科技城 · 北都大學城",
  "{t('location.park2_title')}"
);
code = code.replace(
  "預計提供約 <strong>210 公頃</strong>創科土地，毗鄰深圳皇崗福田，與深圳科創園區產生協同效應。政府已預留 <strong>90 公頃</strong> 用地發展北都大學城，最早 2026 年起逐步供用。",
  "{t('location.park2_desc')}"
);
code = code.replace(
  " dangerouslySetInnerHTML={{ __html: \"{t('location.park2_desc')}\" }}",
  " dangerouslySetInnerHTML={{ __html: t('location.park2_desc') }}"
);


code = code.replace(
  "生命健康科技",
  "{t('location.tags.health')}"
);
code = code.replace(
  "人工智能",
  "{t('location.tags.ai')}"
);
code = code.replace(
  ">新能源<",
  ">{t('location.tags.energy')}<"
);
code = code.replace(
  ">新材料<",
  ">{t('location.tags.material')}<"
);
code = code.replace(
  ">微電子<",
  ">{t('location.tags.micro')}<"
);
code = code.replace(
  ">機械人<",
  ">{t('location.tags.robotics')}<"
);
code = code.replace(
  "210公頃創科土地",
  "{t('location.tags.land')}"
);
code = code.replace(
  "90公頃大學城",
  "{t('location.tags.uni')}"
);
code = code.replace(
  "2026年起逐步供用",
  "{t('location.tags.year')}"
);


code = code.replace(
  /點擊放大 · 可縮放/g,
  "{t('location.zoom_hint')}"
);
code = code.replace(
  /滾輪縮放 · 拖動移動/g,
  "{t('location.zoom_control')}"
);

code = code.replace(
  /\* 地圖僅供參考，詳情以政府公佈為準/g,
  "{t('location.disclaimer')}"
);

code = code.replace(
  /alt="北部都會區地圖"/g,
  "alt={t('location.map_alt')}"
);
code = code.replace(
  /alt="北部都會區交通及創科地圖"/g,
  "alt={t('location.map_alt2')}"
);

fs.writeFileSync('client/src/components/LocationSection.tsx', code);
console.log('done location');
