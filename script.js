// YEAR in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate sections on scroll (unchanged behavior)
const sections = document.querySelectorAll('.section');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); } });
},{threshold:0.2});
sections.forEach(s=>io.observe(s));

// Mobile nav toggle (responsive fix: use class instead of inline styles)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  // close menu when a nav link is clicked (better UX on mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
}

// Particles (unchanged)
const particlesContainer = document.getElementById('particles');
for(let i=0;i<40;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.left=Math.random()*100+'%';
  p.style.top= (20+Math.random()*70)+'%';
  p.style.width=5+Math.random()*10+'px';
  p.style.height=5+Math.random()*10+'px';
  p.style.animationDuration=6+Math.random()*6+'s';
  particlesContainer.appendChild(p);
}

// Hero floating leaves & grains (unchanged)
const heroFloat=document.getElementById('hero-float');
for(let i=0;i<24;i++){
  const el=document.createElement('div');
  el.className=(Math.random()>0.5?'leaf':'grain');
  el.style.left=Math.random()*100+'%';
  el.style.top=Math.random()*-20+'%';
  el.style.animationDuration=(6+Math.random()*8)+'s';
  el.style.animationDelay=Math.random()*6+'s';
  heroFloat.appendChild(el);
}
