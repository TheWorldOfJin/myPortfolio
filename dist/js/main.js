// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const homePage = document.querySelector("#homepage");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    homePage.classList.add("hide");
    navItems.forEach(item => item.classList.add("show"));

    menuBtn.textContent = "CLOSE MENU";
    menuBtn.style.color = "#000";
    homePage.style.visibility = "hidden";
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    homePage.classList.remove("hide");
    navItems.forEach(item => item.classList.remove("show"));

    menuBtn.textContent = "SHOW MENU";
    menuBtn.style.color = "#FFF";
    homePage.style.visibility = "visible";
    showMenu = false;
  }
}
