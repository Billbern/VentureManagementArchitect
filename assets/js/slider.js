/*=====================================================
Slider Module
- Swiper-ready slider architecture
- For testimonials, case studies, and carousels
=====================================================*/

const Slider = (() => {

    let currentSlide = 0;
    let slides = [];
    let autoPlayInterval = null;

    /**
     * Initialize a slider on a given container
     */
    const initSlider = (container) => {
        slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');
        const dots = container.querySelectorAll('.slider-dot');

        if (!slides.length) return;

        const goToSlide = (index) => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');

            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => goToSlide(i));
        });

        // Auto-play
        const autoplayDelay = parseInt(container.dataset.autoplay, 10) || 0;

        if (autoplayDelay > 0) {
            setInterval(() => goToSlide(currentSlide + 1), autoplayDelay);
        }

        // Initialize first slide
        goToSlide(0);
    };

    const init = () => {
        const sliders = document.querySelectorAll('[data-slider]');
        sliders.forEach(slider => initSlider(slider));
    };

    return { init };
})();

export default Slider;