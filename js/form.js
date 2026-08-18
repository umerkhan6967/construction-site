// SolidGround - Request a Bid Form Validation & FAQ Accordion

document.addEventListener('DOMContentLoaded', () => {

  // 1. FAQ Accordion Expand/Collapse Controller
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question-btn');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Close all other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });

          // Toggle current
          if (isActive) {
            item.classList.remove('active');
          } else {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 2. Custom File Upload Display
  const fileInput = document.getElementById('bid-file');
  const fileLabel = document.querySelector('.custom-file-upload span');
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        fileLabel.textContent = `Attached: ${fileInput.files[0].name}`;
        fileLabel.style.color = 'var(--color-white)';
      } else {
        fileLabel.textContent = 'Attach plans or specs (PDF, DWG)';
        fileLabel.style.color = 'var(--color-grey)';
      }
    });
  }

  // 3. Request a Bid Form Interactive Validation
  const rfpForm = document.getElementById('rfp-bid-form');
  const successPanel = document.getElementById('bid-success-state');

  if (rfpForm) {
    const fields = {
      name: document.getElementById('bid-name'),
      company: document.getElementById('bid-company'),
      email: document.getElementById('bid-email'),
      phone: document.getElementById('bid-phone'),
      type: document.getElementById('bid-project-type'),
      budget: document.getElementById('bid-budget'),
      location: document.getElementById('bid-location'),
      timeline: document.getElementById('bid-timeline'),
      description: document.getElementById('bid-description'),
      consent: document.getElementById('bid-consent')
    };

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function setFieldError(element, msg) {
      if (!element) return;
      const group = element.closest('.form-group-minimal') || element.parentElement;
      if (group) {
        group.classList.add('error');
        const errorEl = group.querySelector('.form-error-msg');
        if (errorEl) {
          errorEl.textContent = msg;
          errorEl.style.display = 'block';
        }
      }
    }

    function clearFieldError(element) {
      if (!element) return;
      const group = element.closest('.form-group-minimal') || element.parentElement;
      if (group) {
        group.classList.remove('error');
        const errorEl = group.querySelector('.form-error-msg');
        if (errorEl) {
          errorEl.style.display = 'none';
        }
      }
    }

    // Clear validation errors on typing / interaction
    if (fields.name) fields.name.addEventListener('input', () => clearFieldError(fields.name));
    if (fields.email) fields.email.addEventListener('input', () => clearFieldError(fields.email));
    if (fields.phone) fields.phone.addEventListener('input', () => clearFieldError(fields.phone));
    if (fields.type) fields.type.addEventListener('change', () => clearFieldError(fields.type));
    if (fields.description) fields.description.addEventListener('input', () => clearFieldError(fields.description));
    if (fields.consent) fields.consent.addEventListener('change', () => clearFieldError(fields.consent));

    rfpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // 1. Validate Full Name
      if (!fields.name || fields.name.value.trim().length < 2) {
        setFieldError(fields.name, 'Please enter your full name (minimum 2 characters)');
        isValid = false;
      }

      // 2. Validate Email
      if (!fields.email || !validateEmail(fields.email.value)) {
        setFieldError(fields.email, 'Please enter a valid work email address');
        isValid = false;
      }

      // 3. Validate Phone Number
      if (!fields.phone || fields.phone.value.trim().length < 7) {
        setFieldError(fields.phone, 'Please enter a valid contact phone number');
        isValid = false;
      }

      // 4. Validate Project Type Dropdown
      if (!fields.type || !fields.type.value || fields.type.value === '') {
        setFieldError(fields.type, 'Please select a project category');
        isValid = false;
      }

      // 5. Validate Project Description
      if (!fields.description || fields.description.value.trim().length < 10) {
        setFieldError(fields.description, 'Please describe your project scope (minimum 10 characters)');
        isValid = false;
      }

      // 6. Validate Consent Checkbox
      if (!fields.consent || !fields.consent.checked) {
        setFieldError(fields.consent, 'You must agree to be contacted regarding this bid request');
        isValid = false;
      }

      if (isValid) {
        // Success state transition
        rfpForm.style.display = 'none';
        if (successPanel) {
          successPanel.style.display = 'block';
          successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }
});
