// This is a mock function to simulate fetching directory structure
function fetchDirectoryStructure() {
    return [
        { name: '.vscode', type: 'directory' },
        { name: 'assets', type: 'directory' },
        { name: 'components', type: 'directory' },
        { name: 'erp_event_module', type: 'directory' },
        { name: 'erp_home_module', type: 'directory' },
        { name: 'erp_home_page', type: 'directory' },
        { name: 'erp_login_module', type: 'directory' },
        { name: 'erp_login_module.zip', type: 'file' },
        { name: 'generateStructure.js', type: 'file' },
        { name: 'index.html', type: 'file' }
    ];
}

function renderDirectoryList() {
    const directoryListContainer = document.getElementById('directory-list');
    const items = fetchDirectoryStructure();
    let html = '';

    items.forEach(item => {
        if (item.type === 'directory') {
            html += `<div class="directory-item"><strong>${item.name}/</strong></div>`;
        } else {
            html += `<div class="directory-item">${item.name}</div>`;
        }
    });

    directoryListContainer.innerHTML = html;
}

// Render the directory list when the page loads
document.addEventListener('DOMContentLoaded', renderDirectoryList);
