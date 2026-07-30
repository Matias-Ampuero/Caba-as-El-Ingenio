const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const oldImports = `import w_domomarmolejo_0 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo10.webp";
import w_domomarmolejo_1 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo11.webp";
import w_domomarmolejo_2 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo7.webp";
import w_domomarmolejo_3 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo8.webp";
import w_domomarmolejo_4 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo9.webp";`;

const newImports = `import w_domomarmolejo_0 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo7.webp";
import w_domomarmolejo_1 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo8.webp";
import w_domomarmolejo_2 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo9.webp";
import w_domomarmolejo_3 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo10.webp";
import w_domomarmolejo_4 from "../imports/optimizadas/Domo Marmolejo/Domos Marmolejo11.webp";
import w_domomarmolejo_5 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 22.avif";
import w_domomarmolejo_6 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 23.avif";
import w_domomarmolejo_7 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 24.avif";
import w_domomarmolejo_8 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 26 .avif";
import w_domomarmolejo_9 from "../imports/optimizadas/Domo Marmolejo/Domo marmolejo 27.avif";`;

const oldImages = `    images: [
      w_domomarmolejo_0,
      w_domomarmolejo_1,
      w_domomarmolejo_2,
      w_domomarmolejo_3,
      w_domomarmolejo_4,
    ],`;

const newImages = `    images: [
      w_domomarmolejo_0,
      w_domomarmolejo_1,
      w_domomarmolejo_2,
      w_domomarmolejo_3,
      w_domomarmolejo_4,
      w_domomarmolejo_5,
      w_domomarmolejo_6,
      w_domomarmolejo_7,
      w_domomarmolejo_8,
      w_domomarmolejo_9,
    ],`;

if (content.includes(oldImports)) {
  content = content.replace(oldImports, newImports);
  console.log("Replaced imports");
} else {
  console.log("Could not find old imports");
}

if (content.includes(oldImages)) {
  content = content.replace(oldImages, newImages);
  console.log("Replaced images array");
} else {
  console.log("Could not find old images array");
}

fs.writeFileSync('src/app/App.tsx', content);
