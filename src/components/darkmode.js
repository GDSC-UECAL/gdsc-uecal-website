// Icons
const sunIcon = document.querySelector(".Sun");
const moonIcon = document.querySelector(".Moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-colors-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
document.addEventListener("DOMContentLoaded", () => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");

    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            if (moonIcon) moonIcon.classList.add("display-none");
            return;
        }
        if (sunIcon) sunIcon.classList.add("display-none");
    };

    themeCheck();
});


// Manual Theme Check
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// Call Theme Switch on clicking buttons
document.addEventListener("DOMContentLoaded", () => {
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");

    if (sunIcon) {
        sunIcon.addEventListener("click", () => {
            themeSwitch();
        });
    }

    if (moonIcon) {
        moonIcon.addEventListener("click", () => {
            themeSwitch();
        });
    }
});