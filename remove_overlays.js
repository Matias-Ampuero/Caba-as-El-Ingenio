import fs from 'fs';

let content = fs.readFileSync('src/app/App.tsx', 'utf-8');

// The overlay block to remove:
// <div className="absolute inset-0 bg-[#1C1F1A]/40 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
//   <span className={`${UI_CLASSES.buttonOutline} bg-[#1C1F1A]/80 backdrop-blur-sm pointer-events-none`}>
//     Explorar
//   </span>
// </div>

const regex = /<div className="absolute inset-0 bg-\[#1C1F1A\]\/40 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">\s*<span className=\{`\$\{UI_CLASSES\.buttonOutline\} bg-\[#1C1F1A\]\/80 backdrop-blur-sm pointer-events-none`\}>\s*Explorar\s*<\/span>\s*<\/div>/g;

content = content.replace(regex, '');

fs.writeFileSync('src/app/App.tsx', content);
console.log('Overlays removed.');
