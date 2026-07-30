const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Revert main cards and use object-contain + bg
const oldMainCard = `                <div className="relative aspect-[3/4] overflow-hidden border-b border-[#C8A96E]/20">
                  <img
                    src={acc.images[0]}
                    alt={acc.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />`;

const newMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 bg-black/40 flex items-center justify-center">
                  <img
                    src={acc.images[0]}
                    alt={acc.name}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />`;

// 2. Revert modal and use object-contain + bg
const oldModal = `                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[3/4] slider-container"
                >
                  {selectedRefugio.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className="outline-none aspect-[3/4] overflow-hidden relative"
                    >
                      <img
                        src={img}
                        alt={\`Imagen \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                    </div>
                  ))}
                </Slider>`;

const newModal = `                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedRefugio.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative bg-black/40 flex items-center justify-center"
                    >
                      <img
                        src={img}
                        alt={\`Imagen \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                    </div>
                  ))}
                </Slider>`;


if (content.includes(oldMainCard)) {
  content = content.replace(oldMainCard, newMainCard);
} else {
  console.log("Could not find oldMainCard");
}

if (content.includes(oldModal)) {
  content = content.replace(oldModal, newModal);
} else {
  console.log("Could not find oldModal");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
