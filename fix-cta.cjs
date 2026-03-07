const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));
let code = data['client/src/components/FloatingCTA.tsx'];

// Add useTranslation
code = code.replace(
  "import { MessageCircle",
  "import { useTranslation } from \"react-i18next\";\nimport { MessageCircle"
);
code = code.replace(
  "export default function FloatingCTA() {",
  "export default function FloatingCTA() {\n  const { t } = useTranslation();"
);

code = code.replace(
  "'https://wa.me/85212345678?text=你好，我對雲向項目有興趣，我想了解更多', '_blank'",
  "`https://wa.me/85212345678?text=${t('cta.whatsapp_msg')}`, '_blank'"
);

code = code.replace(
  /"WhatsApp 查詢"/g,
  "{t('cta.whatsapp')}"
);

code = code.replace(
  /aria-label="查詢"/g,
  "aria-label={t('cta.aria')}"
);

fs.writeFileSync('client/src/components/FloatingCTA.tsx', code);
console.log('done cta');
