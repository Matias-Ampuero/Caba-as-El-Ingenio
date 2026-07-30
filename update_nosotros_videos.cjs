const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Insert video imports near nos1
const videoImports = `import video1 from "../imports/optimizadas/Videos/Toma dron 1 .mp4";\nimport video2 from "../imports/optimizadas/Videos/Toma dron 2 .mp4";\n`;
content = content.replace(/(import nos1 from)/, videoImports + '$1');

// 2. Change the array and map for the Nosotros slider
const oldSliderCode = `                {[
                  nos1,
                  nos2,
                  nos3,
                  nos4,
                  nos5,
                  nos6,
                  nos7,
                  nos8,
                  nos9,
                  nos10,
                  nos11,
                  nos12,
                  nos13,
                  nos14,
                  nos15,
                  nos16,
                  nos17,
                  nos18,
                  nos19,
                ].map((img, idx, array) => (
                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative group"
                  >
                    <img
                      src={img}
                      alt={\`Nosotros \${idx + 1}\`}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                      onClick={() => setLightbox({ images: array as string[], index: idx })}
                    />
                  </div>
                ))}`;

const newSliderCode = `                {[
                  { type: 'video', src: video1 },
                  { type: 'video', src: video2 },
                  { type: 'image', src: nos1 },
                  { type: 'image', src: nos2 },
                  { type: 'image', src: nos3 },
                  { type: 'image', src: nos4 },
                  { type: 'image', src: nos5 },
                  { type: 'image', src: nos6 },
                  { type: 'image', src: nos7 },
                  { type: 'image', src: nos8 },
                  { type: 'image', src: nos9 },
                  { type: 'image', src: nos10 },
                  { type: 'image', src: nos11 },
                  { type: 'image', src: nos12 },
                  { type: 'image', src: nos13 },
                  { type: 'image', src: nos14 },
                  { type: 'image', src: nos15 },
                  { type: 'image', src: nos16 },
                  { type: 'image', src: nos17 },
                  { type: 'image', src: nos18 },
                  { type: 'image', src: nos19 },
                ].map((item, idx, array) => {
                  const imagesOnly = array.filter(i => i.type === 'image').map(i => i.src);
                  
                  return (
                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative group"
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={\`Nosotros \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        onClick={() => {
                          const imgIndex = imagesOnly.indexOf(item.src);
                          setLightbox({ images: imagesOnly as string[], index: imgIndex })
                        }}
                      />
                    )}
                  </div>
                )})} `;

if (content.includes(oldSliderCode)) {
  content = content.replace(oldSliderCode, newSliderCode);
  fs.writeFileSync('src/app/App.tsx', content);
  console.log("Videos updated successfully!");
} else {
  console.log("Could not find the slider code to replace!");
}
