import fs from 'fs';
let content = fs.readFileSync('src/app/App.tsx', 'utf-8');

content = content.replace(
  /<img\s+src=\{item\.src\}\s+alt=\{`Nosotros \$\{idx \+ 1\}`\}\s+\/>/,
  `<img
                          src={item.src}
                          alt={\`Nosotros \${idx + 1}\`}
                          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                          onClick={() => {
                            const allSrcs = array.map(i => i.src);
                            setLightbox({ images: allSrcs as string[], index: idx })
                          }}
                        />`
);

fs.writeFileSync('src/app/App.tsx', content);
