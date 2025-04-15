const dashboard = document.querySelector(".dashboard");
const homeLink = document.getElementById("homeLink");
const menuItems = document.querySelectorAll(".contents li");

// Function to load a page into the dashboard div
function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            dashboard.innerHTML = html;
        })
        .catch(() => {
            dashboard.innerHTML = `<p>Error loading <strong>${page}</strong>.</p>`;
        });
}

// Load dashboard.html on first load
window.addEventListener("DOMContentLoaded", () => {
    loadPage("myCorner.html");
});

// Handle "My Corner" click to reset dashboard
homeLink.addEventListener("click", () => {
    loadPage("myCorner.html");
});

// Handle sidebar menu item clicks
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.getAttribute("data-page");
        if (page) {
            loadPage(page);
        }
    });
});
