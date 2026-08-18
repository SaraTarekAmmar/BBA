(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeLabel = document.querySelector('.theme-label');
  const tabs = [...document.querySelectorAll('[data-console-tab]')];
  const images = [...document.querySelectorAll('[data-console-image]')];
  const previewLabel = document.querySelector('[data-preview-label]');
  const labels = { dashboard: 'Dashboard overview', news: 'Live news intelligence', video: 'Video analytics workspace', reports: 'Board-ready reporting', wall: 'Multi-screen video wall' };

  const setTheme = (theme) => {
    body.classList.toggle('light-theme', theme === 'light');
    if (themeLabel) themeLabel.textContent = theme === 'light' ? 'Light mode' : 'Dark mode';
    localStorage.setItem('bba-theme', theme);
  };

  setTheme(localStorage.getItem('bba-theme') || 'dark');

  themeToggle?.addEventListener('click', () => setTheme(body.classList.contains('light-theme') ? 'dark' : 'light'));

  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 16), { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up').forEach((element) => observer.observe(element));

  const selectScreen = (name) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.consoleTab === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    images.forEach((image) => image.classList.toggle('active', image.dataset.consoleImage === name));
    if (previewLabel) previewLabel.textContent = labels[name] || 'Product workspace';
  };

  tabs.forEach((tab) => tab.addEventListener('click', () => selectScreen(tab.dataset.consoleTab)));

  window.bbaSuccessButton = (button, message) => {
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = `<span>✓</span> ${message}`;
    button.disabled = true;
    window.setTimeout(() => {
      button.innerHTML = original;
      button.disabled = false;
    }, 2600);
  };
})();
