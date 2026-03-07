const fs = require('fs');
const files = JSON.parse(fs.readFileSync('all_files.json', 'utf8'));

// A helper to just update file
fs.writeFileSync('highlights.tsx', files['client/src/components/HighlightsSection.tsx']);
fs.writeFileSync('architecture.tsx', files['client/src/components/ArchitectureSection.tsx']);
fs.writeFileSync('location.tsx', files['client/src/components/LocationSection.tsx']);
fs.writeFileSync('amenities.tsx', files['client/src/components/AmenitiesSection.tsx']);
fs.writeFileSync('sales.tsx', files['client/src/components/SalesSection.tsx']);
fs.writeFileSync('cta.tsx', files['client/src/components/FloatingCTA.tsx']);
fs.writeFileSync('i18n.ts', files['client/src/i18n/index.ts']);
console.log('done')
