/*=====================================================
Counter Module
- Animated number counters using IntersectionObserver
=====================================================*/

const Counter = (() => {

    /**
     * Animate a single counter element
     */
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = parseInt(el.dataset.duration, 10) || 2000;
        const startTime = performance.now();

        // Add + sign for numbers that should display with it
        const prefix = el.dataset.prefix || '';

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            el.textContent = `${prefix}${current}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = `${prefix}${target}${suffix}`;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const init = () => {
        const counters = document.querySelectorAll('[data-counter]');

        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateCounter(el);
            } else {
                observer.observe(el);
            }
        });
    };

    return { init };
})();

export default Counter;