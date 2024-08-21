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
            // Pause after full text is typed
            isDeleting = true;
            setTimeout(typewriterEffect, pauseBetweenTexts);
        } else {
            setTimeout(typewriterEffect, typingSpeed);
        }
    } else {
        // Deleting effect for the texts
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            // Move to the next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;

            if (textIndex === 0) {
                // Reset and type out "Aleksandra Suchjad" again
                textElement.classList.add('erase');
                setTimeout(() => {
                    textElement.textContent = initialText;
                    textElement.classList.remove('erase');
                    charIndex = 0;
                    setTimeout(typewriterEffect, initialPause);
                }, 2000); // Time for type-out animation
            } else {
                setTimeout(typewriterEffect, pauseBetweenTexts);
            }
        } else {
            setTimeout(typewriterEffect, deletingSpeed);
        }
    }
};

// Start the typewriter effect after an initial delay
textElement.textContent = initialText;
setTimeout(() => {
    textElement.classList.add('type');
    setTimeout(typewriterEffect, initialPause);
}, initialPause);
