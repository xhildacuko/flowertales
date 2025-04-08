document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".create-menu");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");

    if (!menuToggle || !sideMenu || !closeBtn) {
        console.error("Elements not found in the document");
        return;
    }

    console.log("Script loaded successfully");

    menuToggle.addEventListener("click", function () {
        sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
    });

    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove("open");
        }
    });
});


// Floating flower animation

window.addEventListener("load", () => {
  const flower = document.getElementById("floatingFlower");
  const section = document.querySelector(".intro-section");

  const baseTop = 40; // percent
  const baseLeft = 85; // percent

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  // Get section size
  function getBasePosition() {
    const rect = section.getBoundingClientRect();
    return {
      x: rect.width * (baseLeft / 100),
      y: rect.height * (baseTop / 100)
    };
  }

  // Initial base position
  const base = getBasePosition();
  currentX = targetX = base.x;
  currentY = targetY = base.y;

  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetX = x;
    targetY = y;
  });

  section.addEventListener("mouseleave", () => {
    const base = getBasePosition();
    targetX = base.x;
    targetY = base.y;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.2;
    currentY += (targetY - currentY) * 0.2;

    flower.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }

  animate();
});

