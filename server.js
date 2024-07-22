const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// List of directories to exclude from the listing
const EXCLUDE_DIRS = ['.git', 'node_modules'];
// List of directories to include mandatorily
const INCLUDE_DIRS = ['erp_event_module', 'erp_home_module', 'erp_home_page', 'erp_login_module'];

// Serve static files
app.use(express.static(path.join(__dirname)));

// Helper function to generate file structure
function generateFileList(dir, baseUrl) {
    let fileList = '';
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        if (EXCLUDE_DIRS.includes(file)) return;

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

    // Add mandatory directories if not already included
    INCLUDE_DIRS.forEach(includeDir => {
        const filePath = path.join(__dirname, includeDir);
        const relativePath = path.relative(__dirname, filePath);
        const urlPath = `${baseUrl}/${relativePath}`;
        
        if (!files.includes(includeDir)) {
            fileList += `<li><strong>${includeDir}/</strong></li>`;
            fileList += `<ul>${generateFileList(filePath, baseUrl)}</ul>`;
        }
    });

    return fileList;
}

// Serve the directory listing
app.get('/files', (req, res) => {
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

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
