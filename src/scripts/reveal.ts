/* Animations d'apparition au scroll (.rv → .rv.in), avec filets de sécurité. */

const rvEls = [...document.querySelectorAll('.rv')];
const revealAll = () => rvEls.forEach((el) => el.classList.add('in'));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealAll(); // accessibilité : pas d'animation si l'utilisateur la désactive
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  rvEls.forEach((el) => io.observe(el));

  // révèle immédiatement ce qui est déjà dans le viewport au chargement
  requestAnimationFrame(() => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    rvEls.forEach((el) => { if (el.getBoundingClientRect().top < vh * 0.95) el.classList.add('in'); });
  });

  // filet de sécurité : ne jamais laisser du contenu caché indéfiniment
  setTimeout(revealAll, 1400);
}
