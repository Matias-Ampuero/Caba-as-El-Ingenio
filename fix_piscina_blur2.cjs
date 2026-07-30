const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 2. SERVICES modal
const oldModal = `                <Slider
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

const newModal = `                <Slider
                  {...sliderSettings}
                  className="w-full aspect-[4/3] slider-container"
                >
                  {selectedService.images.map((img, idx, array) => (
                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative bg-[#1C1F1A]"
                    >
                      {selectedService.title === 'PISCINA' ? (
                        <>
                          <img
                            src={img}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-md opacity-40 scale-110"
                          />
                          <img
                            src={img}
                            alt={\`Servicio \${idx + 1}\`}
                            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                            onClick={() => setLightbox({ images: array as string[], index: idx })}
                          />
                        </>
                      ) : (
                        <img
                          src={img}
                          alt={\`Servicio \${idx + 1}\`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                          onClick={() => setLightbox({ images: array as string[], index: idx })}
                        />
                      )}
                    </div>
                  ))}
                </Slider>`;

if (content.includes(oldModal)) {
  content = content.replace(oldModal, newModal);
} else {
  console.log("Could not find oldModal");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
