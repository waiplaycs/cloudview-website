const fs = require('fs');

const data = fs.readFileSync('/Users/pang/vscode/aaa/cloudview-manus/client/src/i18n/index.ts', 'utf8');

// Replace standard double quotes containing internal double quotes
let fixed = data.replace(/CLOUDVIEW"s/g, "CLOUDVIEW's")
                .replace(/artist"s/g, "artist's")
                .replace(/Shenzhen"s/g, "Shenzhen's")
                .replace(/children"s/g, "children's")
                .replace(/"Cloud Retreat"/g, "'Cloud Retreat'");

fs.writeFileSync('/Users/pang/vscode/aaa/cloudview-manus/client/src/i18n/index.ts', fixed);
console.log("Fixed!");
