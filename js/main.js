// SolidGround - Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Stats Counter Animation using IntersectionObserver
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let count = 0;
          const duration = 1500;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.innerHTML = `${prefix}${isDecimal ? count.toFixed(2) : Math.floor(count)}<span class="accent">${suffix}</span>`;
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
  }

  // 2. Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Project Detail Modal
  const modal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');
  const viewProjectBtns = document.querySelectorAll('.btn-view-project');

  if (modal) {
    if (viewProjectBtns.length > 0) {
      viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const title = btn.getAttribute('data-title') || 'Project Overview';
          const location = btn.getAttribute('data-location') || 'Global Site';
          const category = btn.getAttribute('data-cat') || 'Infrastructure';
          const budget = btn.getAttribute('data-budget') || '$120M';
          const desc = btn.getAttribute('data-desc') || 'Comprehensive civil engineering and structural execution.';

          const modalTitle = modal.querySelector('.modal-title');
          const modalLocation = modal.querySelector('.modal-location');
          const modalCat = modal.querySelector('.modal-category');
          const modalBudget = modal.querySelector('.modal-budget');
          const modalDesc = modal.querySelector('.modal-desc');

          if (modalTitle) modalTitle.textContent = title;
          if (modalLocation) modalLocation.textContent = location;
          if (modalCat) modalCat.textContent = category;
          if (modalBudget) modalBudget.textContent = budget;
          if (modalDesc) modalDesc.textContent = desc;

          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 4. Interactive Project Estimator
  const estimatorForm = document.getElementById('cost-estimator-form');
  if (estimatorForm) {
    const projectType = document.getElementById('est-type');
    const scaleSqft = document.getElementById('est-scale');
    const scaleValDisplay = document.getElementById('est-scale-val');
    const urgency = document.getElementById('est-urgency');
    const leedCheck = document.getElementById('est-leed');
    const totalCostDisplay = document.getElementById('est-total-cost');
    const totalMonthsDisplay = document.getElementById('est-total-months');

    function calculateEstimate() {
      if (!projectType || !scaleSqft || !totalCostDisplay) return;

      const baseRates = {
        'civil': 320,
        'commercial': 450,
        'industrial': 380,
        'infrastructure': 520
      };

      const baseTimelineMonths = {
        'civil': 18,
        'commercial': 24,
        'industrial': 16,
        'infrastructure': 30
      };

      const selectedType = projectType.value || 'commercial';
      const sqft = parseInt(scaleSqft.value, 10) || 50000;
      if (scaleValDisplay) {
        scaleValDisplay.textContent = `${sqft.toLocaleString()} SQ. FT.`;
      }

      const baseRate = baseRates[selectedType] || 400;
      let totalCost = (sqft * baseRate);

      if (urgency && urgency.value === 'fast-track') {
        totalCost *= 1.15;
      }
      if (leedCheck && leedCheck.checked) {
        totalCost *= 1.08;
      }

      const baseMonths = baseTimelineMonths[selectedType] || 20;
      let calculatedMonths = Math.round(baseMonths * (sqft / 100000) * 0.7 + (baseMonths * 0.5));
      if (urgency && urgency.value === 'fast-track') {
        calculatedMonths = Math.max(8, Math.round(calculatedMonths * 0.75));
      }

      totalCostDisplay.textContent = `$${(totalCost / 1000000).toFixed(2)}M`;
      if (totalMonthsDisplay) {
        totalMonthsDisplay.textContent = `${calculatedMonths} Months`;
      }
    }

    if (projectType) projectType.addEventListener('change', calculateEstimate);
    if (scaleSqft) scaleSqft.addEventListener('input', calculateEstimate);
    if (urgency) urgency.addEventListener('change', calculateEstimate);
    if (leedCheck) leedCheck.addEventListener('change', calculateEstimate);

    calculateEstimate();
  }
});
