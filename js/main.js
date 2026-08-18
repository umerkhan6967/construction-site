// SolidGround - Core Application Interactions & Controllers
document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll-Triggered Fade-In Reveal Observer
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-revealed'));
  }

  // 2. Stats Counter Animation on Scroll
  const statNumbers = document.querySelectorAll('.stat-num[data-target]');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600; // 1.6s
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);

            el.textContent = `${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${target}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(stat => statObserver.observe(stat));
  }

  // 3. Home & RFQ Contact Form Interactive Validation
  const contactForm = document.getElementById('home-contact-form');
  if (contactForm) {
    const formFields = {
      name: document.getElementById('contact-name'),
      company: document.getElementById('contact-company'),
      email: document.getElementById('contact-email'),
      phone: document.getElementById('contact-phone'),
      message: document.getElementById('contact-message')
    };

    const successBox = document.getElementById('contact-success-box');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function setFieldError(input, msg) {
      if (!input) return;
      const group = input.closest('.form-group-minimal') || input.parentElement;
      if (group) {
        group.classList.add('error');
        const errorEl = group.querySelector('.form-error-msg');
        if (errorEl) errorEl.textContent = msg;
      }
    }

    function clearFieldError(input) {
      if (!input) return;
      const group = input.closest('.form-group-minimal') || input.parentElement;
      if (group) {
        group.classList.remove('error');
      }
    }

    // Clear error on input
    Object.values(formFields).forEach(input => {
      if (input) {
        input.addEventListener('input', () => clearFieldError(input));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (formFields.name && formFields.name.value.trim().length < 2) {
        setFieldError(formFields.name, 'Please enter your full name');
        isValid = false;
      }

      // Validate Company
      if (formFields.company && formFields.company.value.trim().length < 2) {
        setFieldError(formFields.company, 'Please enter company or organization');
        isValid = false;
      }

      // Validate Email
      if (formFields.email && !validateEmail(formFields.email.value)) {
        setFieldError(formFields.email, 'Please provide a valid work email address');
        isValid = false;
      }

      // Validate Phone
      if (formFields.phone && formFields.phone.value.trim().length < 7) {
        setFieldError(formFields.phone, 'Please enter a valid contact phone number');
        isValid = false;
      }

      // Validate Message
      if (formFields.message && formFields.message.value.trim().length < 10) {
        setFieldError(formFields.message, 'Please provide project details (minimum 10 characters)');
        isValid = false;
      }

      if (isValid) {
        // Success state
        contactForm.style.display = 'none';
        if (successBox) {
          successBox.style.display = 'block';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // 4. Project Filter Bar (Projects Page)
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

  // 5. Project Detail Modal Handler
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
          if (modalCat) modalCat.textContent = `// ${category.toUpperCase()}`;
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

  // 6. Interactive Parametric Estimator
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
