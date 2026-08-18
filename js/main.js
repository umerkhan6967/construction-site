// SolidGround - Core Application Interactions & Controllers

// Reusable Global Modal Controller
window.SGModal = {
  open(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = modalEl.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  },
  close(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  },
  init(modalEl) {
    if (!modalEl || modalEl.dataset.modalInitialized) return;
    modalEl.dataset.modalInitialized = 'true';

    const closeBtn = modalEl.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close(modalEl));
    }

    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) this.close(modalEl);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl.classList.contains('open')) {
        this.close(modalEl);
      }
      // Accessibility Focus Trapping
      if (e.key === 'Tab' && modalEl.classList.contains('open')) {
        const focusable = modalEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }
};

// Reusable Global Filter Bar Controller
window.SGFilter = {
  bind(filterBtnsSelector, gridEl, onFilterChange) {
    const btns = document.querySelectorAll(filterBtnsSelector);
    if (!btns.length || !gridEl) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter') || 'all';

        gridEl.style.opacity = '0';
        gridEl.style.transform = 'translateY(6px)';

        setTimeout(() => {
          if (typeof onFilterChange === 'function') {
            onFilterChange(filterVal);
          }
          gridEl.style.opacity = '1';
          gridEl.style.transform = 'translateY(0)';
        }, 150);
      });
    });
  }
};

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

    Object.values(formFields).forEach(input => {
      if (input) {
        input.addEventListener('input', () => clearFieldError(input));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (formFields.name && formFields.name.value.trim().length < 2) {
        setFieldError(formFields.name, 'Please enter your full name');
        isValid = false;
      }

      if (formFields.company && formFields.company.value.trim().length < 2) {
        setFieldError(formFields.company, 'Please enter company or organization');
        isValid = false;
      }

      if (formFields.email && !validateEmail(formFields.email.value)) {
        setFieldError(formFields.email, 'Please provide a valid work email address');
        isValid = false;
      }

      if (formFields.phone && formFields.phone.value.trim().length < 7) {
        setFieldError(formFields.phone, 'Please enter a valid contact phone number');
        isValid = false;
      }

      if (formFields.message && formFields.message.value.trim().length < 10) {
        setFieldError(formFields.message, 'Please provide project details (minimum 10 characters)');
        isValid = false;
      }

      if (isValid) {
        contactForm.style.display = 'none';
        if (successBox) {
          successBox.style.display = 'block';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // 4. Request a Bid Page Form Handler
  const bidForm = document.getElementById('bid-form');
  if (bidForm) {
    bidForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentCard = bidForm.closest('.card') || bidForm.parentElement;
      if (parentCard) {
        parentCard.innerHTML = `
          <div style="text-align: center; padding: 40px 20px;">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#E8610A" stroke-width="2" style="margin: 0 auto 16px;">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 8px;">RFP TENDER SUBMITTED</h3>
            <p style="color: var(--color-grey-light); font-size: 14px; max-width: 460px; margin: 0 auto;">Your bid specifications have been securely routed to our senior estimators. We will provide a formal engineering estimate within 24 hours.</p>
          </div>
        `;
      }
    });
  }
});
