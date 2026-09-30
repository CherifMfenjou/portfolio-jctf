import './style.css';
import {
  stats, products, experiences,
  formations, certifications,
  internationalHubs, skillCategories, productModalData,
  trajectoryMilestones,
} from './data';
import {
  renderStats, renderProducts,
  renderExperiences, renderFormations, renderCertifications,
  renderInternationalExplorer,
  renderSkillMatrix, renderContactInteractive, renderProductModalHtml,
  renderTrajectory,
} from './render';

// ── Inject dynamic content ────────────────────────────────────
const inject = (selector: string, html: string): void => {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) el.innerHTML = html;
};

inject('#stats-grid', renderStats(stats));
inject('#trajectoire-container', renderTrajectory(trajectoryMilestones));
inject('#products-grid', renderProducts(products));
inject('#experiences-list', renderExperiences(experiences));
inject('#formations-table', renderFormations(formations));
inject('#certifications-table', renderCertifications(certifications));
inject('#competences-explorer', renderSkillMatrix(skillCategories));
inject('#international-explorer', renderInternationalExplorer(internationalHubs));
inject('#contact-interactive-area', renderContactInteractive());
inject('#product-modal-root', renderProductModalHtml());

// ── Reading Progress Bar ──────────────────────────────────────
const progressBar = document.querySelector<HTMLElement>('#reading-progress');
const updateProgressBar = (): void => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
};
window.addEventListener('scroll', updateProgressBar, { passive: true });
updateProgressBar();

// ── Back to Top Button ────────────────────────────────────────
const backToTopBtn = document.querySelector<HTMLButtonElement>('#back-to-top');
window.addEventListener('scroll', () => {
  if (backToTopBtn) {
    backToTopBtn.classList.toggle('visible', window.scrollY > 400);
  }
}, { passive: true });
backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Mobile menu ───────────────────────────────────────────────
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-trigger');
const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');

menuBtn?.addEventListener('click', () => {
  const open = !mobileNav?.classList.contains('is-open');
  mobileNav?.classList.toggle('is-open', open);
  if (mobileNav) mobileNav.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
});

mobileNav?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    mobileNav.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// ── Active nav on scroll ──────────────────────────────────────
const navLinks = document.querySelectorAll<HTMLAnchorElement>(
  ".nav-desktop > a[href^='#'], .mobile-nav a[href^='#']"
);
const sections = [...document.querySelectorAll<HTMLElement>('section[id]')];

const updateNav = (): void => {
  const scrollY = window.scrollY + 120;
  let current = '';
  sections.forEach((s) => { if (s.offsetTop <= scrollY) current = s.id; });
  navLinks.forEach((a) => {
    a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── Expertise slider ──────────────────────────────────────────
const slides = [...document.querySelectorAll<HTMLElement>('.expertise-slide')];
const dotsWrap = document.querySelector<HTMLElement>('.dots');
let slideIndex = 0;
let autoTimer: ReturnType<typeof setInterval> | null = null;

const showSlide = (i: number): void => {
  if (!slides.length) return;
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle('is-on', n === slideIndex));
  dotsWrap && [...dotsWrap.children].forEach((d, n) =>
    d.classList.toggle('is-on', n === slideIndex)
  );
};

const startAuto = (): void => {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(() => showSlide(slideIndex + 1), 5000);
};

if (slides.length && dotsWrap) {
  slides.forEach((_, n) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Expertise ${n + 1}`);
    if (n === 0) b.classList.add('is-on');
    b.addEventListener('click', () => { showSlide(n); startAuto(); });
    dotsWrap.appendChild(b);
  });

  document.querySelector('.exp-nav.prev')?.addEventListener('click', () => { showSlide(slideIndex - 1); startAuto(); });
  document.querySelector('.exp-nav.next')?.addEventListener('click', () => { showSlide(slideIndex + 1); startAuto(); });
  document.querySelector('.expertise')?.addEventListener('mouseenter', () => { if (autoTimer) clearInterval(autoTimer); });
  document.querySelector('.expertise')?.addEventListener('mouseleave', startAuto);
  startAuto();
}

// ── Counter animation ─────────────────────────────────────────
const counters = document.querySelectorAll<HTMLElement>('[data-count]');

const playCounters = (): void => {
  counters.forEach((el) => {
    const target = Number(el.dataset['count'] ?? 0);
    const start = performance.now();
    const dur = 1200;
    const ease = (t: number): number => 1 - Math.pow(1 - t, 3);
    const tick = (now: number): void => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = String(Math.round(target * ease(t)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
};

if (counters.length) {
  const io = new IntersectionObserver(
    (entries) => { if (entries.some((e) => e.isIntersecting)) { playCounters(); io.disconnect(); } },
    { threshold: 0.4 }
  );
  io.observe(counters[0]!);
}

// ── Scroll-reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll<HTMLElement>(
  '.card, .product, .exp-card, .traj-card, .trajectory-bridge-banner, .ji, .stats-grid > div, .tile, .map-pane, .hub-card, .skill-category-card, .contact-interactive-grid, .acad-card, .cert-card'
);

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s cubic-bezier(.16,1,.3,1) ${(i % 4) * 60}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${(i % 4) * 60}ms`;
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'none';
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el) => {
  revealObserver.observe(el);
});

// ── Experience filters ────────────────────────────────────────
const expFilterBtns = document.querySelectorAll<HTMLButtonElement>('.exp-filter-btn');
const expCards = document.querySelectorAll<HTMLElement>('.exp-card');

expFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    expFilterBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset['filter'] ?? 'all';

    expCards.forEach((card) => {
      const cat = card.dataset['category'];
      if (filter === 'all' || cat === filter) {
        card.style.display = 'block';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── Trajectory Timeline Filtering ─────────────────────────────
const trajFilterBtns = document.querySelectorAll<HTMLButtonElement>('.traj-filter-btn');
const trajItems = document.querySelectorAll<HTMLElement>('.traj-timeline-item');

trajFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    trajFilterBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset['trajFilter'] ?? 'all';

    trajItems.forEach((item) => {
      const continent = item.dataset['continent'];
      const matches = filter === 'all' || continent === filter;
      if (matches) {
        item.style.display = 'grid';
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'none';
        });
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ── International Hubs Explorer ───────────────────────────────
const hubTabBtns = document.querySelectorAll<HTMLButtonElement>('.hub-tab-btn');
const hubPanels = document.querySelectorAll<HTMLElement>('.hub-panel');

hubTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    hubTabBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const hubId = btn.dataset['hubId'];
    hubPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset['hub'] === hubId);
    });
  });
});

