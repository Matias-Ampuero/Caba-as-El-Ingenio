const fs = require('fs');
const path = require('path');

const dirs = {
  cabana: 'src/imports/optimizadas/Cabaña el ingenio',
  domo: 'src/imports/optimizadas/Domo Marmolejo',
  fotos: 'src/imports/optimizadas/Fotos de servicio y comida',
  refugio: 'src/imports/optimizadas/Refugio del maipo',
  tour: 'src/imports/optimizadas/Tour y trekking'
};

const exts = ['.webp', '.png', '.jpg', '.jpeg'];

let imports = [];
let arrays = {
  cabana: [],
  domo: [],
  fotos: [],
  refugio: [],
  tour: []
};

Object.keys(dirs).forEach(key => {
  const dirPath = dirs[key];
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => exts.includes(path.extname(f).toLowerCase()) && !f.startsWith('.'));
  
  files.forEach((f, idx) => {
    const varName = `w_${key}_${idx}`;
    imports.push(`import ${varName} from "../imports/optimizadas/${path.basename(dirPath)}/${f}";`);
    arrays[key].push(`      ${varName},`);
  });
});

console.log("=== IMPORTS ===");
console.log(imports.join('\n'));
console.log("\n=== ARRAYS ===");
Object.keys(arrays).forEach(key => {
  console.log(`Array: ${key}`);
  console.log(arrays[key].join('\n'));
});
