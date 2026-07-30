const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Fix Tours section
const toursVars = [];
for(let i = 0; i <= 75; i++) {
  toursVars.push(`w_tourytrekking_${i}`);
}
const toursArrayStr = '[\n' + toursVars.map(v => '                ' + v + ',').join('\n') + '\n              ]';

content = content.replace(
  /\{\[\s*\]\.map\(\(img, idx, array\) => \(/,
  `${toursArrayStr}.map((img, idx, array) => (`
);

// 2. Fix Nosotros section
const oldNosotros = `                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative"
                  >
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
                    />
                    <img
                      src={img}
                      alt={\`Nosotros \${idx + 1}\`}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 hover:scale-105 cursor-zoom-in relative z-10"
                      onClick={() => setLightbox({ images: array as string[], index: idx })}
                    />
                  </div>`;

const newNosotros = `                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative group"
                  >
                    <img
                      src={img}
                      alt={\`Nosotros \${idx + 1}\`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                      onClick={() => setLightbox({ images: array as string[], index: idx })}
                    />
                  </div>`;

content = content.replace(oldNosotros, newNosotros);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Fixed App.tsx!");
