document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");

    // Open the sliding menu
    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        sideMenu.classList.add("open");
    });

    // Close the sliding menu
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
