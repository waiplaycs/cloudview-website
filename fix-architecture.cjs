const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));
let code = data['client/src/components/ArchitectureSection.tsx'];

// Add useTranslation
code = code.replace(
  "export default function ArchitectureSection() {",
  "import { useTranslation } from \"react-i18next\";\n\nexport default function ArchitectureSection() {\n  const { t } = useTranslation();"
);

code = code.replace(
  "世界級景觀設計大師",
  "{t('architecture.title')}"
);

code = code.replace(
  "Enzo Enea 是享譽國際的瑞士園林建築大師及 Enea Landscape Architecture 創辦人，被譽為將古樹保育、藝術收藏與頂級建築完美結合的先驅。其設計理念提倡「室外即室內」(Outside In)，以空間平衡與古樹保育聞名，合作對象涵蓋 Zaha Hadid、安藤忠雄等普利茲克建築獎巨擘。",
  "{t('architecture.desc1')}"
);

code = code.replace(
  "他在國際間屢獲殿堂級殊榮：1998年成為首位榮獲英國切爾西花展「最佳展示花園」的瑞士人；其創立的全球唯一「樹木博物館」於2009年獲頒美國建築獎；事務所更榮獲 DGNB 史上首個鉑金與鑽石等級永續認證，並多次囊括 ASLA 專業大獎。",
  "{t('architecture.desc2')}"
);

code = code.replace(
  "獲獎無數的瑞士園林設計師Enzo Enea設計「Eco Garden」，與前臨高爾夫球場的翠綠連綿景觀相連，洋溢不同層次的綠意。園內栽種多種樹木及花卉，並設置特色鳥舍，吸引附近雀鳥到訪，讓人與生物和諧共存，著力打造可持續環境。",
  "{t('architecture.desc3')}"
);

fs.writeFileSync('client/src/components/ArchitectureSection.tsx', code);
console.log('done architecture');
