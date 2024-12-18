function loadComponent(componentPath, targetId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${componentPath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    // Header와 Footer 삽입
    loadComponent("/header", "header-placeholder");
    loadComponent("/footer", "footer-placeholder");
});
