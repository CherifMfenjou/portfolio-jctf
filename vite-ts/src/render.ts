import type {
  BadgeStatus, DotVariant, JourneyColumn, Product, Experience,
  Formation, Certification, CaseStudy, Stat, InternationalHub,
  SkillCategory, TrajectoryMilestone,
} from './data';

// ── Badge status → CSS class ───────────────────────────────────
const badgeClass: Record<BadgeStatus, string> = {
  'LIVE':        'b-live',
  'DEPLOYED':    'b-live',
  'DEVELOPMENT': 'b-dev',
  'PILOT':       'b-pilot',
  'R&D':         'b-rd',
  'CONCEPT':     'b-concept',
};

// ── Dot → CSS class ───────────────────────────────────────────
const dotClass: Record<DotVariant, string> = {
  edu:     'ji-dot--edu',
  work:    'ji-dot--work',
  main:    'ji-dot--main',
  founder: 'ji-dot--founder',
};

// ── Helpers ───────────────────────────────────────────────────
export function renderBadges(badges: Array<{ status: BadgeStatus }>): string {
  return badges.map(({ status }) =>
    `<span class="badge ${badgeClass[status]}">${status}</span>`
  ).join('');
}

export function renderStats(stats: Stat[]): string {
  return stats.map(({ count, label }) => `
    <div>
      <b data-count="${count}">${count}</b>
      <span>${label.replace('\n', '<br>')}</span>
    </div>
  `).join('');
}

