const fs = require('fs');
const path = require('path');

function getFolderStructure(dir) {
  const structure = {};
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      structure[file] = getFolderStructure(fullPath);
    } else {
      structure[file] = null;
    }
  });
  return structure;
}

// Adjust the folder path to the MARTHON_ERP directory
const folderPath = path.join(__dirname);

if (!fs.existsSync(folderPath)) {
  console.error(`Error: Directory ${folderPath} does not exist.`);
  process.exit(1);
}

try {
  const structure = getFolderStructure(folderPath);
  fs.writeFileSync('folderStructure.json', JSON.stringify(structure, null, 2));
  console.log('Folder structure generated successfully!');
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
