const toggleButton= document.getElementById("menu-toggle");
const Menu = document.getElementById("menu");

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("open");
} );