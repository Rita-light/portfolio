/* ============================================================
   SCRIPT.JS — Portfolio Rita Merveille Matsinkou
   5 modules indépendants :
   1. Galeries d'images (auto-rotation + points de navigation)
   2. Menu mobile (burger)
   3. Nav : scroll-spy + barre de progression + condensation au scroll
   4. Animations d'apparition au scroll ("reveal")
   5. Panneau "Tweaks" (personnalisation + protocole hôte pour mode édition)
   ============================================================ */

/* ---------- 1. Galeries : auto-cycle + points ---------- */
(function(){
  document.querySelectorAll('[data-gallery]').forEach(g=>{
    const imgs=[...g.querySelectorAll('img')];
    if(imgs.length<2){ return; } // une seule image : pas besoin de galerie

    // Génère un point de navigation par image
    const dotsWrap=g.querySelector('.gdots');
    imgs.forEach((im,i)=>{
      const d=document.createElement('i');
      if(i===0)d.classList.add('on');
      d.addEventListener('click',()=>{ go(i); restart(); });
      dotsWrap&&dotsWrap.appendChild(d);
    });
    const dots=dotsWrap?[...dotsWrap.children]:[];

    let idx=0, timer=null;
    const interval=parseInt(g.dataset.interval||'3600',10);

    function go(n){
      imgs[idx].classList.remove('on'); dots[idx]&&dots[idx].classList.remove('on');
      idx=(n+imgs.length)%imgs.length;
      imgs[idx].classList.add('on'); dots[idx]&&dots[idx].classList.add('on');
    }
    function next(){ go(idx+1); }
    function start(){ timer=setInterval(next,interval); g.classList.add('kb'); }
    function stop(){ clearInterval(timer); timer=null; }
    function restart(){ stop(); start(); }

    g.addEventListener('mouseenter',stop);
    g.addEventListener('mouseleave',start);

    // Ne tourne que lorsque la galerie est visible à l'écran (économie CPU)
    const vis=new IntersectionObserver((e)=>{
      e.forEach(en=>{ if(en.isIntersecting){ if(!timer)start(); } else { stop(); } });
    },{threshold:.25});
    vis.observe(g);
  });
})();

/* ---------- 2. Menu mobile (burger) ---------- */
(function(){
  const burger=document.getElementById('navBurger');
  const menu=document.getElementById('navMobile');
  if(!burger||!menu)return;

  function close(){burger.classList.remove('open');menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}

  burger.addEventListener('click',()=>{
    const open=burger.classList.toggle('open');
    menu.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
  });
  // ferme le menu dès qu'un lien est cliqué
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
})();

/* ---------- 3. Nav : scroll-spy + barre de progression + condensation ---------- */
(function(){
  const nav=document.querySelector('nav');
  const bar=document.getElementById('scrollbar');
  const links=[...document.querySelectorAll('.nav-links a')];
  const map=links.map(a=>({a,sec:document.querySelector(a.getAttribute('href'))})).filter(o=>o.sec);

  function onScroll(){
    const y=window.scrollY;
    nav.classList.toggle('shrink',y>40); // nav plus fine après 40px de scroll

    if(bar){
      const h=document.documentElement.scrollHeight-window.innerHeight;
      bar.style.transform='scaleX('+(h>0?y/h:0)+')';
    }

    // surligne le lien de la section actuellement visible
    let cur=null;
    map.forEach(o=>{ if(o.sec.getBoundingClientRect().top<=140) cur=o.a; });
    links.forEach(a=>a.classList.toggle('active',a===cur));
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

/* ---------- 4. Reveal au scroll (avec filets de sécurité) ---------- */
const rvEls = Array.from(document.querySelectorAll('.rv'));
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll(){ rvEls.forEach(el=>el.classList.add('in')); }

if(reduceMotion){
  revealAll(); // accessibilité : pas d'animation si l'utilisateur la désactive
}else{
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.08, rootMargin:'0px 0px -6% 0px'});
  rvEls.forEach(el=>io.observe(el));

  // révèle immédiatement ce qui est déjà dans le viewport au chargement
  requestAnimationFrame(()=>{
    const vh = window.innerHeight || document.documentElement.clientHeight;
    rvEls.forEach(el=>{ if(el.getBoundingClientRect().top < vh*0.95) el.classList.add('in'); });
  });

  // filet de sécurité : ne jamais laisser du contenu caché indéfiniment
  setTimeout(revealAll, 1400);
}

/* ---------- 5. Tweaks : persistence + protocole hôte (mode édition) ---------- */
const TW_KEY='rita-tweaks-v2';
const tw = JSON.parse(localStorage.getItem(TW_KEY)||'{}');

function applyTw(){
  document.body.classList.remove('accent-bleu','accent-indigo','accent-cyan','amb-ardoise','headings-sans');
  if(tw.acc) document.body.classList.add(tw.acc);
  if(tw.amb) document.body.classList.add(tw.amb);
  if(tw.head) document.body.classList.add(tw.head);
  // reflète l'état actif dans l'UI du panneau
  document.querySelectorAll('#tw-accent .sw').forEach(s=>s.classList.toggle('on',(s.dataset.acc||'')===(tw.acc||'')));
  document.querySelectorAll('#tw-amb button').forEach(b=>b.classList.toggle('on',(b.dataset.amb||'')===(tw.amb||'')));
  document.querySelectorAll('#tw-head button').forEach(b=>b.classList.toggle('on',(b.dataset.head||'')===(tw.head||'')));
}
function saveTw(){ localStorage.setItem(TW_KEY,JSON.stringify(tw)); }
applyTw();

document.getElementById('tw-accent').addEventListener('click',e=>{
  const sw=e.target.closest('.sw'); if(!sw)return; tw.acc=sw.dataset.acc; applyTw(); saveTw();
});
document.getElementById('tw-amb').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return; tw.amb=b.dataset.amb; applyTw(); saveTw();
});
document.getElementById('tw-head').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return; tw.head=b.dataset.head; applyTw(); saveTw();
});

// Protocole d'échange avec la page hôte (ex. éditeur Napkin) pour afficher/masquer le panneau
const panel=document.getElementById('tweaks');
window.addEventListener('message',e=>{
  const t=e?.data?.type;
  if(t==='__activate_edit_mode') panel.classList.add('show');
  else if(t==='__deactivate_edit_mode') panel.classList.remove('show');
});
document.getElementById('tw-close').addEventListener('click',()=>{
  panel.classList.remove('show');
  window.parent.postMessage({type:'__edit_mode_dismissed'},'*');
});
window.parent.postMessage({type:'__edit_mode_available'},'*');
