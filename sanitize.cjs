const fs = require('fs');
const path = require('path');

const optimizadasDir = path.join(__dirname, 'src/imports/optimizadas');
const appTsxPath = path.join(__dirname, 'src/app/App.tsx');
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

function sanitizeName(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9.\-_]/g, '_').toLowerCase();
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === '.DS_Store') continue;
    const oldPath = path.join(dir, item);
    const stat = fs.statSync(oldPath);
    
    if (stat.isDirectory()) {
      processDir(oldPath);
      // rename directory
      const newDirName = sanitizeName(item);
      if (newDirName !== item) {
        const newPath = path.join(dir, newDirName);
        fs.renameSync(oldPath, newPath);
        
        // update all occurrences in App.tsx
        // we can just regex replace the exact folder name
        const regex = new RegExp(item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        appTsx = appTsx.replace(regex, newDirName);
      }
    } else {
      // rename file
      const newFileName = sanitizeName(item);
      if (newFileName !== item) {
        const newPath = path.join(dir, newFileName);
        fs.renameSync(oldPath, newPath);
        
        // update all occurrences in App.tsx
        const regex = new RegExp(item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        appTsx = appTsx.replace(regex, newFileName);
      }
    }
  }
}

// Do files first, then directories
function processFilesFirst(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (item === '.DS_Store') continue;
        const oldPath = path.join(dir, item);
        const stat = fs.statSync(oldPath);
        if (stat.isDirectory()) {
            processFilesFirst(oldPath);
        } else {
            const newFileName = sanitizeName(item);
            if (newFileName !== item) {
                const newPath = path.join(dir, newFileName);
                fs.renameSync(oldPath, newPath);
                
                // Because mac handles string comparison weirdly with NFD/NFC, we'll replace both forms in App.tsx just in case
                const nfcRegex = new RegExp(item.normalize('NFC').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                const nfdRegex = new RegExp(item.normalize('NFD').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                appTsx = appTsx.replace(nfcRegex, newFileName);
                appTsx = appTsx.replace(nfdRegex, newFileName);
            }
        }
    }
}

function processDirsFirst(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (item === '.DS_Store') continue;
        const oldPath = path.join(dir, item);
        const stat = fs.statSync(oldPath);
        if (stat.isDirectory()) {
            processDirsFirst(oldPath); // recursive
            
            const newDirName = sanitizeName(item);
            if (newDirName !== item) {
                const newPath = path.join(dir, newDirName);
                fs.renameSync(oldPath, newPath);
                
                const nfcRegex = new RegExp(item.normalize('NFC').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                const nfdRegex = new RegExp(item.normalize('NFD').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                appTsx = appTsx.replace(nfcRegex, newDirName);
                appTsx = appTsx.replace(nfdRegex, newDirName);
            }
        }
    }
}

processFilesFirst(optimizadasDir);
processDirsFirst(optimizadasDir);

fs.writeFileSync(appTsxPath, appTsx);
console.log('Sanitized file names and updated App.tsx');

