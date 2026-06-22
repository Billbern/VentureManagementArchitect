/*=====================================================
Accordion Module
- FAQ accordion / expandable sections
=====================================================*/

const Accordion = (() => {

    const init = () => {
        const accordions = document.querySelectorAll('[data-accordion]');

        accordions.forEach(container => {
            const items = container.querySelectorAll('.accordion-item');

            items.forEach(item => {
                const trigger = item.querySelector('.accordion-trigger');
                const content = item.querySelector('.accordion-content');

                if (!trigger || !content) return;

                trigger.addEventListener('click', () => {
                    const isOpen = item.classList.contains('active');

                    // Close all items in this accordion
                    if (container.dataset.accordion !== 'single') {
                        items.forEach(i => {
                            i.classList.remove('active');
                            const c = i.querySelector('.accordion-content');
                            if (c) c.style.maxHeight = null;
                        });
                    }

                    if (!isOpen) {
                        item.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        item.classList.remove('active');
                        content.style.maxHeight = null;
                    }
                });
            });
        });
    };

    return { init };
})();

export default Accordion;