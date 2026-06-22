/**
 * navigation.js
 * VMA — New Navigation Module
 * Handles: scroll state, desktop mega/dropdown menus, mobile panel, accordions
 */

const nav = document.getElementById('nav');
if (!nav) throw new Error('Navigation: #nav not found');

let ticking = false;

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Desktop menus ────────────────────────────────────────────────────────────
const menuItems = document.querySelectorAll('.nav__item[data-menu]');
let openItem = null;
let closeTimer = null;

function openMenu(item) {
  if (openItem && openItem !== item) closeMenu(openItem);
  clearTimeout(closeTimer);
  item.classList.add('is-open');
  const trigger = item.querySelector('.nav__trigger');
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
  openItem = item;
}

function closeMenu(item) {
  item.classList.remove('is-open');
  const trigger = item.querySelector('.nav__trigger');
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
  if (openItem === item) openItem = null;
}

function scheduleClose(item) {
  closeTimer = setTimeout(() => closeMenu(item), 120);
}

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => openMenu(item));
  item.addEventListener('mouseleave', () => scheduleClose(item));

  const trigger = item.querySelector('.nav__trigger');
  if (trigger) {
    trigger.addEventListener('focus', () => openMenu(item));
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.contains('is-open') ? closeMenu(item) : openMenu(item);
      }
      if (e.key === 'Escape') closeMenu(item);
    });
  }

  const panel = item.querySelector('.nav__mega, .nav__dropdown');
  if (panel) {
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', () => scheduleClose(item));
  }
});

document.addEventListener('click', e => {
  if (openItem && !openItem.contains(e.target)) closeMenu(openItem);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && openItem) closeMenu(openItem);
});

// ── Mobile panel ─────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobilePanel = document.getElementById('mobile-panel');
let mobileOpen = false;

hamburger.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  hamburger.classList.toggle('is-open', mobileOpen);
  mobilePanel.classList.toggle('is-open', mobileOpen);
  hamburger.setAttribute('aria-expanded', String(mobileOpen));
  document.body.style.overflow = mobileOpen ? 'hidden' : '';
});

// ── Mobile accordions ─────────────────────────────────────────────────────────
document.querySelectorAll('.nav__mobile-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const group = toggle.closest('.nav__mobile-group');
    const isOpen = group.classList.contains('is-open');
    document.querySelectorAll('.nav__mobile-group.is-open').forEach(g => {
      g.classList.remove('is-open');
      g.querySelector('.nav__mobile-toggle').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      group.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});