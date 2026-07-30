const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. SERVICES main cards
const oldMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 bg-[#1C1F1A]">
                  {item.title === 'PISCINA' ? (
                    <>
                      <img
                        src={item.images[0]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover blur-md opacity-40 scale-110"
                      />
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}`;

const newMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />`;

// 2. SERVICES modal
const oldModal = `                    <div
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
                    </div>`;

const newModal = `                    <div
                      key={idx}
                      className="outline-none aspect-[4/3] overflow-hidden relative"
                    >
                      <img
                        src={img}
                        alt={\`Servicio \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                        onClick={() => setLightbox({ images: array as string[], index: idx })}
                      />
                    </div>`;

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