// ── Technical Skills Matrix & Live Search ─────────────────────
const skillTabBtns = document.querySelectorAll<HTMLButtonElement>('.skill-tab-btn');
const skillCards = document.querySelectorAll<HTMLElement>('.skill-category-card');
const skillSearchInput = document.querySelector<HTMLInputElement>('#skill-search-input');
const skillClearBtn = document.querySelector<HTMLButtonElement>('#skill-clear-btn');
const skillEmptyState = document.querySelector<HTMLElement>('#skill-empty-state');
const skillResetBtn = document.querySelector<HTMLButtonElement>('#skill-reset-btn');

let currentSkillCategory = 'all';
let currentSkillQuery = '';

const filterSkills = (): void => {
  let totalVisibleItems = 0;

  skillCards.forEach((card) => {
    const catId = card.dataset['categoryId'];
    const catMatches = (currentSkillCategory === 'all' || catId === currentSkillCategory);
    const rows = card.querySelectorAll<HTMLElement>('.skill-item-row');
    let cardVisibleCount = 0;

    rows.forEach((row) => {
      const text = (row.dataset['skillName'] || '').toLowerCase();
      const textMatches = !currentSkillQuery || text.includes(currentSkillQuery);

      if (catMatches && textMatches) {
        row.style.display = 'flex';
        cardVisibleCount++;
        totalVisibleItems++;
      } else {
        row.style.display = 'none';
      }
    });

    card.style.display = cardVisibleCount > 0 ? 'block' : 'none';
  });

  if (skillEmptyState) {
    skillEmptyState.hidden = totalVisibleItems > 0;
  }
};

skillTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    skillTabBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentSkillCategory = btn.dataset['category'] || 'all';
    filterSkills();
  });
});

skillSearchInput?.addEventListener('input', (e) => {
  currentSkillQuery = (e.target as HTMLInputElement).value.trim().toLowerCase();
  if (skillClearBtn) {
    skillClearBtn.hidden = currentSkillQuery.length === 0;
  }
  filterSkills();
});

skillClearBtn?.addEventListener('click', () => {
  if (skillSearchInput) {
    skillSearchInput.value = '';
    currentSkillQuery = '';
    skillClearBtn.hidden = true;
    skillSearchInput.focus();
    filterSkills();
  }
});

skillResetBtn?.addEventListener('click', () => {
  currentSkillCategory = 'all';
  currentSkillQuery = '';
  if (skillSearchInput) skillSearchInput.value = '';
  if (skillClearBtn) skillClearBtn.hidden = true;
  skillTabBtns.forEach((b) => b.classList.toggle('is-active', b.dataset['category'] === 'all'));
  filterSkills();
});

// ── Interactive Product Technical Modal / Drawer ──────────────
const modalBackdrop = document.querySelector<HTMLElement>('#product-modal-backdrop');
const modalCloseBtn = document.querySelector<HTMLButtonElement>('#modal-close-btn');
const modalContent = document.querySelector<HTMLElement>('#modal-content');
const productModalBtns = document.querySelectorAll<HTMLButtonElement>('.product-modal-btn');

