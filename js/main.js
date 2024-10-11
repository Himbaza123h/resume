particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate sections on scroll
const animatedSections = document.querySelectorAll('.animated');
const animateOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('fade-in');
        }
    });
};
window.addEventListener('scroll', animateOnScroll);

// Sticky navigation
const nav = document.querySelector('nav');
const sticky = nav.offsetTop;
const stickyNav = () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
window.addEventListener('scroll', stickyNav);

// Form submission (replace with actual form handling logic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Parallax effect for header background
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
});

// Optionally, hide the footer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').style.display = 'none';
});

// Function to highlight active section in navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Function to initialize all scripts
function initializeScripts() {
    highlightActiveSection();
    // Add other initialization functions here as needed
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeScripts);

