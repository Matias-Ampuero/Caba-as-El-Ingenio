import fs from 'fs';

let content = fs.readFileSync('src/app/App.tsx', 'utf-8');

// 1. Insert HoverIndicator definition after UI_CLASSES
const uiClassesRegex = /(const UI_CLASSES = {[\s\S]*?};\n)/;
const hoverIndicatorComponent = `
  const HoverIndicator = () => (
    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
      {/* Desktop: Explorar overlay */}
      <div className="hidden lg:flex absolute inset-0 bg-[#1C1F1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
        <span className={\`\${UI_CLASSES.buttonOutline} bg-[#1C1F1A]/80 backdrop-blur-sm pointer-events-none\`}>
          Explorar
        </span>
      </div>
      {/* Mobile: Pulsating magnifying glass icon */}
      <div className="flex lg:hidden absolute items-center justify-center">
        <div className="absolute w-14 h-14 bg-[#C8A96E]/40 rounded-full animate-ping"></div>
        <div className="relative w-12 h-12 bg-[#C8A96E]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1C1F1A] shadow-xl">
          <Search className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
`;

if (!content.includes('HoverIndicator = () =>')) {
  content = content.replace(uiClassesRegex, `$1${hoverIndicatorComponent}`);
}

// 2. Insert <HoverIndicator /> into Refugios modal slider
const refugioSliderRegex = /(className={\`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105 cursor-zoom-in \$\{selectedRefugio.name === 'Cabaña El Ingenio' \? 'object-contain' : 'object-cover'\}\`}\n\s*onClick=\{\(\) => setLightbox\(\{ images: array as string\[\], index: idx \}\)\}\n\s*\/>)/g;
if (!content.includes('HoverIndicator />', content.indexOf('selectedRefugio.name === \'Cabaña El Ingenio\''))) {
  content = content.replace(refugioSliderRegex, `$1\n                      <HoverIndicator />`);
}

// 3. Insert <HoverIndicator /> into Nosotros grid
const nosotrosRegex = /(className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"\n\s*\/>)/g;
if (content.match(nosotrosRegex)) {
    // There are multiple matches of this class (Nosotros, Aventuras, Souvenirs)
    // We can just add <HoverIndicator /> after all of them!
    content = content.replace(nosotrosRegex, `$1\n                  <HoverIndicator />`);
}

// 4. Refugios main cards
const refugiosMainRegex = /(<div className="absolute bottom-6 left-6 right-6">[\s\S]*?<\/div>)/g;
// Replace only the first 2 occurrences (since there are 2 refugios in the array usually? No, it's a map)
// Wait, replacing `refugiosMainRegex` will add it to the bottom of the card.
content = content.replace(/(<div className="absolute inset-0 bg-gradient-to-t from-\[#1C1F1A\] via-transparent to-transparent opacity-80" \/>\n\s*<div className="absolute bottom-6 left-6 right-6">[\s\S]*?<\/div>)/g, `$1\n                  <HoverIndicator />`);


// 5. Servicios grid
const serviciosRegex = /(<div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">[\s\S]*?<\/div>)/g;
content = content.replace(serviciosRegex, `$1\n                  <HoverIndicator />`);


fs.writeFileSync('src/app/App.tsx', content);
console.log('HoverIndicator inserted successfully.');
