const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. SERVICES main cards
const oldMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />`;

const newMainCard = `                <div className={\`relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 \${item.title === 'PISCINA' ? 'bg-black/40 flex items-center justify-center' : ''}\`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className={\`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 \${item.title === 'PISCINA' ? 'object-contain' : 'object-cover'}\`}
                  />`;

// 2. SERVICES modal
const oldModal = `                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedService.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative"
                    >
                      <img
                        src={img}
                        alt={\`Servicio \${idx + 1}\`}
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
                  {selectedService.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className={\`outline-none aspect-[4/3] overflow-hidden relative \${selectedService.title === 'PISCINA' ? 'bg-black/40 flex items-center justify-center' : ''}\`}
                    >
                      <img
                        src={img}
                        alt={\`Servicio \${idx + 1}\`}
                        className={\`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105 cursor-zoom-in \${selectedService.title === 'PISCINA' ? 'object-contain' : 'object-cover'}\`}
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
