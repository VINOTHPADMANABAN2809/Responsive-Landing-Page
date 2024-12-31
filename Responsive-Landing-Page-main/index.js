// Toggle Hamburger Menu and Animation
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    // Toggle the menu visibility
    menu.classList.toggle('open');
    menu.classList.toggle('hidden');
    // Animate the hamburger icon
    toggleButton.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        // Close the menu after clicking
        menu.classList.add('hidden');
        menu.classList.remove('open');
        toggleButton.classList.remove('active');
    });
});

// Change Background on Scroll
function changeBg() {
    const navbar = document.getElementById('navbar');
    const scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}
window.addEventListener('scroll', changeBg);
