const fs = require('fs');
const path = require('path');

function getFolderStructure(dir, baseDir) {
  const structure = {};
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(baseDir, fullPath);
    if (fs.statSync(fullPath).isDirectory()) {
      structure[file] = {
        path: relativePath,
        children: getFolderStructure(fullPath, baseDir)
      };
    }
  });
  return structure;
}

const folderPath = path.join(__dirname);

if (!fs.existsSync(folderPath)) {
  console.error(`Error: Directory ${folderPath} does not exist.`);
  process.exit(1);
}

try {
  const structure = getFolderStructure(folderPath, folderPath);
  fs.writeFileSync('folderStructure.json', JSON.stringify(structure, null, 2));
  console.log('Folder structure generated successfully!');
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
