// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Lucide Icons
lucide.createIcons();

// Typing Animation
const typingText = document.getElementById('typing-text');
const roles = ["Web Developer", "AI Enthusiast", "Creative Technologist"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('glass', 'py-4');
        nav.classList.remove('py-6');
    } else {
        nav.classList.remove('glass', 'py-4');
        nav.classList.add('py-6');
    }

    // Animate Skill Bars when in view
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const percent = bar.getAttribute('data-percent');
            bar.querySelector('.bar div').style.width = percent + '%';
        }
    });
});

// Start typing on load
document.addEventListener('DOMContentLoaded', type);