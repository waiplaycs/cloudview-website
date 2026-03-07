const fs = require('fs');

let file = fs.readFileSync('client/src/components/HighlightsSection.tsx', 'utf8');
file = file.replace(/key={item\.title}/g, "key={i}");
fs.writeFileSync('client/src/components/HighlightsSection.tsx', file);

let sales = fs.readFileSync('client/src/components/SalesSection.tsx', 'utf8');
sales = sales.replace(/key={unit\.type}/g, "key={i}");
sales = sales.replace(/key={doc\.title}/g, "key={i}");
fs.writeFileSync('client/src/components/SalesSection.tsx', sales);

let amenities = fs.readFileSync('client/src/components/AmenitiesSection.tsx', 'utf8');
amenities = amenities.replace(/key={line\.name}/g, "key={i}");
fs.writeFileSync('client/src/components/AmenitiesSection.tsx', amenities);

let hero = fs.readFileSync('client/src/components/HeroSection.tsx', 'utf8');
hero = hero.replace(/key={stat\.label}/g, "key={i}");
fs.writeFileSync('client/src/components/HeroSection.tsx', hero);
console.log("Fixed map keys.");
