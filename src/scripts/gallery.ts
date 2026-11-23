/* Galeries d'images : défilement automatique + points de navigation (components/Gallery.astro). */

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((g) => {
  const imgs = [...g.querySelectorAll('img')];
  if (imgs.length < 2) return; // une seule image : pas besoin de galerie

  // Un point de navigation par image (bouton : accessible au clavier).
  // Le libellé traduit vient de data-dot-label, par ex. « Image {n} sur {total} ».
  const dotsWrap = g.querySelector('.gdots');
  const dotLabel = g.dataset.dotLabel ?? 'Image {n} / {total}';
  const dots = imgs.map((_, i) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.setAttribute('aria-label', dotLabel.replace('{n}', String(i + 1)).replace('{total}', String(imgs.length)));
    if (i === 0) d.classList.add('on');
    d.addEventListener('click', () => { go(i); restart(); });
    dotsWrap?.appendChild(d);
    return d;
  });

  let idx = 0;
  let timer: ReturnType<typeof setInterval> | undefined;
  const interval = parseInt(g.dataset.interval ?? '3600', 10);

  function go(n: number) {
    imgs[idx].classList.remove('on'); dots[idx].classList.remove('on');
    idx = (n + imgs.length) % imgs.length;
    imgs[idx].classList.add('on'); dots[idx].classList.add('on');
  }
  function start() { timer = setInterval(() => go(idx + 1), interval); g.classList.add('kb'); }
  function stop() { clearInterval(timer); timer = undefined; }
  function restart() { stop(); start(); }

  g.addEventListener('mouseenter', stop);
  g.addEventListener('mouseleave', start);

  // Ne tourne que lorsque la galerie est visible à l'écran (économie CPU)
  new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { if (!timer) start(); } else { stop(); } });
  }, { threshold: 0.25 }).observe(g);
});
