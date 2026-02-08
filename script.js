gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".logo", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
})
tl.from(".nav-links a", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
})
tl.from(".icon", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
})
tl.from(".hero-content h1", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
})
tl.from(".hero-content p", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
})
tl.from(".btns", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
})
gsap.from(".hero-content", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top 80%",
        toggleActions: "play none none none"
    }
})

gsap.from(".watch-section p", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".watch-section",
        scroller: "body",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
gsap.from(".watch-section h2", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scroller: "body",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".watch-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

let menuBtn = document.querySelector("#nav-menu");
let closeBtn = document.querySelector("#close-menu");

let menuTl = gsap.timeline({ paused: true });

menuTl.to("#full-menu", {
    right: 0,
    duration: 0.6,
    ease: "power3.out"
});

menuTl.to(".menu-links a", {
    opacity: 1,
    x: 0,
    stagger: 0.1,
    duration: 0.4,
    ease: "power2.out"
});

menuBtn.addEventListener("click", () => {
    menuTl.play();
});

closeBtn.addEventListener("click", () => {
    menuTl.reverse();
});

gsap.from(".watch-brand-card", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".watch-brands",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Dropdown functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        dropdownMenu.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
            dropdownToggle.classList.remove('active');
        }
    });
}