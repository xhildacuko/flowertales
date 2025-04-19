//Floating flower animation for mobile devices
window.addEventListener("load", () => {
    const flower = document.getElementById("floatingFlower");
    const section = document.querySelector(".intro-section");
  
    const baseTop = 40; // % from top
    const baseLeft = 85; // % from left
  
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
  
    function getBasePosition() {
      const rect = section.getBoundingClientRect();
      return {
        x: rect.width * (baseLeft / 100),
        y: rect.height * (baseTop / 100),
      };
    }
  
    // Initial flower position
    const base = getBasePosition();
    currentX = targetX = base.x;
    currentY = targetY = base.y;
  
    // Mobile touch movement
    section.addEventListener("touchmove", (e) => {
      const rect = section.getBoundingClientRect();
      const touch = e.touches[0];
  
      targetX = touch.clientX - rect.left;
      targetY = touch.clientY - rect.top;
    });
  
    // Reset when user lifts finger
    section.addEventListener("touchend", () => {
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
  