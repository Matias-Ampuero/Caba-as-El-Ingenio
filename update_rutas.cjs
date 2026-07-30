const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Trekking Laguna Negra
const oldLaguna = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Media</span>
                    <span>6 Horas</span>
                  </div>
                </div>`;

const newLaguna = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Media</span>
                    <span>6 Horas</span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_laguna_negra} alt="Laguna Negra" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>`;

// 2. Glaciares y Valles
const oldGlaciares = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Alta</span>
                    <span>Día Completo</span>
                  </div>
                </div>`;

const newGlaciares = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Alta</span>
                    <span>Día Completo</span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_embalse_yeso} alt="Embalse El Yeso" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_nieves_negras} alt="Glaciar Nieves Negras" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_laguna_rubilla} alt="Laguna Rubilla" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_sector_morado} alt="Sector El Morado" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={w_tourytrekking_75} alt="Valle La Engorda" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>`;

// 3. Termas y Atractivos
const oldTermas = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Baja</span>
                    <span>Medio Día / Día Completo</span>
                  </div>
                </div>`;

const newTermas = `                  <div className="flex gap-6 text-xs font-['DM_Sans',sans-serif] uppercase tracking-[0.1em] text-[#9A9690]">
                    <span>Dificultad Baja</span>
                    <span>Medio Día / Día Completo</span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={tour_termas_colina} alt="Termas Valle de Colina" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-[#C8A96E]/20">
                      <img src={w_tourytrekking_10} alt="Cascada Velo de la Novia" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>`;

if (content.includes(oldLaguna)) {
  content = content.replace(oldLaguna, newLaguna);
} else {
  console.log("Could not find oldLaguna");
}

if (content.includes(oldGlaciares)) {
  content = content.replace(oldGlaciares, newGlaciares);
} else {
  console.log("Could not find oldGlaciares");
}

if (content.includes(oldTermas)) {
  content = content.replace(oldTermas, newTermas);
} else {
  console.log("Could not find oldTermas");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