export function renderJourneyColumn(col: JourneyColumn): string {
  const items = col.items.map((item) => {
    const periodStr = item.highlight
      ? `${item.period} · <strong>${item.highlight}</strong>`
      : item.period;

    const tags = item.tags.map(({ label, variant }) =>
      `<span class="ji-tag ji-tag--${variant}">${label}</span>`
    ).join('');

    const tagsBlock = item.tags.length > 1
      ? `<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.65rem">${tags}</div>`
      : tags;

    return `
      <div class="ji${item.featured ? ' ji--long' : ''}">
        <div class="ji-dot ${dotClass[item.dot]}"></div>
        <div class="ji-body">
          <span class="ji-period">${periodStr}</span>
          <h4 class="ji-title">${item.title}</h4>
          <p class="ji-role">${item.role}</p>
          <p class="ji-desc">${item.desc}</p>
          ${tagsBlock}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="journey-col">
      <div class="journey-col-head">
        <div>
          <h3>${col.continent}</h3>
          <p class="journey-col-sub">${col.subtitle}</p>
        </div>
      </div>
      <div class="journey-items">${items}</div>
    </div>
  `;
}

export function renderTrajectory(milestones: TrajectoryMilestone[]): string {
  const cardsHtml = milestones.map((m, i) => {
    const periodPill = m.highlight
      ? `<span class="traj-period-pill">${m.period}</span><span class="traj-highlight-pill">${m.highlight}</span>`
      : `<span class="traj-period-pill">${m.period}</span>`;

    const stepNum = String(i + 1).padStart(2, '0');

    return `
      <div class="traj-timeline-item traj-${m.continent}${m.featured ? ' is-featured' : ''}" data-continent="${m.continent}">
        <div class="traj-marker-track" aria-hidden="true">
          <div class="traj-step-pill">${stepNum}</div>
          <div class="traj-track-line"></div>
        </div>
        <article class="traj-card">
          <div class="traj-card-top">
            <div class="traj-period-wrap">
              ${periodPill}
            </div>
            <div class="traj-meta-badges">
              <span class="traj-type-pill">${m.typeBadge}</span>
              <span class="traj-location-tag">${m.location}</span>
            </div>
          </div>

          <div class="traj-card-head">
            <h3 class="traj-company">${m.title}</h3>
            <p class="traj-role">${m.role}</p>
          </div>

          <p class="traj-desc">${m.desc}</p>
        </article>
      </div>
    `;
  }).join('');

  return `
    <div class="trajectory-wrapper">
      <!-- Passerelle Transcontinentale Header -->
      <div class="trajectory-bridge-banner">
        <div class="bridge-nodes">
          <div class="bridge-node bridge-europe">
            <div class="bridge-node-top">
              <span class="bridge-flag">🇩🇪</span>
              <span class="bridge-pole-badge">Pôle Europe · 2010 – 2022</span>
            </div>
            <h4 class="bridge-node-title">Rigueur d'Ingénierie &amp; Sûreté Critique</h4>
            <p class="bridge-node-sub">DFKI · SIKORA AG · Honeywell EMEA · 3 Diplômes Universität Bremen</p>
          </div>

          <div class="bridge-connector" aria-hidden="true">
            <div class="bridge-connector-badge">
              <span class="bridge-connector-icon">⇄</span>
              <span class="bridge-connector-text">Passerelle Europe · Afrique</span>
            </div>
          </div>

          <div class="bridge-node bridge-africa">
            <div class="bridge-node-top">
              <span class="bridge-flag">🇨🇲</span>
              <span class="bridge-pole-badge">Pôle Afrique · 2021 – Présent</span>
            </div>
            <h4 class="bridge-node-title">Entrepreneuriat &amp; Impact Numérique</h4>
            <p class="bridge-node-sub">TAG Services SARL · MOTSOA · DOG SPA · ASDO · SIBA · Transmission</p>
          </div>
        </div>

        <div class="trajectory-stats-strip">
          <div class="traj-stat-item">
            <b class="traj-stat-num">12+</b>
            <span class="traj-stat-lbl">Années d'ingénierie globale</span>
          </div>
          <div class="traj-stat-item">
            <b class="traj-stat-num">8</b>
            <span class="traj-stat-lbl">Ans grands systèmes Honeywell EMEA</span>
          </div>
          <div class="traj-stat-item">
            <b class="traj-stat-num">3</b>
            <span class="traj-stat-lbl">Diplômes Universität Bremen</span>
          </div>
          <div class="traj-stat-item">
            <b class="traj-stat-num">4</b>
            <span class="traj-stat-lbl">Solutions propriétaires conçues</span>
          </div>
        </div>
      </div>

      <!-- Filter Controls -->
      <div class="trajectory-filter-nav" role="tablist" aria-label="Filtrer la trajectoire">
        <button type="button" class="traj-filter-btn is-active" data-traj-filter="all">
          <span>Tous les jalons chronologiques</span>
          <span class="traj-count-badge">7</span>
        </button>
        <button type="button" class="traj-filter-btn" data-traj-filter="europe">
          <span>Pôle Europe (Ingénierie &amp; Systèmes)</span>
          <span class="traj-count-badge">4</span>
        </button>
        <button type="button" class="traj-filter-btn" data-traj-filter="africa">
          <span>Pôle Afrique (Création &amp; Direction)</span>
          <span class="traj-count-badge">3</span>
        </button>
      </div>

      <!-- Timeline Track -->
      <div class="trajectory-timeline" id="trajectory-timeline-track">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export function renderProducts(products: Product[]): string {
  return products.map((p) => {
    const isLogo = p.image.includes('logo-');
    const descHtml = p.desc.map((d) => `<p>${d}</p>`).join('');
    const linkHtml = p.link
      ? `<a href="${p.link.href}" target="_blank" rel="noopener" class="link-cta" style="margin:0">${p.link.label}</a>`
      : '';
    const actionsHtml = linkHtml
      ? `<div class="product-actions">${linkHtml}</div>`
      : '';

    return `
      <article class="product" id="${p.id}">
        <div class="product-media${isLogo ? ' product-media--logo' : ''}"><img src="${p.image}" alt="${p.alt}" loading="lazy"></div>
        <div class="product-body">
          <p class="eyebrow">${p.eyebrow}</p>
          <h3>${p.title}</h3>
          ${descHtml}
          ${actionsHtml}
          <p class="badges">${renderBadges(p.badges)}</p>
        </div>
      </article>
    `;
  }).join('');
}

export function renderExperiences(experiences: Experience[]): string {
  const cards = experiences.map((exp) => {
    const paras = exp.paragraphs.map((p) => `<p class="exp-para">${p}</p>`).join('');
    const highlightHtml = exp.highlight
      ? `<span class="exp-highlight-pill">${exp.highlight}</span>`
      : '';
    const featuredClass = exp.featured ? ' exp-card--featured' : '';

    return `
      <article class="exp-card${featuredClass}" data-category="${exp.category}">
        <div class="exp-card-head">
          <div class="exp-head-main">
            <div class="exp-meta-row">
              <span class="exp-company-name">${exp.company}</span>
              <span class="exp-loc-label">${exp.location}</span>
            </div>
            <h3 class="exp-role-title">${exp.role}</h3>
          </div>
          <div class="exp-badges-col">
            <span class="exp-period-pill">${exp.period}</span>
            ${highlightHtml}
          </div>
        </div>

        <div class="exp-card-content">
          ${paras}
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="exp-controls">
      <div class="exp-filters" role="tablist" aria-label="Filtrer les expériences">
        <button class="exp-filter-btn is-active" type="button" data-filter="all">Toutes (${experiences.length})</button>
        <button class="exp-filter-btn" type="button" data-filter="europe">Ingénierie &amp; Systèmes (Europe)</button>
        <button class="exp-filter-btn" type="button" data-filter="africa">Direction &amp; Entrepreneuriat (Afrique)</button>
      </div>
    </div>
    <div class="exp-list" id="exp-container">
      ${cards}
    </div>
  `;
}

export function renderFormations(formations: Formation[]): string {
  const cards = formations.map((f) => {
    return `
      <article class="acad-card">
        <div class="acad-card-top">
          <span class="acad-level-tag">${f.type}</span>
          <span class="acad-year-pill">${f.year}</span>
        </div>
        <h3 class="acad-major-title">${f.title}</h3>
        <p class="acad-inst-line">${f.institution}${f.country ? ` · ${f.country}` : ''}</p>
      </article>
    `;
  }).join('');

  return `
    <div class="acad-showcase-grid">
      ${cards}
    </div>
  `;
}

export function renderCertifications(certs: Certification[]): string {
  const cards = certs.map((c) => {
    const issuerInfo = c.issuer
      ? `<span class="cert-issuer-text">${c.issuer}${c.year ? ` · ${c.year}` : ''}</span>`
      : '';

    return `
      <article class="cert-card">
        <div class="cert-card-top">
          <span class="cert-category-tag">${c.category}</span>
          ${c.year && !c.issuer ? `<span class="cert-year-tag">${c.year}</span>` : ''}
        </div>
        <h4 class="cert-title">${c.title}</h4>
        ${issuerInfo ? `<p class="cert-issuer-line">${issuerInfo}</p>` : ''}
      </article>
    `;
  }).join('');

  return `
    <div class="cert-showcase-grid">
      ${cards}
    </div>
  `;
}

export function renderCaseStudies(cases: CaseStudy[]): string {
  const tabButtons = cases.map((c, i) => `
    <button class="case-tab-btn${i === 0 ? ' is-active' : ''}" type="button" data-case-id="${c.id}">
      <span class="case-tab-num">${c.num}</span>
      <span class="case-tab-title">${c.title}</span>
    </button>
  `).join('');

  const panels = cases.map((c, i) => {
    const tagsHtml = c.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('');
    const metricsHtml = c.metrics.map((m) => `
      <div class="case-metric-card">
        <div class="case-metric-val">${m.value}</div>
        <div class="case-metric-lbl">${m.label}</div>
      </div>
    `).join('');

    const phasesHtml = c.items.map((item) => `
      <div class="case-phase-card">
        <div class="case-phase-top">
          <span class="case-phase-badge">Phase ${item.phase}</span>
          <h4 class="case-phase-heading">${item.heading}</h4>
        </div>
        <p class="case-phase-text">${item.text}</p>
      </div>
    `).join('');

    const linkHtml = c.link
      ? `<div class="case-link-row"><a href="${c.link.href}" target="_blank" rel="noopener" class="btn btn-secondary">${c.link.label}</a></div>`
      : '';

    return `
      <article class="case-panel${i === 0 ? ' is-active' : ''}" id="case-panel-${c.id}" data-case="${c.id}">
        <div class="case-showcase">
          <div class="case-meta-col">
            <div class="case-media-frame">
              <img src="${c.image}" alt="${c.alt}" loading="lazy">
              <span class="case-category-pill">${c.category}</span>
            </div>
            <div class="case-metrics-grid">
              ${metricsHtml}
            </div>
            ${linkHtml}
          </div>
          <div class="case-content-col">
            <div class="case-header-content">
              <div class="case-eyebrow-row">
                <span class="case-badge-pill">Étude de Cas ${c.num}</span>
                <span class="case-category-label">${c.category}</span>
              </div>
              <h3 class="case-main-title">${c.title}</h3>
              <p class="case-subtitle">${c.subtitle}</p>
              <p class="case-lead-desc">${c.desc}</p>
              <div class="case-tags-row">${tagsHtml}</div>
            </div>

            <div class="case-phases-grid">
              ${phasesHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="case-wrapper">
      <nav class="case-tabs-nav" role="tablist" aria-label="Études de cas">
        ${tabButtons}
      </nav>
      <div class="case-panels-container">
        ${panels}
      </div>
    </div>
  `;
}

export function renderInternationalExplorer(hubs: InternationalHub[]): string {
  const tabs = hubs.map((h, i) => `
    <button class="hub-tab-btn${i === 0 ? ' is-active' : ''}" type="button" data-hub-id="${h.id}">
      <span class="hub-tab-city">${h.city}</span>
      ${h.code ? `<span class="hub-tab-code">${h.code}</span>` : ''}
    </button>
  `).join('');

  const panels = hubs.map((h, i) => {
    const metricsHtml = h.metrics.map((m) => `
      <div class="hub-metric-card">
        <span class="hub-metric-val">${m.value}</span>
        <span class="hub-metric-lbl">${m.label}</span>
      </div>
    `).join('');

    return `
      <article class="hub-panel${i === 0 ? ' is-active' : ''}" id="hub-panel-${h.id}" data-hub="${h.id}">
        <div class="hub-card">
          <div class="hub-header">
            <div class="hub-identity">
              <div>
                <div class="hub-location-row">
                  <h3 class="hub-city">${h.city}</h3>
                  <span class="hub-country">${h.country}</span>
                  ${h.code ? `<span class="hub-code-pill">${h.code}</span>` : ""}
                </div>
                <p class="hub-role">${h.role}</p>
                <p class="hub-org">${h.organization} · <strong>${h.period}</strong></p>
              </div>
            </div>
          </div>
          <div class="hub-body">
            <p class="hub-context">${h.context}</p>
            <div class="hub-metrics-grid">
              ${metricsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="hub-explorer">
      <nav class="hub-nav" role="tablist" aria-label="Hubs internationaux">
        ${tabs}
      </nav>
      <div class="hub-panels-wrap">
        ${panels}
      </div>
    </div>
  `;
}

export function renderSkillMatrix(categories: SkillCategory[]): string {
  const tabs = `
    <div class="skill-filter-bar">
      <div class="skill-search-wrap">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="search" id="skill-search-input" class="skill-search-input" placeholder="Filtrer une compétence ou technologie (ex: Python, RAMS, PLC, Docker, VDGS)..." aria-label="Rechercher une compétence">
        <button type="button" id="skill-clear-btn" class="skill-clear-btn" aria-label="Effacer la recherche" hidden>×</button>
      </div>
      <div class="skill-category-tabs" role="tablist">
        <button class="skill-tab-btn is-active" type="button" data-category="all">Toutes les compétences</button>
        ${categories.map(c => `
          <button class="skill-tab-btn" type="button" data-category="${c.id}">${c.name}</button>
        `).join('')}
      </div>
    </div>
  `;

  const cards = categories.map((cat) => {
    const itemsHtml = cat.skills.map((s) => `
      <div class="skill-item-row" data-skill-name="${s.name.toLowerCase()} ${s.context.toLowerCase()}">
        <div class="skill-item-info">
          <span class="skill-item-name">${s.name}</span>
          <span class="skill-item-context">${s.context}</span>
        </div>
        <span class="skill-level-badge level-${s.level.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">${s.level}</span>
      </div>
    `).join('');

    return `
      <div class="skill-category-card" data-category-id="${cat.id}">
        <div class="skill-cat-head">
          <h3 class="skill-cat-title">${cat.name}</h3>
          <p class="skill-cat-desc">${cat.description}</p>
        </div>
        <div class="skill-items-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="skill-matrix-component">
      ${tabs}
      <div class="skill-categories-grid" id="skill-grid">
        ${cards}
      </div>
      <div id="skill-empty-state" class="skill-empty-state" hidden>
        <p>Aucune compétence ne correspond à votre recherche.</p>
        <button type="button" class="btn btn-secondary" id="skill-reset-btn">Réinitialiser les filtres</button>
      </div>
    </div>
  `;
}

export function renderContactInteractive(): string {
  return `
    <div class="contact-interactive-grid">
      <div class="contact-info-card">
        <p class="eyebrow">Coordonnées Directes</p>
        <h3>Canaux de communication</h3>
        <p class="lead" style="font-size:0.95rem;margin-bottom:1.5rem">Copiez nos coordonnées en un clic ou transmettez directement les spécifications de votre démarche via le formulaire ci-contre.</p>
        
        <div class="contact-quick-actions">
          <div class="contact-copy-item">
            <div class="contact-copy-left">
              <div>
                <span class="contact-copy-label">Email professionnel</span>
                <span class="contact-copy-value">tankam.foka@tag-service.com</span>
              </div>
            </div>
            <button type="button" class="copy-btn" data-copy="tankam.foka@tag-service.com" aria-label="Copier l'email">
              <span class="copy-text">Copier</span>
            </button>
          </div>

          <div class="contact-copy-item">
            <div class="contact-copy-left">
              <div>
                <span class="contact-copy-label">Téléphone / WhatsApp</span>
                <span class="contact-copy-value">+237 698 943 863</span>
              </div>
            </div>
            <button type="button" class="copy-btn" data-copy="+237698943863" aria-label="Copier le téléphone">
              <span class="copy-text">Copier</span>
            </button>
          </div>

          <div class="contact-copy-item">
            <div class="contact-copy-left">
              <div>
                <span class="contact-copy-label">Siège Opérationnel</span>
                <span class="contact-copy-value">Yaoundé, Cameroun · TAG Services SARL</span>
              </div>
            </div>
            <a href="https://tag-service.com" target="_blank" rel="noopener" class="copy-btn" style="text-decoration:none">
              <span>Visiter</span>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form-card">
        <p class="eyebrow">Formulaire de Contact</p>
        <h3>Transmettre votre besoin</h3>
        <form id="portfolio-contact-form" class="portfolio-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="form-name">Nom &amp; Prénom <span class="required">*</span></label>
              <input type="text" id="form-name" name="name" required placeholder="Ex: Mfenjou Anas Cherif">
            </div>
            <div class="form-group">
              <label for="form-email">Adresse Email <span class="required">*</span></label>
              <input type="email" id="form-email" name="email" required placeholder="contact@organisation.com">
            </div>
          </div>
          
          <div class="form-group">
            <label for="form-subject">Domaine de la sollicitation</label>
            <select id="form-subject" name="subject">
              <option value="systems">Ingénierie Systèmes Critiques &amp; VDGS</option>
              <option value="cyber">Audit de Cybersécurité &amp; Résilience Réseau</option>
              <option value="data">Data Engineering &amp; Plateforme ASDO</option>
              <option value="software">Développement de Plateforme Métier (MOTSOA, SIBA...)</option>
              <option value="rd">Recherche R&amp;D ou Enseignement Universitaire</option>
              <option value="other">Autre projet technologique</option>
            </select>
          </div>

          <div class="form-group">
            <label for="form-message">Spécifications du besoin <span class="required">*</span></label>
            <textarea id="form-message" name="message" rows="4" required placeholder="Présentez succinctement votre projet, les délais souhaités ou les contraintes techniques..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary form-submit-btn" id="form-submit-btn">
            <span class="submit-text">Transmettre le message</span>
            <span class="submit-icon" aria-hidden="true">→</span>
          </button>
          
          <div id="form-feedback" class="form-feedback" hidden></div>
        </form>
      </div>
    </div>
  `;
}

export function renderProductModalHtml(): string {
  return `
    <div id="product-modal-backdrop" class="modal-backdrop" aria-hidden="true" hidden>
      <div class="modal-drawer" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" id="modal-close-btn" class="modal-close-btn" aria-label="Fermer la fiche technique">✕</button>
        <div id="modal-content" class="modal-content"></div>
      </div>
    </div>
  `;
}
