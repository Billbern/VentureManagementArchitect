/*=====================================================
Venture Management Architect
Main Application Entry Point
- Initializes all modules
- Version 1.0
=====================================================*/

document.addEventListener('DOMContentLoaded', () => {

    // Dynamically import modules
    import('./scroll.js').then(mod => mod.default.init()).catch(() => {});
    import('./hero.js').then(mod => mod.default.init()).catch(() => {});
    import('./counter.js').then(mod => mod.default.init()).catch(() => {});
    import('./slider.js').then(mod => mod.default.init()).catch(() => {});
    import('./cursor.js').then(mod => mod.default.init()).catch(() => {});
    import('./accordion.js').then(mod => mod.default.init()).catch(() => {});

    console.log('VMA: Application initialized.');
});