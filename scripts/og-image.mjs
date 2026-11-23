/*
 * Génère les images de partage (aperçus LinkedIn, Facebook…) : 1200 × 630, une par langue.
 *   npm run og   →   public/assets/og-share.png (FR) et public/assets/og-share-en.png (EN)
 *
 * Les textes viennent des mêmes fichiers que le site (ui.ts, profile.ts, domains.ts, icons.ts) :
 * Node lit directement le TypeScript. À relancer après un changement de titre ou de domaine.
 * Les polices Georgia et Consolas doivent être installées (Windows les fournit).
 */
import sharp from 'sharp';
import { ui } from '../src/i18n/ui.ts';
import { profile } from '../src/data/profile.ts';
import { domains } from '../src/data/domains.ts';
import { icons } from '../src/components/icons.ts';

const C = {
  bg: '#09090F', card: '#14141F', ink: '#ECEAF4', soft: '#9D9BB2', faint: '#6C6A85',
  violet: '#8B5CF0', blue: '#5AA0F0', deep: '#A99CFF', blue2: '#4E9BE8', line: 'rgba(255,255,255,0.10)',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tr = (text, lang) => (typeof text === 'string' ? text : text[lang]);

function svgFor(lang) {
  const t = ui[lang];
  const cx = 915, cy = 315, R = 192, T = 80; // centre, rayon d'orbite, taille de tuile

  const tiles = domains.map((d, i) => {
    const a = (-90 + i * 360 / domains.length) * Math.PI / 180;
    const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    const featured = i === 0;
    const color = featured ? '#FFFFFF' : (i % 2 ? C.blue2 : C.deep);
    return `
    <g transform="translate(${(x - T / 2).toFixed(1)} ${(y - T / 2).toFixed(1)})">
      <rect width="${T}" height="${T}" rx="22" fill="${featured ? 'url(#grad)' : 'rgba(20,20,31,0.82)'}" stroke="${featured ? 'none' : 'rgba(255,255,255,0.12)'}"/>
      <g transform="translate(${T / 2 - 15} 13) scale(1.25)" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[d.icon].stroke}</g>
      <text x="${T / 2}" y="${T - 13}" text-anchor="middle" font-family="Consolas, monospace" font-size="11" letter-spacing="0.6" fill="${featured ? 'rgba(255,255,255,0.9)' : C.soft}">${esc(tr(d.label, lang).toUpperCase())}</text>
    </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.blue}"/><stop offset="1" stop-color="${C.violet}"/>
    </linearGradient>
    <linearGradient id="gradText" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.blue}"/><stop offset="1" stop-color="${C.violet}"/>
    </linearGradient>
    <radialGradient id="glowL" cx="0.2" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#3B2A7A" stop-opacity="0.9"/><stop offset="1" stop-color="${C.bg}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${C.violet}" stop-opacity="0.55"/><stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.10)"/>
    </pattern>
    <radialGradient id="fade" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.4" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="dotMask"><circle cx="${cx}" cy="${cy}" r="300" fill="url(#fade)"/></mask>
  </defs>

  <!-- Fond -->
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect width="1200" height="630" fill="url(#glowL)"/>

  <!-- Illustration en orbite (comme le haut du site) -->
  <rect width="1200" height="630" fill="url(#dots)" mask="url(#dotMask)"/>
  <circle cx="${cx}" cy="${cy}" r="230" fill="url(#halo)"/>
  <circle cx="${cx}" cy="${cy}" r="285" fill="none" stroke="rgba(255,255,255,0.06)"/>
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.violet}" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 7"/>
  <circle cx="${cx}" cy="${cy}" r="130" fill="none" stroke="${C.line}"/>
  <circle cx="${cx + R * Math.cos(-0.35)}" cy="${cy + R * Math.sin(-0.35)}" r="5" fill="${C.blue2}"/>

  <rect x="${cx - 75}" y="${cy - 75}" width="150" height="150" rx="45" fill="url(#grad)"/>
  <rect x="${cx - 73.5}" y="${cy - 73.5}" width="147" height="147" rx="43.5" fill="${C.card}" fill-opacity="0.94"/>
  <text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="58" fill="url(#gradText)">${profile.firstName[0]}${profile.middleName[0]}</text>
  <text x="${cx}" y="${cy + 40}" text-anchor="middle" font-family="Consolas, monospace" font-size="11" letter-spacing="2.4" fill="${C.faint}">FULL-STACK</text>
  ${tiles}

  <!-- Texte -->
  <text x="80" y="150" font-family="Consolas, monospace" font-size="20" letter-spacing="2.4" fill="${C.deep}">${esc(t.role.toUpperCase())}</text>
  <rect x="80" y="168" width="54" height="4" rx="2" fill="url(#grad)"/>
  <text x="78" y="282" font-family="Georgia, serif" font-size="80" fill="${C.ink}" letter-spacing="-1.5">${esc(`${profile.firstName} ${profile.middleName}`)}</text>
  <text x="76" y="370" font-family="Georgia, serif" font-style="italic" font-size="80" fill="url(#gradText)" letter-spacing="-1.5">${esc(profile.lastName)}</text>
  <text x="80" y="440" font-family="Georgia, serif" font-size="26" fill="${C.soft}">${esc(t['og.line1'])}</text>
  <text x="80" y="476" font-family="Georgia, serif" font-size="26" fill="${C.soft}">${esc(t['og.line2'])}</text>
  <text x="80" y="548" font-family="Consolas, monospace" font-size="18" fill="${C.faint}">${esc(`${profile.github.label}   ·   ${profile.location}`)}</text>
</svg>`;
}

for (const lang of Object.keys(ui)) {
  const out = `public${ui[lang]['meta.ogImage']}`;
  const info = await sharp(Buffer.from(svgFor(lang))).png({ compressionLevel: 9 }).toFile(out);
  console.log(`${out}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} Ko`);
}
