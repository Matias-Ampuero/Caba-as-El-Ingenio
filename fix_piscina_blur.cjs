const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. SERVICES main cards
const oldMainCard = `                <div className={\`relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 \${item.title === 'PISCINA' ? 'bg-black/40 flex items-center justify-center' : ''}\`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className={\`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 \${item.title === 'PISCINA' ? 'object-contain' : 'object-cover'}\`}
                  />`;

const newMainCard = `                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#C8A96E]/20 bg-[#1C1F1A]">
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

if (content.includes(oldMainCard)) {
  content = content.replace(oldMainCard, newMainCard);
} else {
  console.log("Could not find oldMainCard");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
