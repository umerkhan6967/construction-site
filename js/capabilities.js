// SolidGround - Capabilities & Safety Interactive Controller

const CAPABILITIES_DATA = {
  "site-prep": {
    title: "Precision Site Preparation & Geotechnical Earthworks",
    description: "SolidGround provides full-spectrum earthmoving, deep excavation, and ground stabilization for major civil and commercial footprints. Utilizing automated 3D GPS grading and specialized vibro-compaction, we transform challenging geotechnical terrains into rock-solid building platforms.",
    bullets: [
      "GPS-guided 3D mass excavation & volumetric terrain analysis",
      "Deep foundation caisson drilling & secant piling walls",
      "Dynamic soil stabilization & lime/cement subgrade remediation",
      "Environmental containment & stormwater control management"
    ],
    featureTitle: "HEAVY EARTHWORK CAPACITY",
    stats: [
      { lbl: "Monthly Excavation Capacity", val: "250,000 m³" },
      { lbl: "GPS Machine Control Precision", val: "± 10 mm" },
      { lbl: "Fleet Grading Readiness", val: "100% Telemetry" }
    ]
  },
  "structural": {
    title: "Structural Engineering & Superstructure Execution",
    description: "From post-tensioned high-rise cores to seismic-isolated long-span bridges, our structural division turns complex architectural visions into enduring reality. We utilize 4D BIM modeling for virtual construction simulations to eliminate spatial clashes before pouring concrete.",
    bullets: [
      "Ultra-high-strength concrete (up to 14,000 psi) slipform placement",
      "Heavy structural steel fabrication & automated robotic welding",
      "4D BIM parametric drafting & digital twin construction tracking",
      "Seismic damper installation & post-tensioned tendon stressing"
    ],
    featureTitle: "STRUCTURAL METRICS",
    stats: [
      { lbl: "Max Skyscraper Height Built", val: "68 Stories" },
      { lbl: "4D BIM Clash Resolution", val: "99.8% Pre-Pour" },
      { lbl: "Steel Erection Rate", val: "1,200 Tons/Mo" }
    ]
  },
  "heavy-lifting": {
    title: "Engineered Heavy Lifting & Crane Logistics",
    description: "Our proprietary fleet of super-heavy crawler cranes and climbing tower cranes is managed by certified rigging engineers. Every complex lift undergoes rigorous 3D wind-vector simulation and ground-bearing pressure analysis before execution.",
    bullets: [
      "Super-heavy crawler crane lifts up to 1,200 metric tons",
      "Engineered tandem and multi-crane synchronized pick plans",
      "Real-time anemometer telemetry & IoT wind-load monitoring",
      "Precast segmental bridge launching gantry operations"
    ],
    featureTitle: "LIFTING TELEMETRY",
    stats: [
      { lbl: "Max Single Pick Capacity", val: "1,200 Tons" },
      { lbl: "Rigging Engineer Inspection", val: "100% Mandatory" },
      { lbl: "Zero-Failure Lift History", val: "30+ Years" }
    ]
  },
  "quality-assurance": {
    title: "Total Quality Assurance & Non-Destructive Testing",
    description: "SolidGround operates under an ISO 9001:2015 certified Quality Management System. Our internal inspection teams deploy ultrasonic testing, laser scanning, and calibrated concrete lab testing to ensure every deliverable exceeds international engineering codes.",
    bullets: [
      "Ultrasonic, magnetic particle & radiographic weld testing (NDT)",
      "Daily cylinder compressive testing & automated hydration logs",
      "LiDAR terrestrial laser scanning for as-built spatial tolerance",
      "Comprehensive material traceability & mill cert verification"
    ],
    featureTitle: "QA/QC COMPLIANCE",
    stats: [
      { lbl: "First-Pass Inspection Rate", val: "99.4%" },
      { lbl: "Laser Scan Accuracy", val: "Sub-Millimeter" },
      { lbl: "QA Material Verification", val: "100% Traceable" }
    ]
  },
  "safety-mgmt": {
    title: "Proactive Health, Safety & Environmental (HSE) Protocols",
    description: "Safety is our operating foundation. We enforce strict OSHA Platinum standards, mandatory daily Job Safety Analyses (JSA), and computerized perimeter safety systems across every jobsite to safeguard every worker, contractor, and visitor.",
    bullets: [
      "Mandatory site hazard briefings & daily digital JSAs",
      "Continuous IoT air quality & perimeter fall-protection sensors",
      "Zero-tolerance PPE compliance with smart hardhat monitoring",
      "Comprehensive behavioral safety incentives & rapid-response drills"
    ],
    featureTitle: "HSE STANDARDS",
    stats: [
      { lbl: "Lost-Time Incident Rate (LTIR)", val: "0.00" },
      { lbl: "OSHA Safety Standard", val: "Platinum VPP" },
      { lbl: "Site Safety Audits Conducted", val: "4,200+ Annually" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Capabilities Tabs Controller
  const tabButtons = document.querySelectorAll('.cap-tab-btn');
  const contentArea = document.getElementById('cap-tab-content');

  function renderTabContent(tabKey) {
    const data = CAPABILITIES_DATA[tabKey];
    if (!data || !contentArea) return;

    contentArea.style.opacity = '0';
    contentArea.style.transform = 'translateY(8px)';

    setTimeout(() => {
      let statsHtml = data.stats.map(s => `
        <div class="cap-spec-item">
          <div class="spec-lbl">${s.lbl}</div>
          <div class="spec-val">${s.val}</div>
        </div>
      `).join('');

      let bulletsHtml = data.bullets.map(b => `
        <li class="cap-bullet-item">
          <span class="bullet-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span>${b}</span>
        </li>
      `).join('');

      contentArea.innerHTML = `
        <div class="cap-content-grid">
          <!-- Left Column -->
          <div class="cap-left-col">
            <h3 class="cap-content-title">${data.title}</h3>
            <p class="cap-content-desc">${data.description}</p>
            <ul class="cap-bullets-list">
              ${bulletsHtml}
            </ul>
          </div>

          <!-- Right Column -->
          <div class="cap-right-col">
            <div class="cap-feature-box">
              <span class="eyebrow" style="margin-bottom: 8px;">// KEY METRICS</span>
              <h4 class="cap-feature-title">${data.featureTitle}</h4>
              <div class="cap-specs-grid">
                ${statsHtml}
              </div>
              <div style="margin-top: var(--space-md);">
                <a href="request-a-bid.html" class="btn btn-outline-orange btn-sm" style="width: 100%; text-align: center;">
                  CONSULT OUR ENGINEERS
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      contentArea.style.opacity = '1';
      contentArea.style.transform = 'translateY(0)';
    }, 150);
  }

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tabKey = btn.getAttribute('data-tab');
        renderTabContent(tabKey);
      });
    });

    // Initialize first tab
    renderTabContent('site-prep');
  }

  // 2. Animated Safety Metric Counters (IntersectionObserver)
  const safetyCounters = document.querySelectorAll('.safety-counter[data-target]');
  if (safetyCounters.length > 0 && 'IntersectionObserver' in window) {
    const safetyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-target');
          const isDecimal = targetStr.includes('.');
          const target = parseFloat(targetStr);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = ease * target;

            el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${targetStr}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    safetyCounters.forEach(c => safetyObserver.observe(c));
  }
});
