const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldSlideDiv = `                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative group"
                  >`;

const newSlideDiv = `                  <div
                    key={idx}
                    className="outline-none aspect-[4/3] overflow-hidden relative group bg-black/40 flex items-center justify-center"
                  >`;

if (content.includes(oldSlideDiv)) {
  content = content.replace(oldSlideDiv, newSlideDiv);
  fs.writeFileSync('src/app/App.tsx', content);
  console.log("Added background to slide container!");
} else {
  console.log("Could not find slide container to replace.");
}
