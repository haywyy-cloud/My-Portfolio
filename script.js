// ===== TYPEWRITER (name once, then roles loop) =====
console.log("script.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready, starting typewriter...");

    const nameText = "Ayomide";
    const nameEl = document.getElementById("name-text");
    const typewriterEl = document.getElementById("typewriter");

    // Sanity checks — tell us clearly if an element is missing
    if (!nameEl) {
        console.error("Could not find #name-text — check your <span id=\"name-text\"> in index.html");
    }
    if (!typewriterEl) {
        console.error("Could not find #typewriter — check your <span id=\"typewriter\"> in index.html");
    }

    const roles = [
        "Frontend Developer",
        "UI/UX Designer",
        "AI-powered App Designer",
        "React Developer",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeName(i = 0) {
        if (!nameEl) return; // stop safely instead of crashing
        if (i <= nameText.length) {
            nameEl.textContent = nameText.substring(0, i);
            setTimeout(() => typeName(i + 1), 120);
        } else {
            typeRoles();
        }
    }

    function typeRoles() {
        if (!typewriterEl) return; // stop safely instead of crashing
        const currentWord = roles[roleIndex];

        charIndex += isDeleting ? -1 : 1;
        typewriterEl.textContent = currentWord.substring(0, charIndex);

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeRoles, speed);
    }

    typeName();
});