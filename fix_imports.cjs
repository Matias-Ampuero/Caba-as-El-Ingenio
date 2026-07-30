const fs = require('fs');
const path = require('path');

const exts = ['.webp', '.png', '.jpg', '.jpeg'];
const dirs = {
  cabañaelingenio: 'Cabaña el ingenio',
  domomarmolejo: 'Domo Marmolejo',
  domoestrellado: 'Domo estrellado',
  fotosdeservicioycomida: 'Fotos de servicio y comida',
  tourytrekking: 'Tour y trekking'
};

let imports = [];

Object.keys(dirs).forEach(key => {
  const dirPath = path.join('src/imports/optimizadas', dirs[key]);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => exts.includes(path.extname(f).toLowerCase()) && !f.startsWith('.'));
  
  files.forEach((f, idx) => {
    const varName = `w_${key}_${idx}`;
    imports.push(`import ${varName} from "../imports/optimizadas/${dirs[key]}/${f}";`);
  });
});

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// The block to replace is right after slick-theme.css and right before import heroBg.
// We use a regex to match that entire segment.
content = content.replace(
  /(import "slick-carousel\/slick\/slick-theme\.css";\n)[\s\S]*?(import heroBg from "\.\.\/imports\/optimizadas\/Seccion nosotros\/cajon_del_maipo_nevado\.jpg";)/, 
  `$1${imports.join('\n')}\n\n$2`
);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Imports fixed successfully!");
