const fs = require('fs');

let content = fs.readFileSync('/Users/pang/vscode/aaa/cloudview-manus/client/src/i18n/index.ts', 'utf8');

content = content.replace(/CLOUDVIEW"s/g, "CLOUDVIEW's");
content = content.replace(/Shenzhen"s/g, "Shenzhen's");
content = content.replace(/artist"s/g, "artist's");
content = content.replace(/children"s/g, "children's");
content = content.replace(/"Cloud Retreat"/g, "'Cloud Retreat'");
content = content.replace(/"三合一"/g, "'三合一'");
content = content.replace(/"云端生活"/g, "'云端生活'");

fs.writeFileSync('/Users/pang/vscode/aaa/cloudview-manus/client/src/i18n/index.ts', content);
console.log("Quotes replaced successfully.");
