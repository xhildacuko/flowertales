document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");

    // Open the menu when "create +" is clicked
    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        sideMenu.classList.add("open");
    });

    // Close the menu when "X" is clicked
    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove("open");
        }
    });
});
