const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Add EXPEDITIONS array and state
const hookInsert = `  const [activeExpedition, setActiveExpedition] = useState(0);`;

if (!content.includes('const [activeExpedition')) {
  // Find where to insert state
  const stateSection = `  const [selectedMerch, setSelectedMerch] = useState<
    (typeof MERCH_ITEMS)[0] | null
  >(null);`;
  content = content.replace(stateSection, `${stateSection}\n${hookInsert}`);
}

const expeditionsArray = `
const EXPEDITIONS = [
  {
    title: "Trekking Laguna Negra",
    desc: "Expedición guiada de aproximadamente 6 horas de duración. Recorreremos senderos ocultos hasta llegar a una de las lagunas más imponentes de la zona central.",
    difficulty: "Dificultad Media",
    duration: "6 Horas",
    images: [tour_laguna_negra]
  },
  {
    title: "Glaciares y Valles",
    desc: "Visitaremos el sector de Morados, el Valle La Engorda, el histórico Refugio Plantat, la Laguna Rubilla y culminaremos con la vista del majestuoso Glaciar Nieves Negras.",
    difficulty: "Dificultad Alta",
    duration: "Día Completo",
    images: [tour_embalse_yeso, tour_nieves_negras, tour_laguna_rubilla, tour_sector_morado, w_tourytrekking_75]
  },
  {
    title: "Termas y Atractivos",
    desc: "Un recorrido icónico por la cordillera. Pasaremos por el imponente Embalse El Yeso, la Cascada Velo de la Novia, Baños Morales y cerraremos con un merecido relajo en las Termas Valle de Colina.",
    difficulty: "Dificultad Baja",
    duration: "Todo el Día",
    images: [tour_termas_colina, w_tourytrekking_10]
  }
];
`;

if (!content.includes('const EXPEDITIONS = [')) {
  const marker = `export default function App() {`;
  content = content.replace(marker, `${expeditionsArray}\n${marker}`);
}

// 2. Replace the modal body
const oldModalBodyRegex = /<div className="space-y-10">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*\)\}/;

const newModalBody = `<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Tabs / Sidebar */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#C8A96E]/20 pb-8 lg:pb-0 lg:pr-8">
                  {EXPEDITIONS.map((exp, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveExpedition(idx)}
                      className={\`text-left px-6 py-4 border transition-all text-sm uppercase tracking-widest \${
                        activeExpedition === idx
                          ? "border-[#C8A96E] text-[#C8A96E] bg-[#C8A96E]/5"
                          : "border-[#9A9690]/30 text-[#9A9690] hover:border-[#C8A96E]/50"
                      }\`}
                    >
                      {exp.title}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl font-['Cormorant_Garamond',serif] text-[#F0EDE6] mb-4">
                      {EXPEDITIONS[activeExpedition].title}
                    </h3>
                    <p className="text-sm text-[#9A9690] leading-relaxed mb-6">
                      {EXPEDITIONS[activeExpedition].desc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#C8A96E]">
                      <span className="bg-[#C8A96E]/10 px-3 py-1.5 border border-[#C8A96E]/20">{EXPEDITIONS[activeExpedition].difficulty}</span>
                      <span className="bg-[#C8A96E]/10 px-3 py-1.5 border border-[#C8A96E]/20">{EXPEDITIONS[activeExpedition].duration}</span>
                    </div>
                  </div>

                  {/* Images Slider */}
                  <div className="mt-auto">
                    {EXPEDITIONS[activeExpedition].images.length > 1 ? (
                      <Slider {...sliderSettings} className="w-full aspect-video slider-container">
                        {EXPEDITIONS[activeExpedition].images.map((img, idx, array) => (
                          <div key={idx} className="outline-none aspect-video overflow-hidden relative">
                            <img
                              src={img}
                              alt={\`Expedición \${idx + 1}\`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                              onClick={() => setLightbox({ images: array, index: idx })}
                            />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="outline-none w-full aspect-video overflow-hidden relative">
                        <img
                          src={EXPEDITIONS[activeExpedition].images[0]}
                          alt="Expedición"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                          onClick={() => setLightbox({ images: [EXPEDITIONS[activeExpedition].images[0]], index: 0 })}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}`;

content = content.replace(oldModalBodyRegex, newModalBody);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
