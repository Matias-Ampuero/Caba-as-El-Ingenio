const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// Fix the missing {
content = content.replace(
  /              \[\n                w_tourytrekking_0,/,
  `              {[\n                w_tourytrekking_0,`
);

fs.writeFileSync('src/app/App.tsx', content);
console.log("Fixed App.tsx syntax!");
