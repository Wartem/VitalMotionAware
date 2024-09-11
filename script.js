// Wait for the DOM to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    setupSmoothScroll();

    // Parallax effect for background image
    setupParallaxEffect();

    // Animate elements on scroll
    setupScrollAnimations();

    // Initialize the map
    initMap();

    // Set up the testimonial carousel
    setupTestimonialCarousel();

    // Add hover effect to service cards
    setupServiceCardEffects();
});

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupParallaxEffect() {
    let lastScrollPosition = 0;
    const backgroundImage = document.querySelector('body');

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        const scrollDifference = currentScrollPosition - lastScrollPosition;
        
        backgroundImage.style.backgroundPositionY = `-${currentScrollPosition * 0.5}px`;
        
        lastScrollPosition = currentScrollPosition;
    });
}

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function initMap() {
    const svedala = { lat: 55.7252, lng: 13.2216 };
    const map = L.map('map').setView(svedala, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    L.marker(svedala).addTo(map)
        .bindPopup('Katrin Valde - VitalMotionAware.care')
        .openPopup();
}

function setupTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonials li');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    testimonials[currentTestimonial].classList.add('active');
    setInterval(showNextTestimonial, 5000);
}

function setupServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service');

    const observerOptions = {
        root: null,  // Använder hela viewporten som "root"
        rootMargin: '0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0]  // Definierar olika synlighetsnivåer
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Kontrollera hur mycket av kortet som är synligt
            const ratio = entry.intersectionRatio;

            if (ratio > 0.5) {
                // När över hälften av kortet är synligt, zooma in
                entry.target.style.transform = 'scale(1.05)';
                entry.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            } else {
                // När mindre än hälften av kortet är synligt, zooma ut
                entry.target.style.transform = 'scale(1)';
                entry.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    }, observerOptions);

    // Observera varje service-kort
    serviceCards.forEach(card => {
        observer.observe(card);
    });
}

// Kör funktionen när sidan är klar att interagera med
document.addEventListener('DOMContentLoaded', () => {
    setupServiceCardEffects();
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();