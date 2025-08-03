// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = navUl.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        menuToggle.textContent = isExpanded ? '✕' : '☰'; // Change icon for better UX
    });
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a');
if (navLinks && navUl && menuToggle) {
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu after clicking
            navUl.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (replace with actual backend logic)
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    });
}