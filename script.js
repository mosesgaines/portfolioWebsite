function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        const gradientCenterX = (mouseX / window.innerWidth) * 100;
        const gradientCenterY = (mouseY / window.innerHeight) * 100;
    
        const revealedArea = document.querySelector(".spotlight");
        revealedArea.style.background = `radial-gradient(
            circle 25rem at ${gradientCenterX}% ${gradientCenterY}%, rgba(51, 76, 184, 0.15), rgba(49, 14, 67, 0)
        )`;
    });

