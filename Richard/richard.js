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
