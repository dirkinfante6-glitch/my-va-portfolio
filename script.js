
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// LIGHT AND DARK MODE
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    if (theme === "dark") {
        themeIcon.textContent = "☀";
        themeText.textContent = "LIGHT MODE";
    } else {
        themeIcon.textContent = "☾";
        themeText.textContent = "DARK MODE";
    }

    localStorage.setItem("portfolio-theme", theme);
}

if (themeToggle && themeIcon && themeText) {
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";

    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        applyTheme(isDark ? "light" : "dark");
    });
}
