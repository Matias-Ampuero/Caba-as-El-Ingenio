const fs = require('fs');
const path = require('path');

let app = fs.readFileSync('src/app/App.tsx', 'utf8');
const lines = app.split('\n');

const importRegex = /^import\s+(\w+)\s+from\s+"([^"]+)";$/;

let newLines = [];
let deletedVars = new Set();

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(importRegex);
    if (match) {
        const varName = match[1];
        const importPath = match[2];
        const fullPath = path.join('src/app', importPath);

        if (!fs.existsSync(fullPath)) {
            // Try to find it with a different extension
            const dir = path.dirname(fullPath);
            const ext = path.extname(fullPath);
            const basename = path.basename(fullPath, ext);

            if (fs.existsSync(dir)) {
                const files = fs.readdirSync(dir);
                const found = files.find(f => {
                    const fExt = path.extname(f);
                    const fBase = path.basename(f, fExt);
                    return fBase === basename; // matches same name without extension
                });

                if (found) {
                    // Update import
                    const newImportPath = importPath.replace(path.basename(importPath), found);
                    newLines.push(`import ${varName} from "${newImportPath}";`);
                    continue;
                }
            }

            // If we reach here, we couldn't find the file at all.
            // We should remove this line and mark the variable as deleted.
            deletedVars.add(varName);
            continue; // Skip pushing this line
        }
    }

    // Not an import, or an import that exists
    newLines.push(line);
}

// Now we need to remove the old w_tourytrekking_ variables that are no longer used.
// The user wants me to ONLY touch the tours. I already added laguna_img_*, glaciares_img_*, etc.
// But some old w_tourytrekking_ variables were removed because the files don't exist.
// We must remove them from any arrays.

let newApp = newLines.join('\n');

deletedVars.forEach(v => {
    // Remove the variable from any arrays, e.g., `images: [..., v, ...]`
    const regex1 = new RegExp(`,\\s*${v}\\b`, 'g');
    const regex2 = new RegExp(`\\b${v}\\s*,`, 'g');
    const regex3 = new RegExp(`\\b${v}\\b`, 'g');

    newApp = newApp.replace(regex1, '');
    newApp = newApp.replace(regex2, '');
    newApp = newApp.replace(regex3, ''); // If it was the only item
});

// Also, remove ANY leftover w_tourytrekking_ imports because we replaced the Tours completely with laguna_img, glaciares_img, termas_img.
// Wait, the user ONLY wanted me to touch the tours. 
// BUT w_tourytrekking_ might be used in the Service/Food section as well!
// Let's NOT blanket delete w_tourytrekking_ imports unless they are truly unused.
// We'll leave them alone if they exist.

fs.writeFileSync('src/app/App.tsx', newApp);
console.log('Fixed imports in App.tsx');
