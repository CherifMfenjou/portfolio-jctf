/* ================================================================
   JEAN CLAUDE TANKAM FOKA — Portfolio JS
   ================================================================ */

/* ── Mobile menu ─────────────────────────────────────────────── */
const menuBtn  = document.querySelector(".menu-trigger");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn && mobileNav) {
  const toggle = () => {
    const open = !mobileNav.classList.contains("is-open");
    mobileNav.classList.toggle("is-open", open);
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", toggle);
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileNav.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ── Active nav link on scroll ───────────────────────────────── */
const navLinks = document.querySelectorAll(".nav-desktop > a[href^='#'], .mobile-nav a[href^='#']");
const sections = [...document.querySelectorAll("section[id]")];

const updateActiveNav = () => {
  const scrollY = window.scrollY + 120;
  let current = "";
  sections.forEach((s) => {
    if (s.offsetTop <= scrollY) current = s.id;
  });
  navLinks.forEach((a) => {
    a.classList.toggle("is-active", a.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* ── Expertise slider ────────────────────────────────────────── */
const slides   = [...document.querySelectorAll(".expertise-slide")];
const dotsWrap = document.querySelector(".dots");
let slideIndex = 0;
let autoTimer  = null;

function showSlide(i) {
  if (!slides.length) return;
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, n) => {
    s.classList.toggle("is-on", n === slideIndex);
  });
  if (dotsWrap) {
    [...dotsWrap.children].forEach((d, n) =>
      d.classList.toggle("is-on", n === slideIndex)
    );
  }
}

function startAuto() {
  stopAuto();
  autoTimer = setInterval(() => showSlide(slideIndex + 1), 5000);
}
function stopAuto() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}

if (slides.length && dotsWrap) {
  slides.forEach((_, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Expertise ${n + 1}`);
    if (n === 0) b.classList.add("is-on");
    b.addEventListener("click", () => { showSlide(n); startAuto(); });
    dotsWrap.appendChild(b);
  });

  const prevBtn = document.querySelector(".exp-nav.prev");
  const nextBtn = document.querySelector(".exp-nav.next");

  prevBtn?.addEventListener("click", () => { showSlide(slideIndex - 1); startAuto(); });
  nextBtn?.addEventListener("click", () => { showSlide(slideIndex + 1); startAuto(); });

  // Pause on hover
  document.querySelector(".expertise")?.addEventListener("mouseenter", stopAuto);
  document.querySelector(".expertise")?.addEventListener("mouseleave", startAuto);

  startAuto();
}

/* ── Counter animation ───────────────────────────────────────── */
const counters = document.querySelectorAll("[data-count]");

const playCounters = () => {
  counters.forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const start  = performance.now();
    const dur    = 1200;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = String(Math.round(target * easeOut(t)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
};

if (counters.length) {
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        playCounters();
        io.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  io.observe(counters[0]);
}

/* ── Scroll reveal animations ────────────────────────────────── */
const style = document.createElement("style");
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
  }
  .reveal.is-visible {
    opacity: 1;
    transform: none;
  }
`;
document.head.appendChild(style);

const revealEls = document.querySelectorAll(
  ".card, .product, .exp, .case-grid article, .tl, .stats-grid > div, .tile, .map-pane"
);

revealEls.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ── Smooth header shadow on scroll ─────────────────────────── */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// Add scrolled style
const headerStyle = document.createElement("style");
headerStyle.textContent = `
  .site-header.scrolled {
    box-shadow: 0 4px 40px rgba(0,0,0,0.4);
  }
`;
document.head.appendChild(headerStyle);
