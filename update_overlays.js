import fs from 'fs';

let content = fs.readFileSync('src/app/App.tsx', 'utf-8');

const overlayHTML = `
                  <div className="absolute inset-0 bg-[#1C1F1A]/40 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                    <span className={\`\${UI_CLASSES.buttonOutline} bg-[#1C1F1A]/80 backdrop-blur-sm pointer-events-none\`}>
                      Explorar
                    </span>
                  </div>`;

// 1. Lightbox (Fix small image issue)
content = content.replace(
  /className="relative z-10 max-w-\[90vw\] max-h-\[90vh\] object-contain drop-shadow-2xl pointer-events-none"/,
  'className="relative z-10 w-full h-full max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl pointer-events-none"'
);
content = content.replace(
  /className="relative z-10 max-w-\[90vw\] max-h-\[90vh\] object-contain drop-shadow-2xl"/,
  'className="relative z-10 w-full h-full max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl"'
);

// 2. Nosotros Images
content = content.replace(
  /(<img[^>]*alt={`Nosotros \${idx \+ 1}`}[^>]*\/>)(\s*)<\/div>/g,
  `$1$2${overlayHTML}$2</div>`
);
content = content.replace(
  /(<video[^>]*onClick=\{[^}]*\}[^>]*\/>)(\s*)<\/div>/g,
  `$1$2${overlayHTML}$2</div>`
);

// 3. Refugios
content = content.replace(
  /<div className="absolute inset-0 bg-\[#1C1F1A\]\/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">[\s\S]*?<\/div>/,
  overlayHTML.trim()
);

// 4. Servicios
content = content.replace(
  /(<img[^>]*alt=\{item\.title\}[^>]*\/>)(\s*)<\/div>/,
  `$1$2${overlayHTML}$2</div>`
);

// 5. Expeditions (Aventuras)
content = content.replace(
  /(<img[^>]*alt={`Expedición \${idx \+ 1}`}[^>]*\/>)(\s*)<\/div>/,
  `$1$2${overlayHTML}$2</div>`
);

// 6. Souvenirs
content = content.replace(
  /(<img[^>]*alt=\{item\.name\}[^>]*\/>)(\s*)<\/div>/,
  `$1$2${overlayHTML}$2</div>`
);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Updated overlays and lightbox sizes!");
