const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));

let hl = data['client/src/components/HighlightsSection.tsx'];

// insert useTranslation hook
if (!hl.includes('useTranslation')) {
    hl = 'import { useTranslation } from "react-i18next";\n' + hl;
}
hl = hl.replace(/(export default function HighlightsSection\([^)]*\)\s*\{)/, "$1\n  const { t } = useTranslation();\n");

hl = hl.replace(/const highlights = \[[\s\S]*?\];/, `const getHighlights = (t: any) => [
  { icon: MapPin, title: t('highlights.core.title'), desc: t('highlights.core.desc') },
  { icon: Train, title: t('highlights.transport.title'), desc: t('highlights.transport.desc') },
  { icon: Leaf, title: t('highlights.golf.title'), desc: t('highlights.golf.desc') },
  { icon: Layout, title: t('highlights.layout.title'), desc: t('highlights.layout.desc') },
  { icon: Coffee, title: t('highlights.clubhouse.title'), desc: t('highlights.clubhouse.desc') },
  { icon: ShoppingBag, title: t('highlights.lifestyle.title'), desc: t('highlights.lifestyle.desc') },
  { icon: GraduationCap, title: t('highlights.education.title'), desc: t('highlights.education.desc') },
  { icon: TrendingUp, title: t('highlights.investment.title'), desc: t('highlights.investment.desc') }
];`);

hl = hl.replace('highlights.map', 'getHighlights(t).map');
hl = hl.replace('highlights[', 'getHighlights(t)['); // for activeImage access

hl = hl
    .replace('項目亮點', "{t('highlights.title')}")
    .replace('雲向集多重優勢於一身，為您呈獻香港北部都會區最矚目的居住選擇。', "{t('highlights.subtitle')}")
    .replace('140公頃<br />翠綠球場全景', "<span dangerouslySetInnerHTML={{ __html: t('highlights.golf_banner_title') }} />")
    .replace('粉嶺香港哥爾夫球會擁有逾百年歷史，是香港最具代表性的私人球會。', "{t('highlights.golf_banner_desc')}")
    .replace('雲向單位前臨球場，讓您每日醒來即享稀有綠意景觀。', "{t('highlights.golf_banner_desc2')}")
    .replace('>140公頃高球場翠綠全景<', ">{t('highlights.golf_tag_1')}<")
    .replace('>三合一露台 · 寬闊3米<', ">{t('highlights.golf_tag_2')}<")
    .replace('>落地玻璃幕牆 · 採光最大化<', ">{t('highlights.golf_tag_3')}<");

fs.writeFileSync('client/src/components/HighlightsSection.tsx', hl);
console.log('done hl');
