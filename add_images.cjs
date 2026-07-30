const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Add new imports
const newImports = `
import tour_banos_morales from "../imports/optimizadas/Tour y trekking/Baños morales .webp";
import tour_trekking_38 from "../imports/optimizadas/Tour y trekking/Tours y treking38.webp";
`;

const lastImportIndex = content.lastIndexOf("import ");
const endOfLastImport = content.indexOf(";", lastImportIndex) + 1;
content = content.slice(0, endOfLastImport) + newImports + content.slice(endOfLastImport);

// 2. Update EXPEDITIONS array
const oldExpeditions = `const EXPEDITIONS = [
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
];`;

const newExpeditions = `const EXPEDITIONS = [
  {
    title: "Trekking Laguna Negra",
    desc: "Expedición guiada de aproximadamente 6 horas de duración. Recorreremos senderos ocultos hasta llegar a una de las lagunas más imponentes de la zona central.",
    difficulty: "Dificultad Media",
    duration: "6 Horas",
    images: [tour_laguna_negra, tour_trekking_38]
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
    images: [tour_termas_colina, w_tourytrekking_10, tour_banos_morales]
  }
];`;

if (content.includes(oldExpeditions)) {
  content = content.replace(oldExpeditions, newExpeditions);
} else {
  console.log("Could not find oldExpeditions");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
