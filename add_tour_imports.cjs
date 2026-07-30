const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const newImports = `
import tour_laguna_negra from "../imports/optimizadas/Tour y trekking/Laguna negra .jpg";
import tour_embalse_yeso from "../imports/optimizadas/Tour y trekking/Embalse el yeso.jpg";
import tour_nieves_negras from "../imports/optimizadas/Tour y trekking/Glacias nieves negras .jpg";
import tour_laguna_rubilla from "../imports/optimizadas/Tour y trekking/laguna rubilla .jpg";
import tour_sector_morado from "../imports/optimizadas/Tour y trekking/sector el morado .jpeg";
import tour_termas_colina from "../imports/optimizadas/Tour y trekking/Termas valle de colina .jpg";
`;

// Add imports after the last import
const lastImportIndex = content.lastIndexOf("import ");
const endOfLastImport = content.indexOf(";", lastImportIndex) + 1;
content = content.slice(0, endOfLastImport) + newImports + content.slice(endOfLastImport);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
