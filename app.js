/**
 * Germany Travel Brochure & Transport Plan - Application Logic
 * Matches the exact UI interactions from user reference
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize React Bits WebGL2 GlowCursor engine
  if (typeof window.initGlowCursorEngine === 'function') {
    window.initGlowCursorEngine({
      color: '#5f8bff',
      intensity: 1.3,
      trailWidth: 3,
      linger: 1.4,
      glow: 1.2,
      hotspot: 0.8,
      followSpeed: 0.6,
      clickBurst: true,
      theme: 'dark'
    });
  }

  initHeroSlider();
  initMarquee();
  initNavbarSearch();
  initBrochureSection();
  initTransportPlanner();
  initScenicRailways();
  initItineraries();
  initFaqAccordion();
  initSearchModal();
  initBrochureModal();
  initSmoothScroll();
});

/* ==========================================================================
   1. HERO SLIDER LOGIC (Matching user reference image)
   ========================================================================== */
let currentSlideIndex = 0;
let slideInterval = null;
const slides = GERMANY_DATA.heroSlides;

function initHeroSlider() {
  const heroContainer = document.getElementById('heroContainer');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroCtaBtn = document.getElementById('heroCtaBtn');
  const currentNumEl = document.getElementById('currentSlideNum');
  const totalNumEl = document.getElementById('totalSlideNum');
  const progressFillEl = document.getElementById('sliderProgressFill');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const cardsDeck = document.getElementById('heroCardsDeck');
  const timelineNodes = document.querySelectorAll('.timeline-node');

  if (!heroContainer) return;

  totalNumEl.textContent = String(slides.length).padStart(2, '0');

  // Render slides
  updateSlide(0, false);

  // Prev / Next button listeners
  prevBtn.addEventListener('click', () => {
    navigateSlide(-1);
    resetAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    navigateSlide(1);
    resetAutoPlay();
  });

  // Timeline node clicks
  timelineNodes.forEach((node) => {
    node.addEventListener('click', () => {
      const targetIdx = parseInt(node.getAttribute('data-index'), 10);
      if (!isNaN(targetIdx) && targetIdx !== currentSlideIndex) {
        updateSlide(targetIdx, true);
        resetAutoPlay();
      }
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.querySelector('.modal-overlay.active')) return;
    if (e.key === 'ArrowRight') {
      navigateSlide(1);
      resetAutoPlay();
    } else if (e.key === 'ArrowLeft') {
      navigateSlide(-1);
      resetAutoPlay();
    }
  });

  // Auto-play timer: cards change by themselves continuously
  startAutoPlay();
}

function navigateSlide(direction) {
  let newIndex = currentSlideIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;
  updateSlide(newIndex, true);
}

function updateSlide(index, animate = true) {
  currentSlideIndex = index;
  const slide = slides[index];

  // 1. Update Background Layers with crossfade
  const bgLayers = document.querySelectorAll('.hero-bg-layer');
  bgLayers.forEach((layer) => {
    const layerIdx = parseInt(layer.getAttribute('data-slide-index'), 10);
    if (layerIdx === index) {
      layer.classList.add('active');
      layer.classList.remove('inactive');
    } else {
      layer.classList.remove('active');
      layer.classList.add('inactive');
    }
  });

  // 2. Update Left Typography
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroCtaBtn = document.getElementById('heroCtaBtn');

  if (animate) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(6px)';
    heroSubtitle.style.opacity = '0';

    setTimeout(() => {
      heroTitle.textContent = slide.name === 'Bavaria' ? 'Germany' : slide.name;
      heroSubtitle.textContent = slide.subheadline;
      heroCtaBtn.textContent = `Explore ${slide.name} →`;
      heroCtaBtn.setAttribute('href', `#brochure-section`);

      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'translateY(0)';
      heroSubtitle.style.opacity = '1';
    }, 90);
  } else {
    heroTitle.textContent = slide.name === 'Bavaria' ? 'Germany' : slide.name;
    heroSubtitle.textContent = slide.subheadline;
    heroCtaBtn.textContent = `Explore ${slide.name} →`;
  }

  // 3. Update Timeline
  const timelineNodes = document.querySelectorAll('.timeline-node');
  timelineNodes.forEach((node, idx) => {
    if (idx === index) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });

  // 4. Update Slider Counter & Progress Bar
  const currentNumEl = document.getElementById('currentSlideNum');
  currentNumEl.textContent = String(index + 1).padStart(2, '0');

  // 5. Render Right Deck (Active card + next 2 cards in sequence)
  renderHeroCards(index);
}

