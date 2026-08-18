// SolidGround - Navigation Controller
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');

  // Sticky header scroll detection
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile navigation drawer toggle
  function openNav() {
    if (mobileNav) mobileNav.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', openNav);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeNav);
  }

  // Active page link detection based on window.location
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
