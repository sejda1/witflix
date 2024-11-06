document.getElementById("menuToggle").addEventListener("click", function () {
    const menuLinks = document.getElementById("menuLinks");
    menuLinks.classList.toggle("menu-active"); // Menüye `menu-active` sınıfını ekler veya çıkarır
});