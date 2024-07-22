const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Helper function to generate file structure
function generateFileList(dir, baseUrl) {
    let fileList = '';
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(__dirname, filePath);
        const urlPath = `${baseUrl}/${relativePath}`;

        if (fs.statSync(filePath).isDirectory()) {
            fileList += `<li><strong>${file}/</strong></li>`;
            fileList += `<ul>${generateFileList(filePath, baseUrl)}</ul>`;
        } else {
            fileList += `<li><a href="${urlPath}" target="_blank">${file}</a></li>`;
        }
    });
    return fileList;
}

// Serve the directory listing
app.get('/', (req, res) => {
    const fileList = generateFileList(__dirname, '');
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
    res.send(html);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
