// api/files.js
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const generateFileList = (dir, baseUrl) => {
        let fileList = '';
        try {
            const files = fs.readdirSync(dir);

            files.forEach(file => {
                if (['.git', 'node_modules', 'generateStructure.js'].includes(file)) return;

                const filePath = path.join(dir, file);
                const relativePath = path.relative(__dirname, filePath);
                const urlPath = `${baseUrl}/${relativePath.replace(/\\/g, '/')}`;

                if (fs.statSync(filePath).isDirectory()) {
                    fileList += `<li><strong>${file}/</strong></li>`;
                    fileList += `<ul>${generateFileList(filePath, baseUrl)}</ul>`;
                } else {
                    fileList += `<li><a href="${urlPath}" target="_blank">${file}</a></li>`;
                }
            });
        } catch (error) {
            console.error(`Error reading directory ${dir}:`, error);
            fileList = '<li>Error reading directory</li>';
        }
        return fileList;
    };

    const fileList = generateFileList(path.join(__dirname, '../'), '');
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Directory Listing</title>
        </head>
        <body>
            <h1>Directory Listing</h1>
            <ul>${fileList}</ul>
        </body>
        </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
};
