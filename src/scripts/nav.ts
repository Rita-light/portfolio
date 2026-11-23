/* Barre de navigation (components/Nav.astro) : menu mobile, scroll-spy,
   barre de progression de lecture et condensation au scroll. */

// ---------- Menu mobile (burger) ----------
const burger = document.getElementById('navBurger');
const menu = document.getElementById('navMobile');

if (burger && menu) {
  const close = () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // ferme le menu dès qu'un lien est cliqué (le menu est superposé en CSS,
  // donc sa fermeture ne décale pas la position de l'ancre)
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}

// ---------- Scroll-spy + barre de progression + condensation ----------
const nav = document.querySelector('nav');
const bar = document.getElementById('scrollbar');
const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav-links a')];
const sections = links
  .map((a) => ({ a, sec: document.querySelector(a.getAttribute('href') ?? '') }))
  .filter((o): o is { a: HTMLAnchorElement; sec: Element } => o.sec !== null);

function onScroll() {
  const y = window.scrollY;
  nav?.classList.toggle('shrink', y > 40); // nav plus fine après 40px de scroll

  if (bar) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  }

  // surligne le lien de la section actuellement visible
  let current: HTMLAnchorElement | null = null;
  for (const o of sections) if (o.sec.getBoundingClientRect().top <= 140) current = o.a;
  links.forEach((a) => a.classList.toggle('active', a === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
