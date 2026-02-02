// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Toggle Logic
const navMenu = document.getElementById('nav-menu');
const fullMenu = document.getElementById('full-menu');
const closeMenu = document.getElementById('close-menu');

if (navMenu && fullMenu && closeMenu) {
    navMenu.addEventListener('click', () => {
        fullMenu.style.top = '0';
    });

    closeMenu.addEventListener('click', () => {
        fullMenu.style.top = '-100%';
    });
}

// ScrollTrigger Animation for Watch Cards
gsap.utils.toArray('.watch-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
        },
        delay: index * 0.1 // Stagger effect
    });
});
