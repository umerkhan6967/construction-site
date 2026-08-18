// SolidGround - Projects Portfolio & Milestone Modal Controller

const PROJECTS_DATA = [
  {
    id: "riverfront-bridge",
    title: "Riverfront Cable-Stayed Bridge",
    category: "bridges",
    categoryLabel: "Bridges",
    location: "Portland, OR",
    image: "assets/images/project-bridge.jpg",
    description: "A monumental 1,450-meter cable-stayed bridge spanning the Columbia River corridor. Featuring 160-meter high-strength steel-reinforced concrete towers, seismic dampening anchorages, and accelerated bridge construction (ABC) methods to minimize waterway navigation disruption.",
    contractValue: "$340M",
    client: "Oregon Dept. of Transportation",
    milestones: [
      { label: "Feasibility & Permitting", date: "Jan 2023", done: true },
      { label: "Deep Pier Foundations", date: "Jul 2023", done: true },
      { label: "Pylon & Tower Erection", date: "Mar 2024", done: true },
      { label: "Cable Stay Tensioning", date: "Oct 2024", done: true },
      { label: "Deck Fitout & Final Opening", date: "Dec 2024", done: false }
    ]
  },
  {
    id: "i95-expressway",
    title: "Interstate 95 Express Corridor",
    category: "roads-highways",
    categoryLabel: "Roads & Highways",
    location: "Miami, FL",
    image: "assets/images/project-highway.jpg",
    description: "Comprehensive 24-mile multi-level highway expansion including dynamic tolling lanes, elevated connector flyovers, and intelligent transportation systems (ITS) integrating smart CCTV and automated traffic flow sensors.",
    contractValue: "$480M",
    client: "Florida Dept. of Transportation",
    milestones: [
      { label: "Right-of-Way & Utilities", date: "Feb 2023", done: true },
      { label: "Substructure Flyovers", date: "Nov 2023", done: true },
      { label: "Asphalt & Concrete Paving", date: "Jun 2024", done: true },
      { label: "ITS Sensor Deployment", date: "Jan 2025", done: false },
      { label: "Final Commissioning", date: "Apr 2025", done: false }
    ]
  },
  {
    id: "unity-arena",
    title: "Unity Arena & Sports Complex",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Atlanta, GA",
    image: "assets/images/project-arena.jpg",
    description: "An iconic 65,000-seat multi-purpose stadium and entertainment complex with a retractable diagrid roof structure, seismic-isolated foundation, LEED Platinum green building systems, and state-of-the-art acoustic treatment.",
    contractValue: "$820M",
    client: "Metro Sports & Entertainment Authority",
    milestones: [
      { label: "Site Groundbreaking", date: "Mar 2022", done: true },
      { label: "Superstructure Concrete", date: "Jan 2023", done: true },
      { label: "Steel Dome Roof Truss", date: "Dec 2023", done: true },
      { label: "Interior Luxury Fitout", date: "Jul 2024", done: true },
      { label: "Grand Opening Gala", date: "Nov 2024", done: false }
    ]
  },
  {
    id: "mountain-pass-tunnel",
    title: "Apex Mountain Expressway & Tunnel",
    category: "roads-highways",
    categoryLabel: "Roads & Highways",
    location: "Denver, CO",
    image: "assets/images/project-tunnel.jpg",
    description: "Dual-bore 3.2-mile highway tunnel excavated using high-diameter hard rock Tunnel Boring Machines (TBM). Features automated high-capacity ventilation caverns, deluge fire suppression systems, and emergency egress cross-passages.",
    contractValue: "$590M",
    client: "Colorado Department of Transportation",
    milestones: [
      { label: "Geotechnical Exploration", date: "Aug 2022", done: true },
      { label: "TBM Assembly & Portal", date: "Apr 2023", done: true },
      { label: "Tunnel Bore Breakthrough", date: "Feb 2024", done: true },
      { label: "Concrete Arch Lining", date: "Sep 2024", done: false },
      { label: "Expressway Opening", date: "Mar 2025", done: false }
    ]
  },
  {
    id: "vertex-tower",
    title: "Vertex Tower 65-Floor Skyscraper",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "New York, NY",
    image: "assets/images/project-highrise.jpg",
    description: "Ultra-luxury 65-story commercial skyscraper in Midtown Manhattan. Built with self-climbing formwork, 14,000 psi ultra-high-performance concrete, and triple-glazed unitized acoustic curtain walls.",
    contractValue: "$650M",
    client: "Apex Global Properties",
    milestones: [
      { label: "Caisson Foundation Drill", date: "Jan 2023", done: true },
      { label: "Core Slipform Topping", date: "May 2024", done: true },
      { label: "Curtain Wall Installation", date: "Oct 2024", done: true },
      { label: "MEP & Elevator Testing", date: "Jan 2025", done: false },
      { label: "Tenant Fitout Handover", date: "May 2025", done: false }
    ]
  },
  {
    id: "northpoint-gigafactory",
    title: "Northpoint Gigafactory & Clean-Tech Complex",
    category: "industrial",
    categoryLabel: "Industrial",
    location: "Phoenix, AZ",
    image: "assets/images/project-industrial.jpg",
    description: "A 2.2 million square foot advanced semiconductor and battery assembly facility. Fast-tracked using precast structural elements, cleanroom ISO Class 5 certification, and on-site 45MW solar microgrid infrastructure.",
    contractValue: "$940M",
    client: "CleanTech Manufacturing Corp",
    milestones: [
      { label: "Mass Earthwork & Grading", date: "May 2023", done: true },
      { label: "Structural Steel Frame", date: "Dec 2023", done: true },
      { label: "Cleanroom Enclosure", date: "Jul 2024", done: true },
      { label: "Clean Microgrid Online", date: "Nov 2024", done: true },
      { label: "Full Production Start", date: "Jan 2025", done: false }
    ]
  },
  {
    id: "hudson-viaduct",
    title: "Hudson Bay Elevated Viaduct",
    category: "bridges",
    categoryLabel: "Bridges",
    location: "Jersey City, NJ",
    image: "assets/images/project-bridge.jpg",
    description: "A 4.8-mile precast segmental concrete viaduct handling heavy freight and passenger traffic. Features cathodic corrosion protection for marine exposure and specialized post-tensioning tendons.",
    contractValue: "$410M",
    client: "Port Authority of NY & NJ",
    milestones: [
      { label: "Permitting & Geotech", date: "Mar 2023", done: true },
      { label: "Marine Piling Works", date: "Oct 2023", done: true },
      { label: "Segmental Deck Launching", date: "May 2024", done: true },
      { label: "Deck Waterproofing", date: "Nov 2024", done: false },
      { label: "Final Traffic Opening", date: "Feb 2025", done: false }
    ]
  },
  {
    id: "metro-ring-road",
    title: "Capital Metro Loop & Interchanges",
    category: "roads-highways",
    categoryLabel: "Roads & Highways",
    location: "Austin, TX",
    image: "assets/images/project-highway.jpg",
    description: "High-capacity orbital highway system connecting four municipal counties. Delivered using automated 3D machine control grading, recycled asphalt pavement (RAP), and wildlife overpass corridors.",
    contractValue: "$375M",
    client: "Texas Department of Transportation",
    milestones: [
      { label: "Environmental Approval", date: "Jan 2023", done: true },
      { label: "Grading & Drainage Work", date: "Aug 2023", done: true },
      { label: "Interchange Bridge Spans", date: "Mar 2024", done: true },
      { label: "Pavement & Lighting", date: "Oct 2024", done: true },
      { label: "Full Loop Commissioning", date: "Jan 2025", done: false }
    ]
  },
  {
    id: "desert-power-hub",
    title: "Solaria Green Hydrogen Logistics Terminal",
    category: "industrial",
    categoryLabel: "Industrial",
    location: "Bakersfield, CA",
    image: "assets/images/project-industrial.jpg",
    description: "Industrial cryogenic hydrogen storage terminal and railhead logistics complex built with blast-resistant reinforced concrete control bunkers, specialized cryo-piping, and seismic foundation mats.",
    contractValue: "$520M",
    client: "Solaria Energy Partners",
    milestones: [
      { label: "HSE Permitting & Site Prep", date: "Sep 2023", done: true },
      { label: "Cryogenic Tank Foundation", date: "Feb 2024", done: true },
      { label: "Piping & Compression Plant", date: "Jul 2024", done: true },
      { label: "Automated Railhead Facility", date: "Dec 2024", done: false },
      { label: "Commercial Operations", date: "Apr 2025", done: false }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.querySelector('.modal-close');

  // 1. Render All Project Cards
  function renderProjects(category = 'all') {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    const filteredProjects = category === 'all' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === category);

    filteredProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-portfolio-card reveal-on-scroll is-revealed';
      card.setAttribute('data-category', proj.category);

      card.innerHTML = `
        <div class="project-card-media">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <div class="project-cat-badge">${proj.categoryLabel}</div>
        </div>
        <div class="project-card-body">
          <div class="project-card-meta">
            <h3 class="project-card-title">${proj.title}</h3>
            <div class="project-card-loc">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${proj.location}</span>
            </div>
          </div>
          <button class="btn btn-primary btn-sm btn-details" data-id="${proj.id}">
            VIEW DETAILS
          </button>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach click handlers to View Details buttons
    attachDetailHandlers();
  }

  // 2. Filter Button Clicks
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter') || 'all';
        
        // Smooth fade out then in
        if (projectsGrid) {
          projectsGrid.style.opacity = '0';
          projectsGrid.style.transform = 'translateY(10px)';
          setTimeout(() => {
            renderProjects(category);
            projectsGrid.style.opacity = '1';
            projectsGrid.style.transform = 'translateY(0)';
          }, 180);
        }
      });
    });
  }

  // 3. Project Detail Modal
  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !modal) return;

    // Fill modal data
    const imgEl = modal.querySelector('.modal-img');
    const badgeEl = modal.querySelector('.modal-badge');
    const titleEl = modal.querySelector('.modal-title');
    const locEl = modal.querySelector('.modal-location-text');
    const valueEl = modal.querySelector('.modal-value-text');
    const clientEl = modal.querySelector('.modal-client-text');
    const descEl = modal.querySelector('.modal-desc');
    const timelineEl = modal.querySelector('.milestone-stepper');

    if (imgEl) {
      imgEl.src = project.image;
      imgEl.alt = project.title;
    }
    if (badgeEl) badgeEl.textContent = `// ${project.categoryLabel.toUpperCase()}`;
    if (titleEl) titleEl.textContent = project.title;
    if (locEl) locEl.textContent = project.location;
    if (valueEl) valueEl.textContent = project.contractValue;
    if (clientEl) clientEl.textContent = project.client;
    if (descEl) descEl.textContent = project.description;

    // Build Milestone Horizontal Stepper
    if (timelineEl && project.milestones) {
      timelineEl.innerHTML = '';
      project.milestones.forEach((m, index) => {
        const step = document.createElement('div');
        step.className = `stepper-step ${m.done ? 'done' : 'pending'}`;

        step.innerHTML = `
          <div class="step-date">${m.date}</div>
          <div class="step-marker">
            <span class="dot"></span>
            ${index < project.milestones.length - 1 ? '<span class="line"></span>' : ''}
          </div>
          <div class="step-label">${m.label}</div>
        `;
        timelineEl.appendChild(step);
      });
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus trap
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function attachDetailHandlers() {
    const detailBtns = document.querySelectorAll('.btn-details');
    detailBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Escape key closes modal & focus trapping
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeProjectModal();
    }

    // Trap focus inside modal
    if (e.key === 'Tab' && modal && modal.classList.contains('open')) {
      const focusableEls = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableEls.length > 0) {
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }
  });

  // Initial Render
  renderProjects('all');
});
