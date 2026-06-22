/*=====================================================
Hero Module
- Hero section animations
- Typewriter or text reveal effects
=====================================================*/

const Hero = (() => {

    const init = () => {
        const heroTitle = document.querySelector('.hero-space .display');
        if (!heroTitle) return;

        // Hero is immediately visible on page load — no hide animation
        heroTitle.classList.add('reveal', 'fade-up', 'active');
    };

    return { init };
})();

export default Hero;