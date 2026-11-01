
window.addEventListener("load", function () {
    console.log("Welcome to MaiRudra Art Gallery!");
});

// Display current year automatically

const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;



// Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

// Close menu after clicking a navigation link

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
    });
});
