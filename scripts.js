// Typewriter Effect Code (Unchanged)
const textElement = document.getElementById('typewriter');
const initialText = "Aleksandra Suchojad.";
const texts = [
    "a Web Developer.",
    "a Game Developer.",
    "a Traveling Enthusiast."
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenTexts = 1000;
const initialPause = 3000;

const typewriterEffect = () => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typewriterEffect, pauseBetweenTexts);
        } else {
            setTimeout(typewriterEffect, typingSpeed);
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;

            if (textIndex === 0) {
                textElement.classList.add('erase');
                setTimeout(() => {
                    textElement.textContent = initialText;
                    textElement.classList.remove('erase');
                    charIndex = 0;
                    setTimeout(typewriterEffect, initialPause);
                }, 2000);
            } else {
                setTimeout(typewriterEffect, pauseBetweenTexts);
            }
        } else {
            setTimeout(typewriterEffect, deletingSpeed);
        }
    }
};

if (textElement) {
    textElement.textContent = initialText;
    setTimeout(() => {
        textElement.classList.add('type');
        setTimeout(typewriterEffect, initialPause);
    }, initialPause);
}

// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }
});

// Smooth Scroll for "Explore My Work" Button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const aboutSection = document.querySelector('#about');

    if (ctaButton && aboutSection) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            aboutSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Scroll to the top of the section
            });
        });
    }
});

