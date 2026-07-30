const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Revert main cards logic to conditional
const currentMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 bg-black/40 flex items-center justify-center">
                  <img
                    src={acc.images[0]}
                    alt={acc.name}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />`;

const newMainCard = `                <div className={\`relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 \${acc.name === 'Cabaña El Ingenio' ? 'bg-black/40 flex items-center justify-center' : ''}\`}>
                  <img
                    src={acc.images[0]}
                    alt={acc.name}
                    className={\`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 \${acc.name === 'Cabaña El Ingenio' ? 'object-contain' : 'object-cover'}\`}
                  />`;

// 2. Revert modal logic to conditional
const currentModal = `                <Slider
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

const newModal = `                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedRefugio.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className={\`outline-none aspect-[4/3] overflow-hidden relative \${selectedRefugio.name === 'Cabaña El Ingenio' ? 'bg-black/40 flex items-center justify-center' : ''}\`}
                    >
                      <img
                        src={img}
                        alt={\`Imagen \${idx + 1}\`}
                        className={\`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105 cursor-zoom-in \${selectedRefugio.name === 'Cabaña El Ingenio' ? 'object-contain' : 'object-cover'}\`}
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                    </div>
                  ))}
                </Slider>`;


if (content.includes(currentMainCard)) {
  content = content.replace(currentMainCard, newMainCard);
} else {
  console.log("Could not find currentMainCard");
}

if (content.includes(currentModal)) {
  content = content.replace(currentModal, newModal);
} else {
  console.log("Could not find currentModal");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
