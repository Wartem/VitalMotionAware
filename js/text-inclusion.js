function testimonialText() {
    fetch('./json/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const testimonialList = document.getElementById('testimonial-list');
            data.forEach((testimonial, index) => {
                const li = document.createElement('li');
                li.textContent = testimonial.text;
                if (index === 0) {
                    li.classList.add('active');
                }
                testimonialList.appendChild(li);
            });
            setupTestimonialCarousel(); // Call setupTestimonialCarousel after the testimonials have been loaded
        })
        .catch(error => {
            console.error('Error fetching testimonials:', error);
        });
}

function setupTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonials li');
    let currentTestimonial = 0;
    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }
    // Remove this line, it's not needed
    // testimonials[currentTestimonial].classList.add('active');
    setInterval(showNextTestimonial, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    testimonialText();
})

/////////////////////////////////////////////////////////////////////////////

let sloganArray = [];

function initTextTyping() {
    fetch("./json/brt-slogans.json")
        .then(response => response.json())
        .then(data => {
            sloganArray = data;
            console.log(sloganArray[0]); // Skriver ut "T."
            callback_text_typing();
        });
}

function callback_text_typing() {
    startTyping();
}

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
    const randomLine = getRandomLine(sloganArray);
    typeWriter(randomLine);
}


/////////////////////////////////////////////////////////////////////////////

let blogEntryArray = [];

function initBlogEntries() {
    fetch("./json/blog-entries.json")
        .then(response => response.json())
        .then(data => {
            blogEntryArray = data.blogPosts;  // Tilldelar inläggen till array
            console.log(blogEntryArray[0]); // Skriver ut första inlägget för kontroll
            addBlogEntries(); // Kör nästa steg efter att data är laddad
        });
}

// Funktion som lägger till blogginläggen i DOM
function addBlogEntries() {
    const blogContainer = document.getElementById("blog");
    blogContainer.classList.add("blog-container");

    blogEntryArray.forEach(post => {
        // Skapa ett nytt div-element för varje inlägg
        const blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry", "flex-item");

        // Fyll in blogginläggets innehåll i div-elementet
        blogEntry.innerHTML = `
            <p><strong>${post.date}:</strong></p>
            <p>${post.content}</p>
        `;

        // Lägg till blogginlägget i container-elementet
        blogContainer.appendChild(blogEntry);
    });
}

// Kör initieringsfunktionen för att hämta och visa inlägg
initBlogEntries();