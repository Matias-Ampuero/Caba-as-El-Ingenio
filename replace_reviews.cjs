const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Add import
if (!content.includes('import Reviews')) {
    content = content.replace("import React, { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';\nimport Reviews from './Reviews';");
    if (!content.includes('import Reviews')) {
        // Fallback import
        content = "import Reviews from './Reviews';\n" + content;
    }
}

// 2. Replace manual grid with <Reviews />
const startTag = '<div className="grid gap-8 md:grid-cols-3">';
const endTagMarker = '        </section>';
const reviewsSectionStart = content.indexOf(startTag);
if (reviewsSectionStart !== -1) {
    const reviewsSectionEnd = content.indexOf(endTagMarker, reviewsSectionStart);
    if (reviewsSectionEnd !== -1) {
        // Just extract the part between startTag and '          </div>\n        </section>'
        // Actually, let's use a regex that matches the div grid.
    }
}

// Since the grid is quite large, regex might fail or be complex.
// Let's use a robust replace
const searchString = `            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Javiera Morales",
                  type: "Huésped",
                  review: "Nos encantó el lugar, la atención y amabilidad. La tinaja estuvo exquisita y está muy bien ubicado. 10 de 10.",
                },
                {
                  name: "Paulina Melo",
                  type: "Huésped",
                  review: "Muy acogedora, nos brindaron calefacción y la tinaja de uso ilimitado. Atendida por su dueño y familia quienes fueron muy atentos con nosotras.",
                },
                {
                  name: "Catherine Moran",
                  type: "Huésped",
                  review: "Excelente atención y un entorno maravilloso.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col bg-black/20 backdrop-blur-sm border border-[#C8A96E]/20 p-10 hover:border-[#C8A96E]/50 transition-colors">
                  <div className="flex gap-1 mb-6 text-[#C8A96E]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.svg.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#9A9690] leading-relaxed text-sm mb-8 italic">
                    "{item.review}"
                  </p>
                  <div className="mt-auto border-t border-[#C8A96E]/20 pt-6">
                    <h4 className="font-['DM_Sans',sans-serif] text-xs uppercase tracking-[0.1em] text-[#F0EDE6]">
                      {item.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#C8A96E] mt-2">
                      {item.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>`;

content = content.replace(searchString, '            <Reviews />');
fs.writeFileSync('src/app/App.tsx', content);
console.log("App.tsx updated");
