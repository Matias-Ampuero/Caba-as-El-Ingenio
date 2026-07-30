const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// The lines containing the old merch imports (approx 166 to 197)
// We will replace any import starting with "import merch" with an empty string
const lines = content.split('\n');
const newLines = lines.filter(line => !line.trim().startsWith('import merch'));
fs.writeFileSync('src/app/App.tsx', newLines.join('\n'));
console.log("Done");
