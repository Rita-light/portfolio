/* Sélecteur de langue (components/LangSwitch.astro) : en changeant de langue,
   on reste sur la même section (#experience, #projects…). Les ids des sections
   sont identiques dans les deux langues. */

document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((a) => {
  a.addEventListener('click', () => {
    const url = new URL(a.href);
    url.hash = window.location.hash;
    a.href = url.toString();
  });
});
