const fs = require('fs');
let code = fs.readFileSync('src/i18n/index.ts', 'utf8');

code = code.replace(/artist"s/g, "artist's");
code = code.replace(/CLOUDVIEW"s/g, "CLOUDVIEW's");
code = code.replace(/Shenzhen"s/g, "Shenzhen's");
code = code.replace(/children"s/g, "children's");
code = code.replace(/"Cloud Retreat"/g, "'Cloud Retreat'");

fs.writeFileSync('src/i18n/index.ts', code);
