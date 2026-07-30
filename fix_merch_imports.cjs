const fs = require("fs");
const path = require("path");

const appPath = path.join(__dirname, "src/app/App.tsx");
let content = fs.readFileSync(appPath, "utf8");

// 1. Delete lines containing "import serv", "import tour" (except w_tourytrekking_), "import domoE", "import domoM" (except w_domomarmolejo_)
// "import cabana" (except w_cabañaelingenio_)
const lines = content.split('\n');
const newLines = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^import (serv|tour|domoE|domoM|cabana)\d+ from/)) {
    // skip these unused imports
    continue;
  }
  newLines.push(line);
}
content = newLines.join('\n');

// 2. Fix merch imports to point to ../imports/optimizadas/Merch/
// The old paths are like ../imports/Jockey_1.jpeg
content = content.replace(/from "\.\.\/imports\/([^"]+)"/g, (match, filename) => {
  if (filename === "logo_de_whatsapp.jpeg" || filename === "logo_transparente.png") {
    return match; // Keep these unchanged
  }
  // Try to find the exact filename in src/imports/optimizadas/Merch/
  const merchDir = path.join(__dirname, "src/imports/optimizadas/Merch");
  const files = fs.readdirSync(merchDir);
  const found = files.find(f => f.toLowerCase() === filename.toLowerCase());
  if (found) {
    return `from "../imports/optimizadas/Merch/${found}"`;
  }
  // If not found precisely, just return the optimized path anyway (it might fail if deleted, but we'll see)
  return `from "../imports/optimizadas/Merch/${filename}"`;
});

fs.writeFileSync(appPath, content);
console.log("Merch imports fixed.");