const openProductModal = (slug: string): void => {
  const data = productModalData[slug];
  if (!data || !modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header-meta">
      <span class="modal-badge">${data.status}</span>
      <span class="modal-role">${data.eyebrow}</span>
    </div>
    <h2 id="modal-title" class="modal-product-title">${data.title}</h2>
    <p class="modal-tagline">${data.tagline}</p>

    <div class="modal-section">
      <h3 class="modal-section-title">Architecture &amp; Conception Système</h3>
      <ul class="modal-feature-list">
        ${data.architecture.map(a => `<li><span class="check-icon">▸</span> ${a}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Stack Technique &amp; Technologies</h3>
      <div class="modal-tech-chips">
        ${data.techStack.map(t => `<span class="modal-chip">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Modules &amp; Fonctionnalités Clés</h3>
      <ul class="modal-feature-list">
        ${data.features.map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-footer-cta">
      ${data.liveUrl ? `<a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">Accéder à la plateforme ↗</a>` : ''}
      <button type="button" class="btn btn-secondary" id="modal-close-inline">Fermer</button>
    </div>
  `;

  modalBackdrop.hidden = false;
  modalBackdrop.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    modalBackdrop.classList.add('is-open');
  });
  document.body.style.overflow = 'hidden';

  document.querySelector('#modal-close-inline')?.addEventListener('click', closeProductModal);
};

const closeProductModal = (): void => {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => {
    modalBackdrop.hidden = true;
  }, 300);
};

productModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const slug = btn.dataset['productSlug'];
    if (slug) openProductModal(slug);
  });
});

modalCloseBtn?.addEventListener('click', closeProductModal);
modalBackdrop?.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    closeProductModal();
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop && !modalBackdrop.hidden) {
    closeProductModal();
  }
});

// ── Interactive Contact Area (Copy actions & Form) ────────────
const copyBtns = document.querySelectorAll<HTMLButtonElement>('.copy-btn[data-copy]');
copyBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset['copy'] || '';
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span class="copy-text" style="color:var(--accent)">✓ Copié !</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
        }, 2200);
      } catch {
        prompt('Copiez le texte suivant :', text);
      }
    }
  });
});

const contactForm = document.querySelector<HTMLFormElement>('#portfolio-contact-form');
const formFeedback = document.querySelector<HTMLElement>('#form-feedback');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector<HTMLButtonElement>('#form-submit-btn');
  const nameInput = contactForm.querySelector<HTMLInputElement>('#form-name');
  const emailInput = contactForm.querySelector<HTMLInputElement>('#form-email');
  const messageInput = contactForm.querySelector<HTMLTextAreaElement>('#form-message');

  if (!nameInput?.value.trim() || !emailInput?.value.trim() || !messageInput?.value.trim()) {
    if (formFeedback) {
      formFeedback.hidden = false;
      formFeedback.className = 'form-feedback is-error';
      formFeedback.textContent = 'Veuillez renseigner tous les champs obligatoires (*).';
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Transmission en cours...</span>`;
  }

  setTimeout(() => {
    if (formFeedback) {
      formFeedback.hidden = false;
      formFeedback.className = 'form-feedback is-success';
      formFeedback.textContent = 'Message transmis avec succès ! Tankam Foka vous recontactera sous 24h ouvrées.';
    }
    contactForm.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Message envoyé ✓</span>`;
      setTimeout(() => {
        submitBtn.innerHTML = `<span class="submit-text">Transmettre le message</span><span class="submit-icon" aria-hidden="true">→</span>`;
      }, 3500);
    }
  }, 600);
});

// ── Floating Quick Contact Widget ─────────────────────────────
const qcWidget = document.querySelector<HTMLElement>('#quick-contact-widget');
const qcTrigger = document.querySelector<HTMLButtonElement>('#quick-contact-trigger');
const qcPopover = document.querySelector<HTMLElement>('#quick-contact-popover');
const qcQuoteBtn = document.querySelector<HTMLElement>('#qc-btn-quote');

const toggleQuickContact = (open?: boolean): void => {
  if (!qcWidget || !qcTrigger || !qcPopover) return;
  const shouldOpen = open !== undefined ? open : !qcWidget.classList.contains('is-open');

  if (shouldOpen) {
    qcPopover.removeAttribute('hidden');
    requestAnimationFrame(() => {
      qcWidget?.classList.add('is-open');
      qcTrigger?.setAttribute('aria-expanded', 'true');
      qcTrigger?.setAttribute('aria-label', 'Fermer le menu de contact');
    });
  } else {
    qcWidget.classList.remove('is-open');
    qcTrigger.setAttribute('aria-expanded', 'false');
    qcTrigger.setAttribute('aria-label', 'Ouvrir le menu de contact');
    setTimeout(() => {
      if (qcWidget && !qcWidget.classList.contains('is-open')) {
        qcPopover?.setAttribute('hidden', '');
      }
    }, 260);
  }
};

qcTrigger?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleQuickContact();
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (qcWidget && qcWidget.classList.contains('is-open')) {
    if (!qcWidget.contains(e.target as Node)) {
      toggleQuickContact(false);
    }
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && qcWidget?.classList.contains('is-open')) {
    toggleQuickContact(false);
    qcTrigger?.focus();
  }
});

// Close when Demander un devis is clicked
qcQuoteBtn?.addEventListener('click', () => {
  toggleQuickContact(false);
});

// ── Header shadow on scroll ───────────────────────────────────
const header = document.querySelector<HTMLElement>('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

