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
let arrays = {
  cabañaelingenio: [],
  domomarmolejo: [],
  domoestrellado: [],
  fotosdeservicioycomida: [],
  tourytrekking: []
};

Object.keys(dirs).forEach(key => {
  const dirPath = path.join('src/imports/optimizadas', dirs[key]);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => exts.includes(path.extname(f).toLowerCase()) && !f.startsWith('.'));
  
  files.forEach((f, idx) => {
    const varName = `w_${key}_${idx}`;
    imports.push(`import ${varName} from "../imports/optimizadas/${dirs[key]}/${f}";`);
    arrays[key].push(`      ${varName},`);
  });
});

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Replace Imports
// The imports block starts around line 19. 
// We will replace all lines that start with `import w_...`
// Since we have other w_ imports? No, they all match `import w_[a-zñ]+_[0-9]+`
content = content.replace(/^import w_[a-zñ]+_[0-9]+ from "\.\.\/imports\/optimizadas\/[^"]+";\n/gm, '');

// Now we need to insert the new imports where they belong.
// Let's insert them right after `import "slick-carousel/slick/slick-theme.css";\n`
content = content.replace(/(import "slick-carousel\/slick\/slick-theme\.css";\n)/, `$1${imports.join('\n')}\n`);

// 2. Replace array contents
function replaceArrayElements(content, prefix, newItems) {
  // We find all occurrences of `w_prefix_number,` and remove them.
  const regex = new RegExp(`^\\s*${prefix}_[0-9]+,?\\n`, 'gm');
  content = content.replace(regex, '');
  
  // Then we need to insert the new elements. 
  // We'll find the first empty space inside the brackets where the old ones were, 
  // but it's easier to find the block for each.
  return content;
}

// Since removing and re-inserting is tricky because the arrays might become empty and we lose the anchor,
// let's do a block replacement based on the surrounding anchors.
// Cabaña el ingenio is in `id: "ingenio"` -> `images: [...]`
content = content.replace(
  /(id:\s*"ingenio"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${arrays.cabañaelingenio.join('\n')}$3`
);

// Domo Marmolejo
content = content.replace(
  /(id:\s*"marmolejo"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${arrays.domomarmolejo.join('\n')}$3`
);

// Domo estrellado
content = content.replace(
  /(id:\s*"estrellado"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${arrays.domoestrellado.join('\n')}$3`
);

// Tour y trekking is in `id: "tours"`? Let's check `App.tsx`... wait, let's just replace all `w_tourytrekking_X` globally inside arrays.
// Actually, I can just replace the block `w_tourytrekking_[0-9]+,` with the new ones, taking care to only inject it once.
let firstTour = true;
content = content.replace(/(\s*w_tourytrekking_[0-9]+,?)+/g, (match) => {
  if (firstTour) {
    firstTour = false;
    return '\n' + arrays.tourytrekking.join('\n') + '\n';
  }
  return ''; // remove any subsequent disjointed blocks
});

// Fotos de servicio y comida is split. Let's just put them all in TINAJAS CALIENTES and clear the others, or put first 7 in Tinajas, next 7 in Piscina, etc.
let fotos = arrays.fotosdeservicioycomida;
let f1 = fotos.slice(0, 7);
let f2 = fotos.slice(7, 14);
let f3 = fotos.slice(14);

content = content.replace(
  /(title:\s*"TINAJAS CALIENTES"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${f1.join('\n')}$3`
);
content = content.replace(
  /(title:\s*"PISCINA"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${f2.join('\n')}$3`
);
content = content.replace(
  /(title:\s*"DESAYUNO CAMPESTRE"[\s\S]*?images:\s*\[\n)([\s\S]*?)(\n\s*\])/, 
  `$1${f3.join('\n')}$3`
);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Updated successfully!");
