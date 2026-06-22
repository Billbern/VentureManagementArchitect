/*=====================================================
Scroll Module
- Smooth scroll reveal animations using IntersectionObserver
- Parallax effects
=====================================================*/

const Scroll = (() => {

    /**
     * Initialize scroll reveal animations
     */
    const initReveal = () => {
        const revealElements = document.querySelectorAll('.reveal');

        if (!revealElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            // If element is already in view on init, activate immediately
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            } else {
                observer.observe(el);
            }
        });
    };

    /**
     * Initialize parallax effects on elements with data-parallax attribute
     */
    const initParallax = () => {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.3;
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    const offset = (window.innerHeight - rect.top) * speed;
                    el.style.transform = `translateY(${offset * 0.1}px)`;
                }
            });
        }, { passive: true });
    };

    const init = () => {
        initReveal();
        initParallax();
    };

    return { init };
})();

export default Scroll;