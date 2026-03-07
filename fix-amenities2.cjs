const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));
let code = data['client/src/components/AmenitiesSection.tsx'];

// Add useTranslation
code = code.replace(
  "import { useEffect, useRef, useState, useCallback } from \"react\";",
  "import { useEffect, useRef, useState, useCallback } from \"react\";\nimport { useTranslation } from \"react-i18next\";"
);
code = code.replace(
  "export default function AmenitiesSection() {",
  "export default function AmenitiesSection() {\n  const { t } = useTranslation();\n\n  const MTR_LINES = [\n  {\n    color: \"bg-[#0BA3DA]\",\n    textColor: \"text-[#0BA3DA]\",\n    name: t('amenities.east_rail.name'),\n    badge: t('amenities.east_rail.badge'),\n    badgeColor: \"bg-[#0BA3DA]/20 text-[#0BA3DA]\",\n    points: [\n      t('amenities.east_rail.p1'),\n      t('amenities.east_rail.p2'),\n    ],\n  },\n  {\n    color: \"bg-[#E2007A]\",\n    textColor: \"text-[#E2007A]\",\n    name: t('amenities.north_link.name'),\n    badge: t('amenities.north_link.badge'),\n    badgeColor: \"bg-[#E2007A]/15 text-[#E2007A]\",\n    points: [\n      t('amenities.north_link.p1'),\n      t('amenities.north_link.p2'),\n      t('amenities.north_link.p3'),\n    ],\n  },\n  {\n    color: \"bg-[#F5A623]\",\n    textColor: \"text-[#F5A623]\",\n    name: t('amenities.ne_new_territories.name'),\n    badge: t('amenities.ne_new_territories.badge'),\n    badgeColor: \"bg-[#F5A623]/15 text-[#F5A623]\",\n    points: [\n      t('amenities.ne_new_territories.p1'),\n    ],\n  },\n];"
);


code = code.replace(
  "三線鐵路瞬動優勢",
  "{t('amenities.title')}"
);

code = code.replace(
  /title="點擊放大查看，可滾輪縮放"/g,
  "title={t('amenities.zoom_title')}"
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

// Remove original
code = code.replace(/const MTR_LINES = \[[\s\S]*?\];/m, "");

fs.writeFileSync('client/src/components/AmenitiesSection.tsx', code);
console.log('done amenities');
