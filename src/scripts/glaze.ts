// ============================================================
// Movimento deliberato, poco.
// 1) reveal allo scroll (una volta sola)
// 2) signature: il "riflesso sullo smalto" segue il puntatore nell'hero
// Entrambi rispettano prefers-reduced-motion.
// ============================================================

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- 1. Reveal allo scroll ---- */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
}

/* ---- 2. Riflesso sullo smalto (hero) ---- */
function initGlaze() {
  const hero = document.querySelector<HTMLElement>('[data-glaze]');
  if (!hero || reduceMotion) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // niente su touch

  let raf = 0;
  function move(e: PointerEvent) {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = hero!.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      hero!.style.setProperty('--mx', `${x.toFixed(2)}%`);
      hero!.style.setProperty('--my', `${y.toFixed(2)}%`);
      raf = 0;
    });
  }

  hero.addEventListener('pointermove', move, { passive: true });
}

function start() {
  initReveal();
  initGlaze();
  // accende la sequenza di load dell'hero
  document.documentElement.classList.add('is-ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
