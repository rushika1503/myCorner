// Get dashboard and menu elements
const dashboard = document.querySelector(".dashboard");
const menuItems = document.querySelectorAll(".contents li");
const homeLink = document.getElementById("homeLink");

// Function to load HTML content and its corresponding JS// Function to load content and optionally store last viewed page
function loadPage(page, script, saveToStorage = true) {
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            dashboard.innerHTML = html;

            // Save the current page and script to localStorage
            if (saveToStorage) {
                localStorage.setItem("lastPage", page);
                localStorage.setItem("lastScript", script);
            }

            // Load page-specific script
            if (script) {
                import(`./${script}`)
                    .then(module => {
                        if (typeof module.default === "function") {
                            module.default();
                        }
                    })
                    .catch(err => {
                        console.error(`Failed to load script: ${script}`, err);
                    });
            }
        })
        .catch(() => {
            dashboard.innerHTML = `<p>Error loading <strong>${page}</strong>.</p>`;
        });
}

// Load last viewed page (from localStorage) on first load
window.addEventListener("DOMContentLoaded", () => {
    const lastPage = localStorage.getItem("lastPage") || homeLink.getAttribute("data-page");
    const lastScript = localStorage.getItem("lastScript") || homeLink.getAttribute("data-script");
    loadPage(lastPage, lastScript, false); // false to not override again
});

// Click handlers
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.getAttribute("data-page");
        const script = item.getAttribute("data-script");
        if (page) {
            loadPage(page, script);
        }
    });
});

homeLink.addEventListener("click", () => {
    const page = homeLink.getAttribute("data-page");
    const script = homeLink.getAttribute("data-script");
    if (page) {
        loadPage(page, script);
    }
});
