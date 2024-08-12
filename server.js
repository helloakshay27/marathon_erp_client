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
    let files;

    try {
        files = fs.readdirSync(dir);
    } catch (error) {
        console.error(`Error reading directory: ${dir}`, error);
        return '';
    }

    // Add mandatory directories first if they are not in the file list
    INCLUDE_DIRS.forEach(includeDir => {
        if (!files.includes(includeDir)) {
            files.push(includeDir);
        }
    });

    files.forEach(file => {
        if (EXCLUDE_DIRS.includes(file)) return;

        const filePath = path.join(dir, file);
        const relativePath = path.relative(__dirname, filePath);
        const urlPath = `${baseUrl}/${relativePath}`;

        try {
            if (fs.statSync(filePath).isDirectory()) {
                fileList += `<li><strong>${file}/</strong></li>`;
                fileList += `<ul>${generateFileList(filePath, baseUrl)}</ul>`;
            } else {
                fileList += `<li><a href="${urlPath}" target="_blank">${file}</a></li>`;
            }
        } catch (error) {
            console.error(`Error accessing file: ${filePath}`, error);
        }
    });

    return fileList;
}

app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/erp_event_module', express.static(path.join(__dirname, 'erp_event_module')));


// Serve the directory listing
app.get('/erp_home_module', (req, res) => {
    try {
        const specificDir = path.join(__dirname, 'erp_home_module');
        const fileList = generateFileList(specificDir, '');
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Directory Listing</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                ul li {
                    margin: 5px 0;
                }
                ul li a {
                    color: #007BFF;
                    text-decoration: none;
                }
                ul li a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center">Directory Listing</h1>
                <ul class="list-group">${fileList}</ul>
            </div>
        </body>
        </html>
    `;
    res.send(html);
}catch (error) {
        console.error('Error generating file list:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/erp_login_module', (req, res) => {
    try {
        const specificDir = path.join(__dirname, 'erp_login_module');
        const fileList = generateFileList(specificDir, '');
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Directory Listing</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                ul li {
                    margin: 5px 0;
                }
                ul li a {
                    color: #007BFF;
                    text-decoration: none;
                }
                ul li a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center">Directory Listing</h1>
                <ul class="list-group">${fileList}</ul>
            </div>
        </body>
        </html>
    `;
    res.send(html);
}catch (error) {
        console.error('Error generating file list:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/erp_home_module/masters', (req, res) => {
    try {
        const specificDir = path.join(__dirname, 'erp_home_module/masters');
        const fileList = generateFileList(specificDir, '');
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Directory Listing</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                ul li {
                    margin: 5px 0;
                }
                ul li a {
                    color: #007BFF;
                    text-decoration: none;
                }
                ul li a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center">Directory Listing</h1>
                <ul class="list-group">${fileList}</ul>
            </div>
        </body>
        </html>
    `;
    res.send(html);
}catch (error) {
        console.error('Error generating file list:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/erp_home_module/erp_estimation', (req, res) => {
    try {
        const specificDir = path.join(__dirname, 'erp_home_module/erp_estimation');
        const fileList = generateFileList(specificDir, '');
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Directory Listing</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body {
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                ul li {
                    margin: 5px 0;
                }
                ul li a {
                    color: #007BFF;
                    text-decoration: none;
                }
                ul li a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center">Directory Listing</h1>
                <ul class="list-group">${fileList}</ul>
            </div>
        </body>
        </html>
    `;
    res.send(html);
}catch (error) {
        console.error('Error generating file list:', error);
        res.status(500).send('Internal Server Error');
    }
});





// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;