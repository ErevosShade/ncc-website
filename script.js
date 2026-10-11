(() => {
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const activityCards = [...document.querySelectorAll('.activity-card')];
  const activityEmpty = document.getElementById('activityEmpty');
  const year = document.getElementById('currentYear');

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const open = primaryNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      activityCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (activityEmpty) activityEmpty.hidden = visible !== 0;
    });
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  });

  // Highlight the navigation item corresponding to the visible section.
  const sections = [...document.querySelectorAll('main section[id], main section.hero')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${id}` || (id === 'main' && link.getAttribute('href') === '#top');
          link.classList.toggle('active', active);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => { if (section.id) observer.observe(section); });
  }
})();