function renderHeroCards(activeIndex) {
  const deck = document.getElementById('heroCardsDeck');
  if (!deck) return;

  deck.innerHTML = '';

  // Show 3 cards: current, next, next+1
  const cardIndices = [
    activeIndex,
    (activeIndex + 1) % slides.length,
    (activeIndex + 2) % slides.length
  ];

  cardIndices.forEach((idx, position) => {
    const item = slides[idx];
    const isFront = position === 0;

    const card = document.createElement('div');
    card.className = `hero-card ${isFront ? 'active-card' : ''}`;
    card.style.backgroundImage = `url('${item.cardImage}')`;
    card.style.animationDelay = `${position * 0.03}s`;
    card.setAttribute('data-target-index', idx);

    card.innerHTML = `
      <div class="hero-card-header">
        <div class="hero-card-pin">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div class="hero-card-meta">
          <span class="hero-card-name">${item.name}</span>
          <span class="hero-card-subtitle">${item.tagline}</span>
        </div>
      </div>
      <div class="hero-card-footer">
        <div class="hero-card-arrow-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (!isFront) {
        updateSlide(idx, true);
        resetAutoPlay();
      } else {
        // Scroll to destination in brochure
        const brochureSec = document.getElementById('brochure-section');
        if (brochureSec) brochureSec.scrollIntoView({ behavior: 'smooth' });
      }
    });

    deck.appendChild(card);
  });
}

function startAutoPlay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    navigateSlide(1);
  }, 2800);
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay();
}

/* ==========================================================================
   2. MARQUEE SCROLLER INITIALIZER
   ========================================================================== */
function initMarquee() {
  const marqueeContent = document.getElementById('marqueeContent');
  if (!marqueeContent) return;

  const items = GERMANY_DATA.marqueeItems;
  // Duplicate for smooth seamless loop
  const duplicated = [...items, ...items];
  marqueeContent.innerHTML = duplicated
    .map((text) => `<span class="marquee-item">${text}</span>`)
    .join('');
}

/* ==========================================================================
   3. DESTINATION BROCHURE SECTION
   ========================================================================== */
function initBrochureSection() {
  const grid = document.getElementById('destinationsGrid');
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  if (!grid) return;

  renderDestinationCards('all');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const region = btn.getAttribute('data-region');
      renderDestinationCards(region);
    });
  });
}

function renderDestinationCards(regionFilter) {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  const items = GERMANY_DATA.heroSlides.filter((dest) => {
    if (regionFilter === 'all') return true;
    return dest.id === regionFilter;
  });

  grid.innerHTML = items
    .map(
      (dest) => `
    <div class="dest-card">
      <div class="dest-card-img-wrap">
        <img class="dest-card-img" src="${dest.cardImage}" alt="${dest.name}" loading="lazy">
        <span class="dest-tag-badge">${dest.accentTag}</span>
      </div>
      <div class="dest-card-body">
        <h3 class="dest-card-title">${dest.name}</h3>
        <span class="dest-card-german">${dest.germanName}</span>
        <p class="dest-card-desc">${dest.description}</p>
        
        <div class="dest-highlights-list">
          ${dest.highlights.map((h) => `<span class="dest-highlight-chip">${h}</span>`).join('')}
        </div>

        <div class="dest-card-footer">
          <div class="dest-hub-info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 11-1 9"></path>
              <path d="m19 11-4-7"></path>
              <path d="M2 11h20"></path>
              <circle cx="12" cy="18" r="3"></circle>
            </svg>
            <span>Hub: ${dest.nearestHub}</span>
          </div>
          <button class="dest-action-btn" onclick="selectDestinationRoute('${dest.name}')">
            Plan Train →
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

/* ==========================================================================
   4. COMPREHENSIVE TRANSPORT PLANNER (Core User Feature)
   ========================================================================== */
function initTransportPlanner() {
  const fromSelect = document.getElementById('plannerFrom');
  const toSelect = document.getElementById('plannerTo');
  const swapBtn = document.getElementById('btnSwapStations');
  const presetContainer = document.getElementById('presetRoutesWrap');

  if (!fromSelect || !toSelect) return;

  // Preset chips
  const routes = GERMANY_DATA.routePlannerMatrix;
  presetContainer.innerHTML = `
    <span class="preset-title">Popular Routes:</span>
    ${routes
      .map(
        (r, idx) => `
      <button class="preset-chip" onclick="loadPresetRoute(${idx})">
        ${r.from.split(' ')[0]} ⇄ ${r.to.split(' ')[0]}
      </button>
    `
      )
      .join('')}
  `;

  fromSelect.addEventListener('change', updateRouteCalculation);
  toSelect.addEventListener('change', updateRouteCalculation);

  swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    updateRouteCalculation();
  });

  // Initial calculation
  updateRouteCalculation();
}

window.loadPresetRoute = function (index) {
  const route = GERMANY_DATA.routePlannerMatrix[index];
  const fromSelect = document.getElementById('plannerFrom');
  const toSelect = document.getElementById('plannerTo');

  if (route && fromSelect && toSelect) {
    fromSelect.value = route.from;
    toSelect.value = route.to;
    updateRouteCalculation();
  }
};

window.selectDestinationRoute = function (destName) {
  const plannerSec = document.getElementById('transport-section');
  const toSelect = document.getElementById('plannerTo');
  if (!plannerSec || !toSelect) return;

  // Find matching destination
  for (let option of toSelect.options) {
    if (option.text.toLowerCase().includes(destName.toLowerCase())) {
      toSelect.value = option.value;
      break;
    }
  }

  updateRouteCalculation();
  plannerSec.scrollIntoView({ behavior: 'smooth' });
};

function updateRouteCalculation() {
  const fromVal = document.getElementById('plannerFrom').value;
  const toVal = document.getElementById('plannerTo').value;
  const resultCard = document.getElementById('routeResultCard');

  if (!resultCard) return;

  // Find matching route or fallback estimation
  let matched = GERMANY_DATA.routePlannerMatrix.find(
    (r) =>
      (r.from === fromVal && r.to === toVal) ||
      (r.from === toVal && r.to === fromVal)
  );

  if (!matched) {
    // Graceful dynamic fallback estimation
    matched = {
      from: fromVal,
      to: toVal,
      iceTime: '2h 15m (ICE)',
      reTime: '3h 45m (RE)',
      distance: '240 km',
      frequency: 'Every 30–60 mins',
      icePrice: 'From €19.99 (Sparpreis)',
      dTicketValid: 'Regional trains (RE/RB) 100% Free with Deutschlandticket!',
      scenicLevel: 'Charming German countryside and rolling hills',
      recommended: 'Check DB Navigator app for live platform and track numbers.'
    };
  }

  resultCard.innerHTML = `
    <div class="route-result-header">
      <div class="route-stations-display">
        <span>${matched.from.replace(' (Main)', '')}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <span>${matched.to}</span>
      </div>
      <div class="route-validity-pill">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Deutschlandticket Eligible</span>
      </div>
    </div>

    <div class="route-metrics-grid">
      <div class="metric-box">
        <span class="metric-label">High-Speed ICE</span>
        <span class="metric-val" style="color: #F26A54;">${matched.iceTime}</span>
        <span class="metric-sub">${matched.icePrice}</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Regional Train (RE)</span>
        <span class="metric-val" style="color: #2ECC71;">${matched.reTime}</span>
        <span class="metric-sub">100% Free on D-Ticket</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Rail Distance</span>
        <span class="metric-val">${matched.distance}</span>
        <span class="metric-sub">Direct rail route</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Departure Frequency</span>
        <span class="metric-val">${matched.frequency.split('(')[0]}</span>
        <span class="metric-sub">High reliability</span>
      </div>
    </div>

    <div class="route-recommendation-box">
      <strong>Insider Transit Tip:</strong> ${matched.recommended}
    </div>
  `;
}

/* ==========================================================================
   5. SCENIC RAILWAYS SHOWCASE
   ========================================================================== */
function initScenicRailways() {
  const container = document.getElementById('scenicRailGrid');
  if (!container) return;

  container.innerHTML = GERMANY_DATA.scenicRoutes
    .map(
      (r) => `
    <div class="scenic-rail-card">
      <div class="scenic-rail-header">
        <span class="scenic-stars">${r.scenicRating}</span>
        <span class="dest-tag-badge" style="position:static;">${r.trainType}</span>
      </div>
      <h4 class="scenic-rail-title">${r.title}</h4>
      <span class="scenic-rail-route">${r.route}</span>
      <p class="scenic-rail-desc">${r.highlights}</p>
      <div class="scenic-rail-tip">
        <strong>Best Panorama Tip:</strong> ${r.tip}
      </div>
    </div>
  `
    )
    .join('');
}

/* ==========================================================================
   6. MULTI-DAY ITINERARIES
   ========================================================================== */
function initItineraries() {
  const container = document.getElementById('itinerariesWrapper');
  if (!container) return;

  container.innerHTML = GERMANY_DATA.itineraries
    .map(
      (itin) => `
    <div class="itinerary-card">
      <div class="itinerary-header">
        <div>
          <span class="itinerary-duration-badge">${itin.days} Days Curated Tour</span>
          <h3 class="itinerary-title">${itin.title}</h3>
          <p class="itinerary-route-path">${itin.route}</p>
        </div>
        <div style="font-size: 0.85rem; color: #2ECC71; font-weight: 700;">
          🚆 ${itin.transportPass}
        </div>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px;">${itin.overview}</p>
      
      <div class="itinerary-days-accordion">
        ${itin.schedule
          .map(
            (s) => `
          <div class="itinerary-day-row">
            <span class="day-tag">${s.day}</span>
            <div class="day-detail-text">
              <strong>${s.title}</strong>: ${s.details}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');
}

/* ==========================================================================
   7. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = GERMANY_DATA.faq
    .map(
      (item) => `
    <div class="faq-item">
      <button class="faq-question-btn">
        <span>${item.q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `
    )
    .join('');

  const items = container.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      items.forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ==========================================================================
   8. NAVBAR EXPANDABLE SEARCH WITH AUTOFOCUS & LIVE DROPDOWN
   ========================================================================== */
function initNavbarSearch() {
  const navPill = document.getElementById('navFrostedPill');
  const searchBtn = document.getElementById('navSearchBtn');
  const searchInput = document.getElementById('navInlineSearchInput');
  const closeBtn = document.getElementById('navSearchCloseBtn');
  const dropdown = document.getElementById('navSearchDropdown');

  if (!navPill || !searchBtn || !searchInput) return;

  function openSearch() {
    navPill.classList.add('search-open');
    setTimeout(() => {
      searchInput.focus();
    }, 50);
  }

  function closeSearch() {
    navPill.classList.remove('search-open');
    searchInput.value = '';
    if (dropdown) dropdown.classList.remove('active');
  }

  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!navPill.classList.contains('search-open')) {
      openSearch();
    } else if (searchInput.value.trim() === '') {
      closeSearch();
    } else {
      searchInput.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSearch();
    });
  }

  // Close search on click outside
  document.addEventListener('click', (e) => {
    if (!navPill.contains(e.target)) {
      if (searchInput.value.trim() === '') {
        closeSearch();
      } else if (dropdown) {
        dropdown.classList.remove('active');
      }
    }
  });

  // Keyboard shortcut Cmd+K / Ctrl+K & Escape
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Live filtering on input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!dropdown) return;

    if (query.length === 0) {
      dropdown.classList.remove('active');
      return;
    }

    const allItems = [
      ...GERMANY_DATA.heroSlides.map((s) => ({
        type: 'Destination',
        title: s.name,
        desc: s.tagline,
        action: () => {
          closeSearch();
          selectDestinationRoute(s.name);
        }
      })),
      ...GERMANY_DATA.scenicRoutes.map((r) => ({
        type: 'Scenic Rail',
        title: r.title,
        desc: r.route,
        action: () => {
          closeSearch();
          document.getElementById('scenic-section').scrollIntoView({ behavior: 'smooth' });
        }
      })),
      {
        type: 'Pass Guide',
        title: 'Deutschlandticket Guide',
        desc: 'Unlimited regional travel across Germany for €49–€58/mo',
        action: () => {
          closeSearch();
          document.getElementById('transport-section').scrollIntoView({ behavior: 'smooth' });
        }
      },
      {
        type: 'High-Speed',
        title: 'ICE Trains (Intercity-Express)',
        desc: 'Speeds up to 300 km/h with onboard dining & quiet zones',
        action: () => {
          closeSearch();
          document.getElementById('transport-section').scrollIntoView({ behavior: 'smooth' });
        }
      }
    ];

    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      dropdown.innerHTML = `<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 18px; font-size: 0.88rem;">No matches found for "${query}"</div>`;
      dropdown.classList.add('active');
      return;
    }

    dropdown.innerHTML = filtered
      .map(
        (item, idx) => `
      <div class="nav-search-item" data-nav-search-idx="${idx}">
        <div class="nav-search-item-meta">
          <span class="nav-search-item-type">${item.type}</span>
          <span class="nav-search-item-title">${item.title}</span>
          <span class="nav-search-item-sub">${item.desc}</span>
        </div>
        <span style="color: var(--coral-primary); font-weight: 700;">→</span>
      </div>
    `
      )
      .join('');

    dropdown.classList.add('active');

    dropdown.querySelectorAll('.nav-search-item').forEach((row, idx) => {
      row.addEventListener('click', () => {
        filtered[idx].action();
      });
    });
  });
}

function initSearchModal() {
  const modal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearchModal');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!modal) return;

  function closeSearch() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });
}

/* ==========================================================================
   9. DIGITAL BROCHURE & PRINT MODAL
   ========================================================================== */
function initBrochureModal() {
  const modal = document.getElementById('brochureModal');
  const triggerBtns = document.querySelectorAll('.open-brochure-modal-btn');
  const closeBtn = document.getElementById('closeBrochureModal');
  const printBtn = document.getElementById('btnPrintBrochure');

  if (!modal) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', () => modal.classList.add('active'));
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   10. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

