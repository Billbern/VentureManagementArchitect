/*=====================================================
Cursor Module
- Custom cursor effects (for hero sections)
- Not intrusive - only on large viewports
=====================================================*/

const Cursor = (() => {

    let cursorFollower = null;

    const init = () => {
        // Only enable on devices with fine pointers (mouse)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursor = document.createElement('div');
        cursor.className = 'cursor-follower';
        document.body.appendChild(cursor);
        cursorFollower = cursor;

        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        // Enlarge on hoverable elements
        const hoverTargets = document.querySelectorAll('a, button, .card, .capability, .industry-grid article');

        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    };

    return { init };
})();

export default Cursor;