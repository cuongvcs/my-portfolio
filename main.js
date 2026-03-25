document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Actually, keep it styled slightly or toggle.
            if(window.scrollY < 10) navbar.classList.remove('scrolled');
        }
    });

    // 2. Typewriter Effect
    const texts = [
        "ROCKWELL AUTOMATION EXPERT.",
        "SYSTEM INTEGRATOR.",
        "PLC / SCADA ARCHITECT."
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const speed = 100;

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typewriter-text').textContent = letter;
        if (letter.length === currentText.length) {
            setTimeout(() => {
                index = 0;
                count++;
                type();
            }, 2000);
        } else {
            setTimeout(type, speed);
        }
    }
    // Start typing
    setTimeout(type, 1000);

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If the element has the counter class, trigger numbers animation
                if (entry.target.classList.contains('about-text')) {
                    startCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.fade-up, .fade-in');
    hiddenElements.forEach(el => observer.observe(el));

    // 4. Counter Animation for Stats
    let countersStarted = false;
    function startCounters() {
        if(countersStarted) return;
        countersStarted = true;
        
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Lower inc to slow and higher to speed up
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // 5. Skill Card Expansion Logic
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle expanded class
            card.classList.toggle('expanded');
            
            // Optional: Close others when opening one
            // skillCards.forEach(c => {
            //     if(c !== card) c.classList.remove('expanded');
            // });
        });
    });

});
