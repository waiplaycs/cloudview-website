const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));
let code = data['client/src/components/AmenitiesSection.tsx'];

// Add useTranslation
code = code.replace(
  "import { Map as MapComponent } from \"./Map\";",
  "import { Map as MapComponent } from \"./Map\";\nimport { useTranslation } from \"react-i18next\";"
);
code = code.replace(
  "export default function AmenitiesSection() {",
  "export default function AmenitiesSection() {\n  const { t } = useTranslation();\n\n  const MTR_LINES = [\n  {\n    id: \"east-rail\",\n    name: t('amenities.east_rail.name'),\n    color: \"#53B7E8\", // East Rail Light Blue\n    badge: t('amenities.east_rail.badge'),\n    description: (\n      <div className=\"space-y-4\">\n        <p>{t('amenities.east_rail.p1')}</p>\n        <p>{t('amenities.east_rail.p2')}</p>\n      </div>\n    )\n  },\n  {\n    id: \"north-link\",\n    name: t('amenities.north_link.name'),\n    color: \"#9C27B0\", // Purple\n    badge: t('amenities.north_link.badge'),\n    description: (\n      <div className=\"space-y-4\">\n        <p>{t('amenities.north_link.p1')}</p>\n        <p>{t('amenities.north_link.p2')}</p>\n        <p>{t('amenities.north_link.p3')}</p>\n      </div>\n    )\n  },\n  {\n    id: \"ne-new-territories\",\n    name: t('amenities.ne_new_territories.name'),\n    color: \"#E91E63\", // Deep Purple/Pink\n    badge: t('amenities.ne_new_territories.badge'),\n    description: (\n      <div className=\"space-y-4\">\n        <p>{t('amenities.ne_new_territories.p1')}</p>\n      </div>\n    )\n  }\n];"
);


code = code.replace(
  "三線鐵路瞬動優勢",
  "{t('amenities.title')}"
);

code = code.replace(
  /點擊放大查看，可滾輪縮放/g,
  "{t('amenities.zoom_title')}"
);
code = code.replace(
  /點擊放大 · 可縮放/g,
  "{t('amenities.zoom_hint')}"
);
code = code.replace(
  /\* 路線圖僅供參考，詳情以港鐵公司公佈為準/g,
  "{t('amenities.disclaimer')}"
);
code = code.replace(
  /滾輪縮放 · 拖動移動/g,
  "{t('amenities.zoom_control')}"
);
code = code.replace(
  /alt="MTR 路線圖"/g,
  "alt={t('amenities.map_alt')}"
);

// We must remove the existing MTR_LINES array defined statically outside the component body.
code = code.replace(/const MTR_LINES = \[[\s\S]*?\];/m, "");

fs.writeFileSync('client/src/components/AmenitiesSection.tsx', code);
console.log('done amenities');
