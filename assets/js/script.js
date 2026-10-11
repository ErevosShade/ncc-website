/**
 * NATIONAL CADET CORPS (NCC) — 3 JHARKHAND CTC, BIT MESRA
 * Core Client-side Scripts
 * Features:
 *  - Mobile Navigation Drawer with ARIA states & Escape dismissal
 *  - Accessibility Controls (Font-size zoom & High-contrast/Dark themes persisted in localStorage)
 *  - Activity Category Filtering with live counter
 *  - FAQ Accordion handling
 *  - Native <dialog> Modal controller for NCC Anthem
 *  - IntersectionObserver ScrollSpy navigation highlighting
 *  - Back-to-top button
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNavMenu');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', isOpen);
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close when clicking outside or clicking a nav link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // 3. Accessibility Controls (Text Size & Theme)
  const html = document.documentElement;
  const body = document.body;

  // Saved preferences
  const savedFontSize = localStorage.getItem('ncc_font_size');
  if (savedFontSize) {
    html.setAttribute('data-font-size', savedFontSize);
    document.querySelectorAll('.a11y-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === savedFontSize);
    });
  }

  const savedTheme = localStorage.getItem('ncc_theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  }

  // Text size switcher buttons
  const fontBtns = document.querySelectorAll('.a11y-btn[data-size]');
  fontBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      html.setAttribute('data-font-size', size);
      localStorage.setItem('ncc_font_size', size);
      fontBtns.forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  // Dark/High-Contrast Theme toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      let nextTheme = 'light';
      if (!currentTheme || currentTheme === 'light') {
        nextTheme = 'dark';
      } else if (currentTheme === 'dark') {
        nextTheme = 'high-contrast';
      } else {
        nextTheme = 'light';
      }

      if (nextTheme === 'light') {
        body.removeAttribute('data-theme');
        body.removeAttribute('data-contrast');
      } else if (nextTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        body.removeAttribute('data-contrast');
      } else if (nextTheme === 'high-contrast') {
        body.removeAttribute('data-theme');
        body.setAttribute('data-contrast', 'high');
      }

      localStorage.setItem('ncc_theme', nextTheme);
      themeToggleBtn.setAttribute('aria-label', `Current theme: ${nextTheme}. Click to switch theme`);
    });
  }

  // 4. Activity Filter Pills
  const filterPills = document.querySelectorAll('.filter-pill');
  const activityCards = document.querySelectorAll('.act-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.filter || 'all';

      filterPills.forEach(p => {
        const isCurrent = p === pill;
        p.classList.toggle('active', isCurrent);
        p.setAttribute('aria-pressed', String(isCurrent));
      });

      let count = 0;
      activityCards.forEach(card => {
        const matches = category === 'all' || card.dataset.category === category;
        card.hidden = !matches;
        if (matches) count++;
      });
    });
  });

  // 5. FAQ Accordion Items
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close other open items
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          const q = openItem.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // 6. Native Dialog Modal for NCC Song ("हम सब भारतीय हैं")
  const anthemModal = document.getElementById('anthemModal');
  const openAnthemBtns = document.querySelectorAll('[data-open-modal="anthemModal"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  openAnthemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (anthemModal && typeof anthemModal.showModal === 'function') {
        anthemModal.showModal();
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('dialog');
      if (modal) modal.close();
    });
  });

  if (anthemModal) {
    // Light-dismiss on backdrop click
    anthemModal.addEventListener('click', (e) => {
      const rect = anthemModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        anthemModal.close();
      }
    });
  }

  // 7. ScrollSpy: Highlight Active Nav Link
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === `#${currentId}`;
            link.classList.toggle('active', isActive);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));
  }

  // 8. Back to Top Floating Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
