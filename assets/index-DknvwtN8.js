(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{count:8,label:`Années Honeywell,
ingénierie système`},{count:3,label:`Diplômes
Universität Bremen`},{count:2,label:`Continents :
Europe et Afrique`}],t=[{id:`motsoa`,eyebrow:`MOTSOA · Automotive`,title:`Mettre de l'ordre dans le marché automobile.`,image:`/assets/logo-motsoa.png`,alt:`Plateforme MOTSOA : Vendez Achetez en toute fiabilité`,desc:[`Marketplace automobile au Cameroun : achat, vente, location et importation de véhicules et pièces certifiés.`],link:{href:`https://motsoa.com`,label:`motsoa.com →`},badges:[{status:`DEVELOPMENT`},{status:`PILOT`}]},{id:`dogspa`,eyebrow:`DOG SPA · Pet Services`,title:`Digitalisation d'une activité de services de proximité.`,image:`/assets/logo-dogspa.png`,alt:`Centre et plateforme DOG SPA Yaoundé`,desc:[`Digitalisation des soins et du toilettage animalier à Yaoundé : présence web, réservations et gestion d'activité.`],link:{href:`https://dogspa-cm.com`,label:`dogspa-cm.com →`},badges:[{status:`LIVE`},{status:`DEPLOYED`}]},{id:`asdo`,eyebrow:`ASDO · AI / Data`,title:`Des données vers la décision.`,image:`/assets/asdo.jpg`,alt:`Tableaux de bord analytiques et décisionnels ASDO`,desc:[`Plateforme d'aide à la décision par la data : transformation des flux d'information bruts en indicateurs actionnables pour dirigeants.`],badges:[{status:`R&D`},{status:`DEVELOPMENT`}]},{id:`siba`,eyebrow:`SIBA · Business Management`,title:`Digitaliser l'activité commerciale.`,image:`/assets/siba.jpg`,alt:`Digitalisation commerciale et point de vente SIBA`,desc:[`Gestion commerciale et point de vente (POS) tactile conçue pour fluidifier les stocks, encaissements et marges sur le terrain.`],badges:[{status:`DEVELOPMENT`},{status:`CONCEPT`}]}],n=[{id:`tag-services`,company:`TAG Services SARL`,period:`2021 – Présent`,role:`Fondateur & Directeur Général`,location:`Yaoundé, Cameroun`,category:`africa`,featured:!0,highlight:`Direction & Entrepreneuriat`,skills:[`MOTSOA`,`ASDO`,`SIBA`,`Gouvernance IT`,`Transformation Digitale`],paragraphs:[`Direction générale et pilotage des plateformes numériques propriétaires (MOTSOA, ASDO, SIBA) et conseil stratégique pour entreprises.`]},{id:`honeywell`,company:`Honeywell`,period:`2014 – 2022 · 8 ans`,role:`Lead Application & System Engineer`,location:`Bremen, Allemagne · International`,category:`europe`,featured:!0,highlight:`8 ans · Systèmes Critiques`,skills:[`Sûreté RAMS`,`Systèmes VDGS`,`Beckhoff TwinCAT`,`TwinSAFE`,`Zürich · Amsterdam · Istanbul`],paragraphs:[`Ingénierie de systèmes critiques : déploiement de guidage aéroportuaire VDGS (ZRH, AMS, IST) et programmation d'automatismes de sécurité Beckhoff (TwinCAT / TwinSAFE).`]},{id:`digital-college`,company:`Digital College Yaoundé`,period:`2022 – 2024`,role:`Enseignant & Formateur Technique`,location:`Yaoundé, Cameroun`,category:`africa`,skills:[`Cybersécurité`,`Architectures Réseaux`,`Administration Système`],paragraphs:[`Enseignement supérieur en cybersécurité, architectures réseau et administration des systèmes d'information.`]},{id:`sikora`,company:`SIKORA AG`,period:`2012 – 2014`,role:`Software & System Testing Engineer`,location:`Bremen, Allemagne`,category:`europe`,skills:[`Tests Logiciels`,`Bancs de Métrologie`,`Validation Industrielle`],paragraphs:[`Qualification logicielle et bancs de mesure pour équipements industriels de haute précision.`]},{id:`dfki`,company:`DFKI (Centre Allemand de Recherche en IA)`,period:`2010 – 2012`,role:`Assistant Technique & Tutorat`,location:`Bremen, Allemagne`,category:`europe`,skills:[`Algorithmique`,`Intelligence Artificielle`,`Recherche Appliquée`],paragraphs:[`Appui algorithmique et tutorat académique au sein de l'institut allemand de recherche en intelligence artificielle.`]}],r=[{year:`2023`,type:`Master of Science (M.Sc.)`,title:`Cybersecurity`,institution:`Universität Bremen`,country:`Allemagne`},{year:`2016`,type:`Master of Science (M.Sc.)`,title:`Software and Embedded Systems`,institution:`Universität Bremen`,country:`Allemagne`},{year:`2013`,type:`Bachelor of Science (B.Sc.)`,title:`System Engineering`,institution:`Universität Bremen`,country:`Allemagne`}],i=[{category:`Certification`,title:`TwinCAT TR1012`,issuer:`Beckhoff Automation`},{category:`Certification`,title:`TwinSAFE TR3066`,issuer:`Beckhoff Automation`},{category:`Formation`,title:`Big Data Management`,issuer:`CS Visor`,year:`2023`},{category:`Formation professionnelle`,title:`Project Management & Teamwork`},{category:`Formation professionnelle`,title:`Public Relations`}],a=[{id:`zurich`,city:`Zürich`,country:`Suisse`,flag:``,code:`ZRH`,role:`Ingénieur Systèmes & Validation VDGS`,organization:`Honeywell Building Solutions`,period:`2014 – 2022`,context:`Mise en service des systèmes d'accostage laser VDGS (Gates A) selon les standards critiques de sûreté aéroportuaire suisse.`,metrics:[{value:`Gates A`,label:`Portes d'embarquement équipées`},{value:`RAMS`,label:`Fiabilité et sûreté certifiées`},{value:`24/7`,label:`Haute disponibilité continue`}],tags:[`Aéroport Zürich`,`VDGS`,`Sûreté RAMS`,`Optique & Laser`]},{id:`amsterdam`,city:`Amsterdam`,country:`Pays-Bas`,flag:``,code:`AMS`,role:`Intégration & Protocoles d'Essais`,organization:`Honeywell HBS`,period:`2016 – 2021`,context:`Essais d'interopérabilité passerelles-sol et qualification des calculateurs de guidage sur le hub de Schiphol.`,metrics:[{value:`Schiphol`,label:`Hub international majeur`},{value:`ICAO`,label:`Conformité aéronautique mondiale`},{value:`0 fail`,label:`Tolérance aux pannes critique`}],tags:[`Schiphol C8`,`Passerelles`,`Interopérabilité`,`Tests Sol`]},{id:`istanbul`,city:`Istanbul`,country:`Turquie`,flag:``,code:`IST`,role:`Déploiement & Validation Grand Hub`,organization:`Honeywell`,period:`2018 – 2022`,context:`Déploiement grande échelle des équipements VDGS temps réel sur le mégaprojet du nouvel aéroport d'Istanbul.`,metrics:[{value:`Mégaprojet`,label:`Nouvel aéroport international IST`},{value:`Scale`,label:`Déploiement grande échelle`},{value:`Temps Réel`,label:`Supervision centralisée`}],tags:[`Istanbul IST`,`Mégaprojet`,`Temps Réel`,`Validation`]},{id:`bremen`,city:`Brême`,country:`Allemagne`,flag:``,code:`BRE`,role:`Formation Master of Science & Recherche`,organization:`Universität Bremen · DFKI · SIKORA`,period:`2007 – 2014`,context:`Double Master of Science à l'Universität Bremen, recherche en IA au DFKI et métrologie industrielle chez SIKORA AG.`,metrics:[{value:`M.Sc`,label:`Diplôme Master of Science`},{value:`DFKI`,label:`Centre IA allemand`},{value:`SIKORA`,label:`Instrumentation industrielle`}],tags:[`Univ Bremen`,`DFKI IA`,`SIKORA AG`,`Automatisme`]},{id:`yaounde`,city:`Yaoundé`,country:`Cameroun`,flag:``,code:``,role:`Fondateur & Directeur Général`,organization:`TAG Services SARL`,period:`2021 – Présent`,context:`Direction de TAG Services SARL, déploiement des plateformes MOTSOA, DOG SPA, ASDO, SIBA et enseignement supérieur.`,metrics:[{value:`4 Solutions`,label:`Écosystème technologique`},{value:`Entreprise`,label:`Siège TAG Services Yaoundé`},{value:`Enseignement`,label:`Partage académique (IUC, Univ)`}],tags:[`TAG Services`,`MOTSOA`,`DOG SPA`,`ASDO / SIBA`,`Enseignement`]}],o=[{id:`cyber`,name:`Cybersécurité & Réseaux`,icon:``,description:`Protection des systèmes d'information, architectures réseau résilientes et gouvernance des risques numériques.`,skills:[{name:`Sécurité Réseau (Firewalls, VPN, DMZ)`,level:`Expert`,context:`Infrastructures critiques d'entreprise`},{name:`Protocoles TCP/IP, VLAN, OSPF, BGP`,level:`Avancé`,context:`Routage industriel et segmentation`},{name:`Analyse de Vulnérabilités & Audit SSI`,level:`Avancé`,context:`Évaluation préventive des menaces`},{name:`Gestion des Risques & Politiques SI`,level:`Maîtrisé`,context:`Gouvernance et plans de continuité`}]},{id:`systems`,name:`Ingénierie Systèmes & Automatisme`,icon:``,description:`Conception, modélisation des exigences, sûreté de fonctionnement (RAMS) et automatisme industriel.`,skills:[{name:`Systèmes d'Accostage Aéroportuaire (VDGS)`,level:`Expert`,context:`8 ans chez Honeywell (ZRH, AMS, IST)`},{name:`Méthodologie RAMS & Fiabilité Système`,level:`Expert`,context:`Calculs MTTF, MTBF, disponibilité continue`},{name:`Automates Programmables (PLC / Beckhoff)`,level:`Avancé`,context:`TwinCAT 2/3, TwinSAFE, bus de terrain`},{name:`Modélisation UML / SysML & Traçabilité`,level:`Avancé`,context:`Matrices d'exigences et cycles en V`}]},{id:`software`,name:`Développement & Architecture Web`,icon:``,description:`Conception de plateformes digitales modulaires, architectures backend robustes et interfaces web réactives.`,skills:[{name:`Python / Django / FastEngine`,level:`Avancé`,context:`Services backend, scripts et automatisation`},{name:`TypeScript & JavaScript moderne`,level:`Avancé`,context:`Frontends réactifs et typage strict`},{name:`PHP / SQL / PostgreSQL / MySQL`,level:`Avancé`,context:`Gestion de données relationnelles et e-commerce`},{name:`Docker & Administration Linux`,level:`Maîtrisé`,context:`Déploiements conteneurisés et serveurs cloud`}]},{id:`data`,name:`Data & Intelligence Artificielle`,icon:``,description:`Valorisation de la donnée d'entreprise, pipelines analytiques et outils d'aide à la décision stratégique.`,skills:[{name:`Pipelines de Données & ETL Métiers`,level:`Avancé`,context:`Ingestion, normalisation et consolidation`},{name:`Tableaux de Bord Décisionnels & KPI`,level:`Avancé`,context:`Plateforme ASDO et Business Intelligence`},{name:`Modèles Décisionnels & Algorithmes IA`,level:`Maîtrisé`,context:`Assistance intelligente sans boîte noire`},{name:`Enseignement IA & Algorithmique`,level:`Expert`,context:`Cours universitaires (IUC, instituts)`}]}],s={motsoa:{id:`motsoa`,title:`Plateforme Automobile MOTSOA`,eyebrow:`Place de marché & services automobiles au Cameroun`,tagline:`Vendez, achetez et importez vos véhicules en toute fiabilité et transparence.`,image:`/assets/logo-motsoa.png`,status:`EN PRODUCTION (V1 LIVE)`,liveUrl:`https://motsoa.com`,architecture:[`Architecture web moderne hébergée sur cloud sécurisé`,`Moteur de recherche multicritère par marque, modèle, budget, boîte et énergie`,`Espace marchand certifié pour concessionnaires et importateurs`,`Système de modération préventive anti-fraude`],techStack:[`TypeScript`,`PHP / Laravel`,`MySQL`,`TailwindCSS / CSS3`,`Docker`,`REST API`],features:[`Petites annonces de véhicules vérifiés (Douala, Yaoundé et tout le Cameroun)`,`Catalogue de pièces détachées et accessoires d'origine`,`Service d'assistance et commandes directes d'importation depuis l'Europe`,`Filtrage dynamique instantané sans rechargement de page`]},dogspa:{id:`dogspa`,title:`Centre & Solution DOG SPA`,eyebrow:`Digitalisation des soins et services animaliers`,tagline:`Premier centre moderne de toilettage, soins et bien-être canin à Yaoundé.`,image:`/assets/logo-dogspa.png`,status:`DÉPLOYÉ & OPÉRATIONNEL`,liveUrl:`https://dogspa-cm.com`,architecture:[`Site vitrine responsive connecté au standard local de Yaoundé`,`Module de réservation et prise de rendez-vous en ligne`,`Catalogue interactif des prestations avec tarifs transparents`,`Intégration WhatsApp Business pour validation instantanée`],techStack:[`Web moderne`,`Catalogue dynamique`,`SEO local`,`Intégration messagerie`],features:[`Toilettage professionnel, coupe et bain thérapeutique`,`Soins d'hygiène et bien-être canin spécialisé`,`Système de localisation et prise de contact rapide`,`Gestion de la relation client digitalisée`]},asdo:{id:`asdo`,title:`Solution Décisionnelle ASDO`,eyebrow:`Data Engineering & Intelligence Artificielle`,tagline:`Transformer les flux de données brutes en insights actionnables pour les dirigeants.`,image:`/assets/asdo.jpg`,status:`R&D ET DÉVELOPPEMENT AVANCÉ`,liveUrl:`https://tag-service.com`,architecture:[`Connecteurs multi-sources pour bases de données et fichiers métiers`,`Chaîne d'ingestion et de normalisation automatisée (ETL)`,`Moteur d'agrégation statistique et détection d'anomalies`,`Tableaux de bord interactifs orientés prise de décision`],techStack:[`Python`,`Pandas`,`PostgreSQL`,`Data Visualization`,`Algorithmes prédictifs`],features:[`Rapports exécutifs synthétiques sans surcharge technique`,`Alertes proactives sur indicateurs clés (ventes, stocks, coûts)`,`Modélisation de scénarios prévisionnels`,`Confidentialité stricte et hébergement sécurisé des données`]},siba:{id:`siba`,title:`Solution SIBA`,eyebrow:`Gestion Commerciale & Point de Vente`,tagline:`Remplacer le papier et le suivi oral par une gestion commerciale claire sur le terrain.`,image:`/assets/siba.jpg`,status:`DÉVELOPPEMENT & CONCEPT TESTÉ`,liveUrl:`https://tag-service.com`,architecture:[`Application web et mobile légère adaptée aux connexions variables`,`Synchronisation des ventes et des stocks en temps réel`,`Interface point de vente (POS) ultra-rapide pour caissiers et vendeurs`,`Console d'administration accessible aux gérants à distance`],techStack:[`TypeScript`,`API REST`,`Bases relationnelles`,`Interface tactile réactive`],features:[`Gestion des stocks, alertes de rupture et inventaires rapides`,`Enregistrement des ventes quotidiennes et calcul automatique des marges`,`Suivi des créances clients et règlements fournisseurs`,`Réduction des erreurs de caisse et pertes non justifiées`]}},ee=[{id:`dfki`,period:`2010 – 2012`,continent:`europe`,location:`Brême, Allemagne`,flag:``,title:`DFKI · Institut Allemand de Recherche en IA`,role:`Tutoring & Student Assistance en IA`,typeBadge:`Recherche & IA`,desc:`Recherche appliquée et tutorat académique en modélisation et intelligence artificielle.`,achievements:[],tags:[`DFKI`,`IA Appliquée`,`Brême`]},{id:`sikora`,period:`2012 – 2014`,continent:`europe`,location:`Brême, Allemagne`,flag:``,title:`SIKORA AG`,role:`Software & System Testing Engineer`,typeBadge:`Industrie & Métrologie`,desc:`Qualification logicielle et bancs de tests pour instrumentation industrielle de précision.`,achievements:[],tags:[`SIKORA AG`,`Métrologie`,`Tests Systèmes`]},{id:`bremen-studies`,period:`2013 / 2016 / 2023`,highlight:`3 Diplômes d'État`,continent:`europe`,location:`Universität Bremen, Allemagne`,flag:``,title:`Universität Bremen`,role:`BSc Ingénierie · MSc Systèmes Embarqués · MSc Cybersécurité`,typeBadge:`Formation d'Élite`,desc:`Double Master of Science : Systèmes Embarqués (2016) & Cybersécurité (2023).`,achievements:[],tags:[`Univ Bremen`,`MSc Systèmes Embarqués`,`MSc Cybersécurité`]},{id:`honeywell`,period:`2014 – 2022`,highlight:`8 ans · Pilier EMEA`,continent:`europe`,location:`Bremen · Zürich · Amsterdam · Istanbul`,flag:``,title:`Honeywell Building Solutions`,role:`Lead Application & System Engineer · Sûreté Critique · VDGS`,typeBadge:`Multinationale & Systèmes Critiques`,featured:!0,desc:`Systèmes d'accostage avionique VDGS (Zürich, Amsterdam, Istanbul) et sûreté RAMS.`,achievements:[],tags:[`Honeywell`,`Systèmes VDGS`,`Sûreté RAMS`,`TwinSAFE`]},{id:`tag-services`,period:`2021 – Présent`,highlight:`Fondation & Leadership`,continent:`africa`,location:`Yaoundé, Cameroun`,flag:``,title:`TAG Services SARL`,role:`Fondateur & Directeur Général`,typeBadge:`Entrepreneuriat & Direction`,featured:!0,desc:`Direction générale, ingénierie logicielle et développement des solutions propriétaires.`,achievements:[],tags:[`TAG Services`,`Fondateur & DG`,`Direction Technique`]},{id:`teaching`,period:`2022 – 2024`,continent:`africa`,location:`Yaoundé, Cameroun`,flag:``,title:`Digital College & Instituts Universitaires`,role:`Enseignant en Cybersécurité & Architectures Systèmes`,typeBadge:`Transmission Académique`,desc:`Enseignement supérieur en cybersécurité opérationnelle, protocoles et défense des SI.`,achievements:[],tags:[`Enseignement`,`Cybersécurité`,`Mentorat`]},{id:`solutions-scale`,period:`2024 – Présent`,highlight:`Déploiement Opérationnel`,continent:`africa`,location:`Yaoundé · Douala · Cameroun`,flag:``,title:`Écosystème Produits TAG`,role:`Industrialisation des Plateformes Propriétaires`,typeBadge:`Plateformes Métiers`,desc:`Déploiement à grande échelle des plateformes MOTSOA, DOG SPA, ASDO et SIBA.`,achievements:[],tags:[`MOTSOA`,`DOG SPA`,`ASDO`,`SIBA`]}],c={LIVE:`b-live`,DEPLOYED:`b-live`,DEVELOPMENT:`b-dev`,PILOT:`b-pilot`,"R&D":`b-rd`,CONCEPT:`b-concept`};function l(e){return e.map(({status:e})=>`<span class="badge ${c[e]}">${e}</span>`).join(``)}function u(e){return e.map(({count:e,label:t})=>`
    <div>
      <b data-count="${e}">${e}</b>
      <span>${t.replace(`
`,`<br>`)}</span>
    </div>
  `).join(``)}function d(e){return`
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
        ${e.map((e,t)=>{let n=e.highlight?`<span class="traj-period-pill">${e.period}</span><span class="traj-highlight-pill">${e.highlight}</span>`:`<span class="traj-period-pill">${e.period}</span>`,r=String(t+1).padStart(2,`0`);return`
      <div class="traj-timeline-item traj-${e.continent}${e.featured?` is-featured`:``}" data-continent="${e.continent}">
        <div class="traj-marker-track" aria-hidden="true">
          <div class="traj-step-pill">${r}</div>
          <div class="traj-track-line"></div>
        </div>
        <article class="traj-card">
          <div class="traj-card-top">
            <div class="traj-period-wrap">
              ${n}
            </div>
            <div class="traj-meta-badges">
              <span class="traj-type-pill">${e.typeBadge}</span>
              <span class="traj-location-tag">${e.location}</span>
            </div>
          </div>

          <div class="traj-card-head">
            <h3 class="traj-company">${e.title}</h3>
            <p class="traj-role">${e.role}</p>
          </div>

          <p class="traj-desc">${e.desc}</p>
        </article>
      </div>
    `}).join(``)}
      </div>
    </div>
  `}function f(e){return e.map(e=>{let t=e.desc.map(e=>`<p>${e}</p>`).join(``),n=e.link?`<a href="${e.link.href}" target="_blank" rel="noopener" class="link-cta" style="margin:0">${e.link.label}</a>`:``,r=n?`<div class="product-actions">${n}</div>`:``;return`
      <article class="product" id="${e.id}">
        <div class="product-media"><img src="${e.image}" alt="${e.alt}" loading="lazy"></div>
        <div class="product-body">
          <p class="eyebrow">${e.eyebrow}</p>
          <h3>${e.title}</h3>
          ${t}
          ${r}
          <p class="badges">${l(e.badges)}</p>
        </div>
      </article>
    `}).join(``)}function te(e){let t=e.map(e=>{let t=e.paragraphs.map(e=>`<p class="exp-para">${e}</p>`).join(``),n=e.highlight?`<span class="exp-highlight-pill">${e.highlight}</span>`:``;return`
      <article class="exp-card${e.featured?` exp-card--featured`:``}" data-category="${e.category}">
        <div class="exp-card-head">
          <div class="exp-head-main">
            <div class="exp-meta-row">
              <span class="exp-company-name">${e.company}</span>
              <span class="exp-loc-label">${e.location}</span>
            </div>
            <h3 class="exp-role-title">${e.role}</h3>
          </div>
          <div class="exp-badges-col">
            <span class="exp-period-pill">${e.period}</span>
            ${n}
          </div>
        </div>

        <div class="exp-card-content">
          ${t}
        </div>
      </article>
    `}).join(``);return`
    <div class="exp-controls">
      <div class="exp-filters" role="tablist" aria-label="Filtrer les expériences">
        <button class="exp-filter-btn is-active" type="button" data-filter="all">Toutes (${e.length})</button>
        <button class="exp-filter-btn" type="button" data-filter="europe">Ingénierie &amp; Systèmes (Europe)</button>
        <button class="exp-filter-btn" type="button" data-filter="africa">Direction &amp; Entrepreneuriat (Afrique)</button>
      </div>
    </div>
    <div class="exp-list" id="exp-container">
      ${t}
    </div>
  `}function ne(e){return`
    <div class="acad-showcase-grid">
      ${e.map(e=>`
      <article class="acad-card">
        <div class="acad-card-top">
          <span class="acad-level-tag">${e.type}</span>
          <span class="acad-year-pill">${e.year}</span>
        </div>
        <h3 class="acad-major-title">${e.title}</h3>
        <p class="acad-inst-line">${e.institution}${e.country?` · ${e.country}`:``}</p>
      </article>
    `).join(``)}
    </div>
  `}function re(e){return`
    <div class="cert-showcase-grid">
      ${e.map(e=>{let t=e.issuer?`<span class="cert-issuer-text">${e.issuer}${e.year?` · ${e.year}`:``}</span>`:``;return`
      <article class="cert-card">
        <div class="cert-card-top">
          <span class="cert-category-tag">${e.category}</span>
          ${e.year&&!e.issuer?`<span class="cert-year-tag">${e.year}</span>`:``}
        </div>
        <h4 class="cert-title">${e.title}</h4>
        ${t?`<p class="cert-issuer-line">${t}</p>`:``}
      </article>
    `}).join(``)}
    </div>
  `}function p(e){return`
    <div class="hub-explorer">
      <nav class="hub-nav" role="tablist" aria-label="Hubs internationaux">
        ${e.map((e,t)=>`
    <button class="hub-tab-btn${t===0?` is-active`:``}" type="button" data-hub-id="${e.id}">
      <span class="hub-tab-city">${e.city}</span>
      <span class="hub-tab-code">${e.code}</span>
    </button>
  `).join(``)}
      </nav>
      <div class="hub-panels-wrap">
        ${e.map((e,t)=>{let n=e.metrics.map(e=>`
      <div class="hub-metric-card">
        <span class="hub-metric-val">${e.value}</span>
        <span class="hub-metric-lbl">${e.label}</span>
      </div>
    `).join(``);return`
      <article class="hub-panel${t===0?` is-active`:``}" id="hub-panel-${e.id}" data-hub="${e.id}">
        <div class="hub-card">
          <div class="hub-header">
            <div class="hub-identity">
              <div>
                <div class="hub-location-row">
                  <h3 class="hub-city">${e.city}</h3>
                  <span class="hub-country">${e.country}</span>
                  <span class="hub-code-pill">${e.code}</span>
                </div>
                <p class="hub-role">${e.role}</p>
                <p class="hub-org">${e.organization} · <strong>${e.period}</strong></p>
              </div>
            </div>
          </div>
          <div class="hub-body">
            <p class="hub-context">${e.context}</p>
            <div class="hub-metrics-grid">
              ${n}
            </div>
          </div>
        </div>
      </article>
    `}).join(``)}
      </div>
    </div>
  `}function ie(e){return`
    <div class="skill-matrix-component">
      ${`
    <div class="skill-filter-bar">
      <div class="skill-search-wrap">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="search" id="skill-search-input" class="skill-search-input" placeholder="Filtrer une compétence ou technologie (ex: Python, RAMS, PLC, Docker, VDGS)..." aria-label="Rechercher une compétence">
        <button type="button" id="skill-clear-btn" class="skill-clear-btn" aria-label="Effacer la recherche" hidden>×</button>
      </div>
      <div class="skill-category-tabs" role="tablist">
        <button class="skill-tab-btn is-active" type="button" data-category="all">Toutes les compétences</button>
        ${e.map(e=>`
          <button class="skill-tab-btn" type="button" data-category="${e.id}">${e.name}</button>
        `).join(``)}
      </div>
    </div>
  `}
      <div class="skill-categories-grid" id="skill-grid">
        ${e.map(e=>{let t=e.skills.map(e=>`
      <div class="skill-item-row" data-skill-name="${e.name.toLowerCase()} ${e.context.toLowerCase()}">
        <div class="skill-item-info">
          <span class="skill-item-name">${e.name}</span>
          <span class="skill-item-context">${e.context}</span>
        </div>
        <span class="skill-level-badge level-${e.level.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``)}">${e.level}</span>
      </div>
    `).join(``);return`
      <div class="skill-category-card" data-category-id="${e.id}">
        <div class="skill-cat-head">
          <h3 class="skill-cat-title">${e.name}</h3>
          <p class="skill-cat-desc">${e.description}</p>
        </div>
        <div class="skill-items-list">
          ${t}
        </div>
      </div>
    `}).join(``)}
      </div>
      <div id="skill-empty-state" class="skill-empty-state" hidden>
        <p>Aucune compétence ne correspond à votre recherche.</p>
        <button type="button" class="btn btn-secondary" id="skill-reset-btn">Réinitialiser les filtres</button>
      </div>
    </div>
  `}function ae(){return`
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
  `}function oe(){return`
    <div id="product-modal-backdrop" class="modal-backdrop" aria-hidden="true" hidden>
      <div class="modal-drawer" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" id="modal-close-btn" class="modal-close-btn" aria-label="Fermer la fiche technique">✕</button>
        <div id="modal-content" class="modal-content"></div>
      </div>
    </div>
  `}var m=(e,t)=>{let n=document.querySelector(e);n&&(n.innerHTML=t)};m(`#stats-grid`,u(e)),m(`#trajectoire-container`,d(ee)),m(`#products-grid`,f(t)),m(`#experiences-list`,te(n)),m(`#formations-table`,ne(r)),m(`#certifications-table`,re(i)),m(`#competences-explorer`,ie(o)),m(`#international-explorer`,p(a)),m(`#contact-interactive-area`,ae()),m(`#product-modal-root`,oe());var h=document.querySelector(`#reading-progress`),g=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,t=e>0?window.scrollY/e*100:0;h&&(h.style.width=`${t}%`)};window.addEventListener(`scroll`,g,{passive:!0}),g();var _=document.querySelector(`#back-to-top`);window.addEventListener(`scroll`,()=>{_&&_.classList.toggle(`visible`,window.scrollY>400)},{passive:!0}),_?.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});var v=document.querySelector(`.menu-trigger`),y=document.querySelector(`.mobile-nav`);v?.addEventListener(`click`,()=>{let e=!y?.classList.contains(`is-open`);y?.classList.toggle(`is-open`,e),y&&(y.hidden=!e),v.setAttribute(`aria-expanded`,String(e))}),y?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{y.classList.remove(`is-open`),y.hidden=!0,v?.setAttribute(`aria-expanded`,`false`)})});var b=document.querySelectorAll(`.nav-desktop > a[href^='#'], .mobile-nav a[href^='#']`),se=[...document.querySelectorAll(`section[id]`)],x=()=>{let e=window.scrollY+120,t=``;se.forEach(n=>{n.offsetTop<=e&&(t=n.id)}),b.forEach(e=>{e.classList.toggle(`is-active`,e.getAttribute(`href`)===`#${t}`)})};window.addEventListener(`scroll`,x,{passive:!0}),x();var S=[...document.querySelectorAll(`.expertise-slide`)],C=document.querySelector(`.dots`),w=0,T=null,E=e=>{S.length&&(w=(e+S.length)%S.length,S.forEach((e,t)=>e.classList.toggle(`is-on`,t===w)),C&&[...C.children].forEach((e,t)=>e.classList.toggle(`is-on`,t===w)))},D=()=>{T&&clearInterval(T),T=setInterval(()=>E(w+1),5e3)};S.length&&C&&(S.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.setAttribute(`aria-label`,`Expertise ${t+1}`),t===0&&n.classList.add(`is-on`),n.addEventListener(`click`,()=>{E(t),D()}),C.appendChild(n)}),document.querySelector(`.exp-nav.prev`)?.addEventListener(`click`,()=>{E(w-1),D()}),document.querySelector(`.exp-nav.next`)?.addEventListener(`click`,()=>{E(w+1),D()}),document.querySelector(`.expertise`)?.addEventListener(`mouseenter`,()=>{T&&clearInterval(T)}),document.querySelector(`.expertise`)?.addEventListener(`mouseleave`,D),D());var O=document.querySelectorAll(`[data-count]`),k=()=>{O.forEach(e=>{let t=Number(e.dataset.count??0),n=performance.now(),r=e=>1-(1-e)**3,i=a=>{let o=Math.min(1,(a-n)/1200);e.textContent=String(Math.round(t*r(o))),o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)})};if(O.length){let e=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&(k(),e.disconnect())},{threshold:.4});e.observe(O[0])}var A=document.querySelectorAll(`.card, .product, .exp-card, .traj-card, .trajectory-bridge-banner, .ji, .stats-grid > div, .tile, .map-pane, .hub-card, .skill-category-card, .contact-interactive-grid, .acad-card, .cert-card`);A.forEach((e,t)=>{e.style.opacity=`0`,e.style.transform=`translateY(24px)`,e.style.transition=`opacity 0.6s cubic-bezier(.16,1,.3,1) ${t%4*60}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${t%4*60}ms`});var ce=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let n=e.target;n.style.opacity=`1`,n.style.transform=`none`,t.unobserve(n)}})},{threshold:.1,rootMargin:`0px 0px -40px 0px`});A.forEach(e=>{ce.observe(e)});var j=document.querySelectorAll(`.exp-filter-btn`),le=document.querySelectorAll(`.exp-card`);j.forEach(e=>{e.addEventListener(`click`,()=>{j.forEach(e=>e.classList.remove(`is-active`)),e.classList.add(`is-active`);let t=e.dataset.filter??`all`;le.forEach(e=>{let n=e.dataset.category;t===`all`||n===t?(e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`none`})):e.style.display=`none`})})});var M=document.querySelectorAll(`.traj-filter-btn`),N=document.querySelectorAll(`.traj-timeline-item`);M.forEach(e=>{e.addEventListener(`click`,()=>{M.forEach(e=>e.classList.remove(`is-active`)),e.classList.add(`is-active`);let t=e.dataset.trajFilter??`all`;N.forEach(e=>{let n=e.dataset.continent;t===`all`||n===t?(e.style.display=`grid`,requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`none`})):e.style.display=`none`})})});var P=document.querySelectorAll(`.hub-tab-btn`),F=document.querySelectorAll(`.hub-panel`);P.forEach(e=>{e.addEventListener(`click`,()=>{P.forEach(e=>e.classList.remove(`is-active`)),e.classList.add(`is-active`);let t=e.dataset.hubId;F.forEach(e=>{e.classList.toggle(`is-active`,e.dataset.hub===t)})})});var I=document.querySelectorAll(`.skill-tab-btn`),L=document.querySelectorAll(`.skill-category-card`),R=document.querySelector(`#skill-search-input`),z=document.querySelector(`#skill-clear-btn`),B=document.querySelector(`#skill-empty-state`),V=document.querySelector(`#skill-reset-btn`),H=`all`,U=``,W=()=>{let e=0;L.forEach(t=>{let n=t.dataset.categoryId,r=H===`all`||n===H,i=t.querySelectorAll(`.skill-item-row`),a=0;i.forEach(t=>{let n=(t.dataset.skillName||``).toLowerCase(),i=!U||n.includes(U);r&&i?(t.style.display=`flex`,a++,e++):t.style.display=`none`}),t.style.display=a>0?`block`:`none`}),B&&(B.hidden=e>0)};I.forEach(e=>{e.addEventListener(`click`,()=>{I.forEach(e=>e.classList.remove(`is-active`)),e.classList.add(`is-active`),H=e.dataset.category||`all`,W()})}),R?.addEventListener(`input`,e=>{U=e.target.value.trim().toLowerCase(),z&&(z.hidden=U.length===0),W()}),z?.addEventListener(`click`,()=>{R&&(R.value=``,U=``,z.hidden=!0,R.focus(),W())}),V?.addEventListener(`click`,()=>{H=`all`,U=``,R&&(R.value=``),z&&(z.hidden=!0),I.forEach(e=>e.classList.toggle(`is-active`,e.dataset.category===`all`)),W()});var G=document.querySelector(`#product-modal-backdrop`),ue=document.querySelector(`#modal-close-btn`),K=document.querySelector(`#modal-content`),de=document.querySelectorAll(`.product-modal-btn`),fe=e=>{let t=s[e];t&&G&&K&&(K.innerHTML=`
    <div class="modal-header-meta">
      <span class="modal-badge">${t.status}</span>
      <span class="modal-role">${t.eyebrow}</span>
    </div>
    <h2 id="modal-title" class="modal-product-title">${t.title}</h2>
    <p class="modal-tagline">${t.tagline}</p>

    <div class="modal-section">
      <h3 class="modal-section-title">Architecture &amp; Conception Système</h3>
      <ul class="modal-feature-list">
        ${t.architecture.map(e=>`<li><span class="check-icon">▸</span> ${e}</li>`).join(``)}
      </ul>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Stack Technique &amp; Technologies</h3>
      <div class="modal-tech-chips">
        ${t.techStack.map(e=>`<span class="modal-chip">${e}</span>`).join(``)}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Modules &amp; Fonctionnalités Clés</h3>
      <ul class="modal-feature-list">
        ${t.features.map(e=>`<li><span class="check-icon">✓</span> ${e}</li>`).join(``)}
      </ul>
    </div>

    <div class="modal-footer-cta">
      ${t.liveUrl?`<a href="${t.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">Accéder à la plateforme ↗</a>`:``}
      <button type="button" class="btn btn-secondary" id="modal-close-inline">Fermer</button>
    </div>
  `,G.hidden=!1,G.setAttribute(`aria-hidden`,`false`),requestAnimationFrame(()=>{G.classList.add(`is-open`)}),document.body.style.overflow=`hidden`,document.querySelector(`#modal-close-inline`)?.addEventListener(`click`,q))},q=()=>{G&&(G.classList.remove(`is-open`),G.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``,setTimeout(()=>{G.hidden=!0},300))};de.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productSlug;t&&fe(t)})}),ue?.addEventListener(`click`,q),G?.addEventListener(`click`,e=>{e.target===G&&q()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&G&&!G.hidden&&q()}),document.querySelectorAll(`.copy-btn[data-copy]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.copy||``;if(t)try{await navigator.clipboard.writeText(t);let n=e.innerHTML;e.innerHTML=`<span class="copy-text" style="color:var(--accent)">✓ Copié !</span>`,e.classList.add(`copied`),setTimeout(()=>{e.innerHTML=n,e.classList.remove(`copied`)},2200)}catch{prompt(`Copiez le texte suivant :`,t)}})});var J=document.querySelector(`#portfolio-contact-form`),Y=document.querySelector(`#form-feedback`);J?.addEventListener(`submit`,e=>{e.preventDefault();let t=J.querySelector(`#form-submit-btn`),n=J.querySelector(`#form-name`),r=J.querySelector(`#form-email`),i=J.querySelector(`#form-message`);if(!n?.value.trim()||!r?.value.trim()||!i?.value.trim()){Y&&(Y.hidden=!1,Y.className=`form-feedback is-error`,Y.textContent=`Veuillez renseigner tous les champs obligatoires (*).`);return}t&&(t.disabled=!0,t.innerHTML=`<span>Transmission en cours...</span>`),setTimeout(()=>{Y&&(Y.hidden=!1,Y.className=`form-feedback is-success`,Y.textContent=`Message transmis avec succès ! Mfenjou Anas Cherif vous recontactera sous 24h ouvrées.`),J.reset(),t&&(t.disabled=!1,t.innerHTML=`<span>Message envoyé ✓</span>`,setTimeout(()=>{t.innerHTML=`<span class="submit-text">Transmettre le message</span><span class="submit-icon" aria-hidden="true">→</span>`},3500))},600)});var X=document.querySelector(`#quick-contact-widget`),Z=document.querySelector(`#quick-contact-trigger`),Q=document.querySelector(`#quick-contact-popover`),pe=document.querySelector(`#qc-btn-quote`),$=e=>{X&&Z&&Q&&((e===void 0?!X.classList.contains(`is-open`):e)?(Q.removeAttribute(`hidden`),requestAnimationFrame(()=>{X?.classList.add(`is-open`),Z?.setAttribute(`aria-expanded`,`true`),Z?.setAttribute(`aria-label`,`Fermer le menu de contact`)})):(X.classList.remove(`is-open`),Z.setAttribute(`aria-expanded`,`false`),Z.setAttribute(`aria-label`,`Ouvrir le menu de contact`),setTimeout(()=>{X&&!X.classList.contains(`is-open`)&&Q?.setAttribute(`hidden`,``)},260)))};Z?.addEventListener(`click`,e=>{e.stopPropagation(),$()}),document.addEventListener(`click`,e=>{X&&X.classList.contains(`is-open`)&&(X.contains(e.target)||$(!1))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&X?.classList.contains(`is-open`)&&($(!1),Z?.focus())}),pe?.addEventListener(`click`,()=>{$(!1)});var me=document.querySelector(`.site-header`);window.addEventListener(`scroll`,()=>{me?.classList.toggle(`scrolled`,window.scrollY>20)},{passive:!0});