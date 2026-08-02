/* ===== BBA Main JS ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Brand logo ----- */
  document.querySelectorAll('a.logo').forEach(a => {
    a.setAttribute('aria-label', 'BigBrother Analytics');
    a.setAttribute('title', 'BigBrother Analytics');
    a.replaceChildren();
  });

  document.querySelectorAll('.navcta .btn-ghost, .mobile-menu-cta .btn-ghost').forEach(a => a.remove());

  /* ----- Sticky header / scrolled state ----- */
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----- Mobile nav toggle ----- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.navlinks, .nav-links');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && (navLinks || mobileMenu)) {
    toggle.addEventListener('click', () => {
      const open = mobileMenu ? mobileMenu.classList.toggle('open') : navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });
    /* close on link click */
    document.querySelectorAll('.navlinks a, .nav-links a, .mobile-menu a').forEach(a => a.addEventListener('click', () => {
      navLinks && navLinks.classList.remove('open');
      mobileMenu && mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    }));
  }

  /* ----- Active nav link ----- */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a, .nav-links a, .dropdown-menu a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const page = href.split('/').pop();
    if (page === currentPage || (currentPage === '' && page === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ----- Pricing toggle ----- */
  const priceSwitch = document.querySelector('#pricing-toggle, .switch');
  if (priceSwitch) {
    const amountNodes = document.querySelectorAll('.amount, [data-monthly]');
    const labels = document.querySelectorAll('.price-toggle span');

    priceSwitch.addEventListener('click', () => {
      priceSwitch.classList.toggle('yes');
      const isAnnual = priceSwitch.classList.contains('yes');
      amountNodes.forEach(el => {
        const monthly = el.getAttribute('data-monthly');
        const annual = el.getAttribute('data-annual');
        if (monthly && annual) el.textContent = isAnnual ? annual : monthly;
      });
      if (labels.length >= 2) {
        labels[0].classList.toggle('active', !isAnnual);
        labels[1].classList.toggle('active', isAnnual);
      }
      priceSwitch.setAttribute('aria-pressed', String(isAnnual));
    });
  }

  /* ----- FAQ accordion ----- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      /* close all */
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ----- Scroll-reveal (IntersectionObserver) ----- */
  const reveals = document.querySelectorAll('[data-animate], .reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }});
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  /* ----- Counter animation (metrics) ----- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ----- Video modal ----- */
  const videoBtns = document.querySelectorAll('[data-video]');
  const modal = document.getElementById('videoModal');
  if (modal) {
    const iframe = modal.querySelector('iframe');
    const closeBtn = modal.querySelector('.modal-close');
    videoBtns.forEach(btn => btn.addEventListener('click', () => {
      iframe.src = btn.getAttribute('data-video');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }));
    const closeModal = () => {
      modal.classList.remove('open');
      iframe.src = '';
      document.body.style.overflow = '';
    };
    closeBtn && closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  /* ----- Smooth anchor scroll ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});
