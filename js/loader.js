// SolidGround - Page Loader Lifecycle Controller
(function() {
  const startTime = Date.now();
  const MIN_DISPLAY_TIME = 800; // 800ms minimum

  const windowLoadPromise = new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve, { once: true });
    }
  });

  const minTimerPromise = new Promise((resolve) => {
    setTimeout(resolve, MIN_DISPLAY_TIME);
  });

  Promise.all([windowLoadPromise, minTimerPromise]).then(() => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('loaded');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); // matches the 0.5s transition
    }
  });
})();
