const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// The new imports we want to insert.
const newImports = `
import botella_1 from "../imports/optimizadas/Merch/Botella_.jpeg";
import botella_2 from "../imports/optimizadas/Merch/Botella.jpeg";

import cuello_1 from "../imports/optimizadas/Merch/Cuellos_.jpeg";

import jockey_1 from "../imports/optimizadas/Merch/Jockey_1.jpeg";
import jockey_2 from "../imports/optimizadas/Merch/jockey_2.jpeg";
import jockey_4 from "../imports/optimizadas/Merch/Jockey_4.jpeg";
import jockey_5 from "../imports/optimizadas/Merch/Jockey_5.jpeg";

import polera_1 from "../imports/optimizadas/Merch/Polera_1.jpeg";
import polera_3 from "../imports/optimizadas/Merch/Polera_3.jpeg";
import polera_4 from "../imports/optimizadas/Merch/Poleras_4.jpeg";
import polera_6a from "../imports/optimizadas/Merch/Polera_6.jpeg";
import polera_6b from "../imports/optimizadas/Merch/Poleras_6.jpeg";
import polera_7 from "../imports/optimizadas/Merch/Polera_7.jpeg";

import shopero_1 from "../imports/optimizadas/Merch/Shopero_1.jpeg";
import shopero_2 from "../imports/optimizadas/Merch/Shopero_2.jpeg";
import shopero_3 from "../imports/optimizadas/Merch/Shopero_3.jpeg";
import shopero_4 from "../imports/optimizadas/Merch/Shopero_4.jpeg";

import sombrero_1 from "../imports/optimizadas/Merch/Sombrero_aventurero.jpeg";
import sombrero_1_alt from "../imports/optimizadas/Merch/Sombrero_aventurero-1.jpeg";
import sombrero_2 from "../imports/optimizadas/Merch/Sombrero_aventurero_2.jpeg";
import sombrero_3 from "../imports/optimizadas/Merch/Sombrero_aventurero_3.jpeg";
import sombrero_4 from "../imports/optimizadas/Merch/Sombrero_aventurero_4.jpeg";
import sombrero_5 from "../imports/optimizadas/Merch/Sombrero_aventurero_5.jpeg";
import sombrero_6 from "../imports/optimizadas/Merch/Sombrero_aventurero_6.jpeg";
import sombrero_7 from "../imports/optimizadas/Merch/Sombrero_aventurero_7.jpeg";
import sombrero_8 from "../imports/optimizadas/Merch/Sombrero_aventurero_8.jpeg";

import sticker_1 from "../imports/optimizadas/Merch/Sticker.jpeg";
import sticker_2 from "../imports/optimizadas/Merch/stickers.jpeg";

import tazon_xl_1 from "../imports/optimizadas/Merch/Tazon XL.jpeg";
import tazon_xl_2 from "../imports/optimizadas/Merch/taza XL2.jpeg";

import tazon_enl_1 from "../imports/optimizadas/Merch/Tazon_Enlozado 1.jpeg";
import tazon_enl_2 from "../imports/optimizadas/Merch/Tazon_Enlozado2.jpeg";
import tazon_enl_3 from "../imports/optimizadas/Merch/Tazon_Enlozado3.jpeg";
import tazon_enl_4 from "../imports/optimizadas/Merch/Tazon_Enlozado4.jpeg";
import tazon_enl_5 from "../imports/optimizadas/Merch/Tazon_Enlozado5.jpeg";
import tazon_enl_6 from "../imports/optimizadas/Merch/Tazon_Enlozado6.jpeg";
import tazon_enl_7 from "../imports/optimizadas/Merch/Tazon_Enlozado7.jpeg";
import tazon_enl_8 from "../imports/optimizadas/Merch/Tazon_Enlozado 8.jpeg";
import tazon_enl_9 from "../imports/optimizadas/Merch/Tazon_Enlozado9.jpeg";
import tazon_enl_10 from "../imports/optimizadas/Merch/Tazon_Enlozado10.jpeg";

import termo_1 from "../imports/optimizadas/Merch/Termos.jpeg";
import termo_2 from "../imports/optimizadas/Merch/termo.jpeg";
`;

// Insert the new imports right before the first MERCH_ITEMS array
const merchArrayStart = "const MERCH_ITEMS = [";
content = content.replace(merchArrayStart, newImports + "\n" + merchArrayStart);

// Now we need to replace the entire MERCH_ITEMS array
const merchArrayEnd = "];\n\nconst EXPERIENCES = ["; // or wherever it ends.
// Let's use a regex to match the MERCH_ITEMS array
const merchRegex = /const MERCH_ITEMS = \[[\s\S]*?\];/;

const newMerchItems = `const MERCH_ITEMS = [
  {
    id: 1,
    name: "Botellas",
    price: "$10.000",
    images: [botella_1, botella_2],
    desc: "Botellas para hidratarte durante tus trekking en la montaña.",
  },
  {
    id: 2,
    name: "Cuellos",
    price: "$5.000",
    images: [cuello_1],
    desc: "Cuello multiuso ideal para protegerte del frío o del polvo durante las expediciones.",
  },
  {
    id: 3,
    name: "Jockeys",
    price: "$5.000",
    images: [jockey_1, jockey_2, jockey_4, jockey_5],
    desc: "Gorro estilo jockey con el logo de El Ingenio, perfecto para días soleados.",
  },
  {
    id: 4,
    name: "Poleras",
    price: "$7.000",
    images: [polera_1, polera_3, polera_4, polera_6a, polera_6b, polera_7],
    desc: "Poleras de diseño único inspiradas en la naturaleza del Cajón del Maipo.",
  },
  {
    id: 5,
    name: "Shopero",
    price: "$8.000",
    images: [shopero_1, shopero_2, shopero_3, shopero_4],
    desc: "Shopero para disfrutar de tus bebidas favoritas con estilo montañés.",
  },
  {
    id: 6,
    name: "Sombrero Aventurero",
    price: "$12.000",
    images: [sombrero_1, sombrero_1_alt, sombrero_2, sombrero_3, sombrero_4, sombrero_5, sombrero_6, sombrero_7, sombrero_8],
    desc: "El clásico sombrero de explorador para tus rutas y caminatas largas.",
  },
  {
    id: 7,
    name: "Stickers",
    price: "$2.000",
    images: [sticker_1, sticker_2],
    desc: "Stickers de colección para tu termo, laptop o vehículo.",
  },
  {
    id: 8,
    name: "Tazón XL",
    price: "$6.000",
    images: [tazon_xl_1, tazon_xl_2],
    desc: "Un tazón extra grande para esas mañanas frías en la cordillera.",
  },
  {
    id: 9,
    name: "Tazón Enlozado",
    price: "$5.000",
    images: [tazon_enl_1, tazon_enl_2, tazon_enl_3, tazon_enl_4, tazon_enl_5, tazon_enl_6, tazon_enl_7, tazon_enl_8, tazon_enl_9, tazon_enl_10],
    desc: "Tazón enlozado tradicional, liviano y muy resistente para camping.",
  },
  {
    id: 10,
    name: "Termos",
    price: "$15.000",
    images: [termo_1, termo_2],
    desc: "Mantén tu café o mate caliente por horas con nuestros termos.",
  }
];`;

content = content.replace(merchRegex, newMerchItems);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Done");
