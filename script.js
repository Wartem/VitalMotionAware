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
    const serviceCards = document.querySelectorAll('.large-on-scroll');

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
                entry.target.style.transform = 'scale(1.03)';
                entry.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            } else if (ratio < 0.3) {
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


const textArray = [
"BRT: Uppnå kroppslig och mental balans genom integrerad terapi.",
"BRT: Väck och stärk din inre kroppskraft med medvetna tekniker.",
"BRT: Hitta och upprätthåll din kroppsinre balans med våra metoder.",
"BRT: Låt dig vägledas av kroppens visdom för bättre hälsa.",
"BRT: Hämta styrka direkt från kroppens kärna genom övningar.",
"BRT: Upplev när fysik och psyke möts inuti genom medveten träning.",
"BRT: Utveckla kroppskännedom för bättre hälsa och välmående.",
"BRT: Omfamna en helhetssyn på välbefinnande genom kropp och själ.",
"BRT: Balansera dig själv med riktade övningar och mindfulness.",
"BRT: Påbörja en resa mot djup kroppskunskap och självförståelse.",
"BRT: Lev en hälsosam kroppslig livsstil för långsiktigt välbefinnande.",
"BRT: Skapa harmoni i din rutin medvetet med dagliga övningar.",
"BRT: Förbättra din livskvalitet genom att harmonisera kropp och sinne.",
"BRT: Upplev känslans kroppsliga dans genom medveten rörelse.",
"BRT: Fördjupa självkännedom via fokuserad kroppsuppmärksamhet.",
"BRT: Använd kroppsfokus som ett verktyg för självläkning och återhämtning.",
"BRT: Förstå dig själv bättre via kroppens unika språk och signaler.",
"BRT: Stärk din kropp intuitivt och effektivt genom medvetna övningar.",
"BRT: Harmonisera kropp och själ för en enhetlig känsla av välbefinnande.",
"BRT: Uppnå psykofysisk hälsa genom ökad medvetenhet och övningar.",
"BRT: Upplev harmoni mellan kropp och sinne genom riktade tekniker.",
"BRT: Hitta inre lugn via kroppsbaserade metoder och tekniker.",
"BRT: Minska stress effektivt med stabiliserande kroppstekniker.",
"BRT: Uppnå minskad stress och ökat välbefinnande med kroppsfokus.",
"BRT: Skapa harmoni i kropp och sinne för en balanserad livsstil.",
"BRT: Uppnå stabilitet och välmående genom ökad kroppsmedvetenhet.",
"BRT: Bygg en starkare hållning och självkänsla genom kroppslig träning.",
"BRT: Aktivera dina muskler för att uppnå lugn och avslappning.",
"BRT: Förbättra ditt välbefinnande genom fokuserad kroppsuppmärksamhet.",
"BRT: Utveckla inre styrka och välbefinnande via kroppsbaserade tekniker.",
"BRT: Uppnå djupare medvetenhet för bättre hälsa med kroppsfokus.",
"BRT: Upplev kroppens harmoni och dess fördelar för ditt välbefinnande.",
"BRT: Stärk din kropp och själ med integrerade övningar och tekniker.",
"BRT: Lär dig att tolka och lyssna på kroppens berättelser och signaler.",
"BRT: Uppnå balanserad hälsa i kropp och sinne genom medvetna val.",
"BRT: Upplev kroppens helande kraft genom riktade övningar.",
"BRT: Uppnå helhet i kropp och själ för en enhetlig syn på hälsa.",
"BRT: Stärk din hälsa med ett fokuserat kroppsfokus och dagliga rutiner.",
"BRT: Harmonisera din dagliga rutin med kroppsbaserade övningar.",
"BRT: Uppnå balans genom ökad kroppsmedvetenhet och övningar.",
"BRT: Upplev välmående och välbefinnande med ett fokuserat kroppsfokus.",
"BRT: Upplev en frisk kropp och ett friskt sinne genom integrerad träning.",
 "BRT - Din väg till kroppslig medvetenhet.",
"BRT - En bro mellan kropp och själ.",
"BRT - Förbättra din hållning och självkänsla.",
"BRT - Fördjupa din förståelse för kroppens signaler.",
"BRT - Utveckla din kroppsliga intuition.",
"BRT - där psykoterapi möter fysioterapi.",
"BRT för kroppslig och mental harmoni.",
"BRT: Välbefinnande genom kroppsfokusering.",
"BRT: Där psyke och fysik möts.",
"BRT: Harmonisera din rutin med kroppsmedvetenhet.",
"BRT: Hitta inre lugn genom din kropp.",
"BRT: Uppnå din potential med kroppsmedvetenhet.",
"BRT: Effektiva tekniker för stresshantering och avslappning.",
"BRT: Holistisk väg till fysisk och mental återhämtning.",
"BRT: Effektivt för stresshantering och avslappning.",
"BRT: En helhetssyn på hälsa och välbefinnande.",
"BRT: En holistisk väg till fysisk och mental återhämtning.",
"BRT: En metod för att främja psykofysisk hälsa.",
"BRT: En resa mot djupare kroppslig förståelse och hälsa.",
"BRT: En väg till bättre kroppskännedom och psykisk hälsa.",
"BRT: Ett steg närmare till självläkning och självinsikt.",
"BRT: Ett verktyg för livskvalitet och välmående.",
"BRT: För en holistisk självförståelse.",
"BRT: Förbättra din självkännedom och inre frid.",
"BRT: Harmonisera din kropp och ditt sinne.",
"BRT: Helhetssyn på hälsa och välbefinnande.",
"BRT: Lär dig lyssna på din kropp.",
"BRT: Låt din kropp bli din lärare i välbefinnande.",
"BRT: Navigera i livet med större kroppslig harmoni.",
"BRT: Nyckeln till inre harmoni.",
"BRT: Resan mot en mer medveten och hälsosam livsstil.",
"BRT: Stärk din kroppsliga intuition för ett rikare liv.",
"BRT: Utforska kraften i medveten kroppsrörelse.",
"BRT: Utforska sambandet mellan känsla och rörelse.",
"BRT: Väck din kropp till liv med medveten närvaro.",
"BRT: Öka din psykiska och fysiska stabilitet.",
"För en djupare medvetenhet, välj BRT.",
"Förbättra din kroppskännedom med BRT.",
"Förbättra din livskvalitet genom BRT",
"Förstå ditt kroppsspråk bättre med hjälp av BRT.",
"Hitta din inre balans genom BRT.",
"Kroppens väg till själens lugn - Upptäck BRT.",
"Navigera mot inre balans med BRTs unika metodik.",
"Stärk din mental och fysisk balans med BRT.",
"Upptäck balansen i kropp och sinne med BRT.",
"Upptäck kraften av BRT för ditt välbefinnande.",
"Upptäck kraften i kroppsbaserad terapi med BRT.",
"Utforska BRT för total kroppslig medvetenhet.",
"Utforska balansen mellan kropp och sinne med BRT.",
"Öka din närvaro och lugn med BRT.",
"BRT - Din väg till fördjupad kroppslig medvetenhet och inre balans.",
"BRT - En bro mellan kropp och själ för ökad harmoni och självförståelse.",
"BRT - Förbättra din kroppshållning och självkänsla genom medvetna övningar.",
"BRT - Fördjupa din förståelse för kroppens signaler för bättre hälsa.",
"BRT - Utveckla din kroppsliga intuition för ett mer harmoniskt liv.",
"BRT - där psykoterapi möter fysioterapi för en helhetssyn på välbefinnande.",
"BRT för kroppslig och mental harmoni genom integrerade terapitekniker.",
"BRT: Välbefinnande genom kroppsfokusering och självmedvetenhet.",
"BRT: Där psyke och fysik möts för en balanserad livsstil.",
"BRT: Harmonisera din vardag med medveten kroppsmedvetenhet.",
"BRT: Hitta inre lugn genom din kropp för en bättre livskvalitet.",
"BRT: Uppnå din potential med kroppsmedvetenhet och självinsikt.",
"BRT: Effektiva tekniker för stresshantering och djup avslappning.",
"BRT: Holistisk väg till fysisk och mental återhämtning och välbefinnande.",
"BRT: Effektivt för stresshantering och avslappning med kroppsfokus.",
"BRT: En helhetssyn på hälsa och välbefinnande för en bättre vardag.",
"BRT: En holistisk väg till fysisk och mental återhämtning för hållbart välmående.",
"BRT: En metod för att främja psykofysisk hälsa och inre harmoni.",
"BRT: En resa mot djupare kroppslig förståelse och holistisk hälsa.",
"BRT: En väg till bättre kroppskännedom och psykisk balans.",
"BRT: Ett steg närmare till självläkning och självinsikt för total välbefinnande.",
"BRT: Ett verktyg för livskvalitet och välmående med kroppsfokus.",
"BRT: För en holistisk självförståelse och personlig utveckling.",
"BRT: Förbättra din självkännedom och inre frid genom kroppslig medvetenhet.",
"BRT: Harmonisera din kropp och ditt sinne för ett friskare liv.",
"BRT: Helhetssyn på hälsa och välbefinnande genom kropp och sinne.",
"BRT: Lär dig lyssna på din kropp för bättre självförståelse.",
"BRT: Låt din kropp bli din lärare i välbefinnande och självkännedom.",
"BRT: Navigera i livet med större kroppslig harmoni och självinsikt.",
"BRT: Nyckeln till inre harmoni genom kroppsmedvetenhet.",
"BRT: Resan mot en mer medveten och hälsosam livsstil genom kroppsfokus.",
"BRT: Stärk din kroppsliga intuition för ett rikare och mer balanserat liv.",
"BRT: Utforska kraften i medveten kroppsrörelse för inre välbefinnande.",
"BRT: Utforska sambandet mellan känsla och rörelse för djupare självförståelse.",
"BRT: Väck din kropp till liv med medveten närvaro och rörelse.",
"BRT: Öka din psykiska och fysiska stabilitet genom kroppsfokuserad terapi.",
"För en djupare medvetenhet och välmående, välj BRT.",
"Förbättra din kroppskännedom och livskvalitet med BRT.",
"Förstå ditt kroppsspråk bättre och uppnå inre frid med hjälp av BRT.",
"Hitta din inre balans och lugn genom BRTs unika metodik.",
"Kroppens väg till själens lugn - Upptäck BRT för inre harmoni."
    // Lägg till fler strängar här...
];

function startTyping() {
    const typingSpeed = 50; // Milliseconds per character
    let i = 0;

    function typeWriter(text, callback) {
        if (i < text.length) {
            document.getElementById("typing-container").innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, callback), typingSpeed);
        } else if (callback) {
            callback();
        }
    }

    function getRandomLine(lines) {
        return lines[Math.floor(Math.random() * lines.length)];
    }

    const typingContainer = document.getElementById("typing-container");
    typingContainer.innerHTML = ''; // Clear previous content
    const randomLine = getRandomLine(textArray);
    typeWriter(randomLine);
}

// Start typing on page load
window.onload = startTyping;