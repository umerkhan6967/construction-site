// SolidGround - Machinery Fleet Catalogue & Spec Modal Controller

const FLEET_DATA = [
  {
    id: "cat-352-excavator",
    name: "CAT 352 UHD Hydraulic Excavator",
    category: "excavators",
    categoryLabel: "Excavators",
    model: "Caterpillar 352 UHD Series III",
    year: "2023",
    capacity: "3.2 m³ Bucket",
    horsepower: "430 HP (321 kW)",
    image: "assets/images/fleet-excavator.jpg",
    specs: {
      "Model Designation": "CAT 352 Ultra High Demolition",
      "Operating Weight": "54,200 kg (119,500 lbs)",
      "Engine Unit": "Cat C13 Turbocharged Diesel (Tier 4 Final)",
      "Horsepower / Power": "430 HP @ 1,800 RPM",
      "Max Digging Reach": "14.2 meters (46.5 ft)",
      "Bucket Capacity": "3.2 cubic meters (Heavy Rock Duty)",
      "Guidance / Telemetry": "Trimble 3D GPS Integrated Grade Control",
      "Operational Best Use": "Deep foundation caisson excavation, bridge abutments, hard rock digging"
    }
  },
  {
    id: "liebherr-lr11000-crane",
    name: "Liebherr LR 11000 Heavy Crawler Crane",
    category: "cranes",
    categoryLabel: "Cranes",
    model: "Liebherr LR 11000 Lattice Boom",
    year: "2022",
    capacity: "1,200 Metric Tons",
    horsepower: "680 HP (500 kW)",
    image: "assets/images/fleet-crane.jpg",
    specs: {
      "Model Designation": "Liebherr LR 11000",
      "Operating Weight": "850 Metric Tons (Fully Ballasted)",
      "Engine Unit": "Liebherr 8-Cylinder Turbo Diesel",
      "Horsepower / Power": "680 HP (500 kW)",
      "Max Lift Capacity": "1,200 Metric Tons @ 12m radius",
      "Max Hoist Height": "220 meters with luffing jib",
      "Guidance / Telemetry": "LICCON2 IoT Real-Time Wind & Load Monitoring",
      "Operational Best Use": "Modular bridge girder placement, offshore jacket placement, skyscraper crowns"
    }
  },
  {
    id: "cat-d10t-dozer",
    name: "CAT D10T Heavy Earthmoving Dozer",
    category: "bulldozers",
    categoryLabel: "Bulldozers",
    model: "Caterpillar D10T-2",
    year: "2024",
    capacity: "18.5 m³ Blade",
    horsepower: "600 HP (447 kW)",
    image: "assets/images/fleet-bulldozer.jpg",
    specs: {
      "Model Designation": "Caterpillar D10T-2 Heavy Crawler Dozer",
      "Operating Weight": "70,171 kg (154,700 lbs)",
      "Engine Unit": "Cat C27 ACERT Twin Turbo Diesel",
      "Horsepower / Power": "600 HP (447 kW)",
      "Blade Type & Capacity": "Universal Semi-U Blade (18.5 m³)",
      "Rear Attachment": "Single-Shank Deep Penetration Ripper",
      "Guidance / Telemetry": "Cat MineStar Automated 3D Grade Control",
      "Operational Best Use": "Mass earth embankment pushing, rock ripping, highway cut & fill"
    }
  },
  {
    id: "putzmeister-56m-mixer",
    name: "Putzmeister 56M Concrete Transit Pump",
    category: "concrete-mixers",
    categoryLabel: "Concrete Mixers",
    model: "Putzmeister 56M-5 RZ Boom",
    year: "2023",
    capacity: "160 m³/Hour Pour Rate",
    horsepower: "480 HP (358 kW)",
    image: "assets/images/fleet-mixer.jpg",
    specs: {
      "Model Designation": "Putzmeister 56M-5 High-Reach Boom",
      "Chassis Carrier": "Mercedes-Benz Actros 5-Axle Heavy Chassis",
      "Vertical Reach": "55.6 meters (182 ft)",
      "Max Output Capacity": "160 cubic meters per hour @ 85 bar",
      "Pipeline Diameter": "125 mm (5 inch Twin-Wall)",
      "Outrigger Spread": "One-Side Support (OSS) Computer Controlled",
      "Operational Best Use": "Continuous high-rise mat slab pours, bridge deck mass placements"
    }
  },
  {
    id: "volvo-a40g-dumptruck",
    name: "Volvo A40G Articulated Hauler",
    category: "dump-trucks",
    categoryLabel: "Dump Trucks",
    model: "Volvo A40G 6x6 Heavy Hauler",
    year: "2023",
    capacity: "39 Metric Tons",
    horsepower: "476 HP (350 kW)",
    image: "assets/images/fleet-dumptruck.jpg",
    specs: {
      "Model Designation": "Volvo A40G Full Suspension 6x6",
      "Payload Capacity": "39,000 kg (43 US Tons)",
      "Body Volume (Heaped)": "24.0 cubic meters",
      "Engine Unit": "Volvo D13J 12.8L Tier 4 Final",
      "Horsepower / Power": "476 HP @ 1,900 RPM",
      "Drive Configuration": "Automated 6x6 All-Terrain Differential Locks",
      "Telemetry System": "CareTrack IoT On-Board Weighing & Fleet Telematics",
      "Operational Best Use": "Rough-terrain quarry hauling, high-volume mass grading transport"
    }
  },
  {
    id: "komatsu-pc800-excavator",
    name: "Komatsu PC800LC-8 Heavy Mining Shovel",
    category: "excavators",
    categoryLabel: "Excavators",
    model: "Komatsu PC800LC-8 Long Carriage",
    year: "2022",
    capacity: "4.5 m³ Bucket",
    horsepower: "496 HP (370 kW)",
    image: "assets/images/fleet-excavator.jpg",
    specs: {
      "Model Designation": "Komatsu PC800LC-8 High Production",
      "Operating Weight": "84,000 kg (185,190 lbs)",
      "Engine Unit": "Komatsu SAA6D140E-5 Common Rail Diesel",
      "Horsepower / Power": "496 HP @ 1,800 RPM",
      "Max Breakout Force": "471 kN (105,800 lbf)",
      "Arm Length": "3.6 meters heavy-duty reinforced",
      "Operational Best Use": "Heavy quarry rock extraction, bulk foundation excavation, deep shaft dredging"
    }
  },
  {
    id: "tadano-atf400-crane",
    name: "Tadano ATF 400G All-Terrain Mobile Crane",
    category: "cranes",
    categoryLabel: "Cranes",
    model: "Tadano ATF 400G-6",
    year: "2023",
    capacity: "400 Metric Tons",
    horsepower: "653 HP + 265 HP Dual",
    image: "assets/images/fleet-crane.jpg",
    specs: {
      "Model Designation": "Tadano ATF 400G-6 (6-Axle Carrier)",
      "Max Lifting Capacity": "400 Metric Tons @ 2.7m radius",
      "Main Telescopic Boom": "60.0 meters (7 sections)",
      "Max Tip Height": "125.0 meters with fly jib",
      "Drive / Steering": "12 x 8 x 12 all-wheel steer with crab mode",
      "Carrier Engines": "Mercedes OM 502 LA (Carrier) / OM 906 LA (Superstructure)",
      "Operational Best Use": "Urban high-rise equipment rigging, plant shutdowns, flyover beam lifts"
    }
  },
  {
    id: "komatsu-d475a-dozer",
    name: "Komatsu D475A-8 Super Heavy Dozer",
    category: "bulldozers",
    categoryLabel: "Bulldozers",
    model: "Komatsu D475A-8 Super Ripper",
    year: "2023",
    capacity: "27.2 m³ Dual Tilt Blade",
    horsepower: "1,040 HP (777 kW)",
    image: "assets/images/fleet-bulldozer.jpg",
    specs: {
      "Model Designation": "Komatsu D475A-8 Mega Crawler Dozer",
      "Operating Weight": "112,600 kg (248,240 lbs)",
      "Engine Unit": "Komatsu SAA12V140E-7 Twin Turbocharged",
      "Horsepower / Power": "1,040 HP (777 kW)",
      "Blade Capacity": "27.2 cubic meters Dual-Tilt Semi-U",
      "Ripper Depth": "1.8 meters single shank giant variable ripper",
      "Operational Best Use": "Massive mountain pass excavation, hard rock civil fragmentation"
    }
  },
  {
    id: "schwing-s43sx-mixer",
    name: "Schwing S 43 SX Heavy Concrete Pumper",
    category: "concrete-mixers",
    categoryLabel: "Concrete Mixers",
    model: "Schwing S 43 SX Roll-and-Fold",
    year: "2024",
    capacity: "162 m³/Hour Pour Rate",
    horsepower: "450 HP (335 kW)",
    image: "assets/images/fleet-mixer.jpg",
    specs: {
      "Model Designation": "Schwing S 43 SX 5-Section Boom",
      "Boom Geometry": "Overhead Roll-and-Fold (42.3m vertical reach)",
      "Pumping Cylinder": "Generation 3 Open Loop Hyd-System",
      "Max Concrete Pressure": "85 bar (1,233 psi)",
      "Vector Control System": "Radio remote with proportional hydraulic fine-metering",
      "Operational Best Use": "Confined urban stadium pours, foundation caps, deep structural columns"
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const fleetGrid = document.getElementById('fleet-grid');
  const modal = document.getElementById('fleet-spec-modal');

  // Initialize shared modal controller
  if (window.SGModal && modal) {
    window.SGModal.init(modal);
  }

  // 1. Render Equipment Cards
  function renderFleet(category = 'all') {
    if (!fleetGrid) return;

    fleetGrid.innerHTML = '';

    const filteredFleet = category === 'all'
      ? FLEET_DATA
      : FLEET_DATA.filter(f => f.category === category);

    filteredFleet.forEach(unit => {
      const card = document.createElement('div');
      card.className = 'project-portfolio-card reveal-on-scroll is-revealed';
      card.setAttribute('data-category', unit.category);

      card.innerHTML = `
        <div class="project-card-media">
          <img src="${unit.image}" alt="${unit.name}" loading="lazy">
          <div class="project-cat-badge">${unit.categoryLabel}</div>
        </div>
        <div class="project-card-body">
          <div>
            <h3 class="project-card-title">${unit.name}</h3>
            <div class="project-card-loc" style="margin-bottom: 8px;">
              <span>${unit.model} // Year: ${unit.year}</span>
            </div>
            <div style="font-size: 13px; color: var(--color-orange); font-family: var(--font-display); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
              Capacity: ${unit.capacity} | ${unit.horsepower}
            </div>
          </div>
          <button class="btn btn-primary btn-sm btn-view-specs" data-id="${unit.id}">
            VIEW SPECS
          </button>
        </div>
      `;

      fleetGrid.appendChild(card);
    });

    attachSpecHandlers();
  }

  // 2. Bind Reusable Filter Controller
  if (window.SGFilter && fleetGrid) {
    window.SGFilter.bind('.filter-btn-pill, .filter-btn', fleetGrid, renderFleet);
  }

  // 3. Equipment Spec Modal
  function openSpecModal(unitId) {
    const unit = FLEET_DATA.find(f => f.id === unitId);
    if (!unit || !modal) return;

    const imgEl = modal.querySelector('.modal-spec-img');
    const badgeEl = modal.querySelector('.modal-spec-badge');
    const titleEl = modal.querySelector('.modal-spec-title');
    const subEl = modal.querySelector('.modal-spec-sub');
    const tableEl = modal.querySelector('.modal-spec-table');

    if (imgEl) {
      imgEl.src = unit.image;
      imgEl.alt = unit.name;
    }
    if (badgeEl) badgeEl.textContent = `// ${unit.categoryLabel.toUpperCase()}`;
    if (titleEl) titleEl.textContent = unit.name;
    if (subEl) subEl.textContent = `${unit.model} (Manufacture Year: ${unit.year})`;

    if (tableEl && unit.specs) {
      let rows = '';
      for (const [key, value] of Object.entries(unit.specs)) {
        rows += `
          <div class="spec-table-row">
            <div class="spec-col-label">${key}</div>
            <div class="spec-col-val">${value}</div>
          </div>
        `;
      }
      tableEl.innerHTML = rows;
    }

    if (window.SGModal) {
      window.SGModal.open(modal);
    }
  }

  function attachSpecHandlers() {
    const specBtns = document.querySelectorAll('.btn-view-specs');
    specBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        openSpecModal(id);
      });
    });
  }

  // Initial Render
  renderFleet('all');
});
