/* ============================================
   SANA SHAHZAD PORTFOLIO — MAIN JS
   ============================================ */

/* ---- LOADER ---- */
const loaderFill = document.getElementById('loaderFill');
const loaderText = document.getElementById('loaderText');
const loader = document.getElementById('loader');
const messages = ['Initializing...', 'Loading Assets...', 'Building UI...', 'Almost Ready...'];
let pct = 0;

const loaderInterval = setInterval(() => {
  pct += Math.random() * 22 + 8;
  if (pct >= 100) pct = 100;
  loaderFill.style.width = pct + '%';
  loaderText.textContent = messages[Math.min(Math.floor(pct / 28), messages.length - 1)];
  if (pct >= 100) {
    clearInterval(loaderInterval);
    setTimeout(() => loader.classList.add('done'), 300);
  }
}, 150);

/* ---- CUSTOM CURSOR ---- */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
(function animRing() {
  rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(animRing);
})();

/* ---- NAV SCROLL ---- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

/* ---- HAMBURGER ---- */
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  const s = toggle.querySelectorAll('span');
  if (menu.classList.contains('open')) {
    s[0].style.transform = 'rotate(45deg) translate(4px,5px)';
    s[1].style.opacity = '0';
    s[2].style.transform = 'rotate(-45deg) translate(4px,-5px)';
  } else {
    s.forEach(x => { x.style.transform = ''; x.style.opacity = ''; });
  }
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.querySelectorAll('span').forEach(x => { x.style.transform = ''; x.style.opacity = ''; });
  });
});

/* ---- SCROLL REVEAL ---- */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
reveals.forEach(el => revealObs.observe(el));

/* ---- SKILL BARS ---- */
const bars = document.querySelectorAll('.sm-fill');
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + '%'; barObs.unobserve(e.target); } });
}, { threshold: 0.3 });
bars.forEach(b => barObs.observe(b));

/* ---- ROLES TICKER ---- */
const ticks = document.querySelectorAll('.tick-item');
let tickIdx = 0;
setInterval(() => {
  ticks[tickIdx].classList.remove('active');
  ticks[tickIdx].classList.add('exit');
  setTimeout(() => ticks[(tickIdx) % ticks.length].classList.remove('exit'), 500);
  tickIdx = (tickIdx + 1) % ticks.length;
  ticks[tickIdx].classList.add('active');
}, 2500);

/* ---- CANVAS BACKGROUND ---- */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.6 ? '124,111,247' : Math.random() > 0.5 ? '232,121,160' : '238,238,255';
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 100; i++) particles.push(new Particle());

function animCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  // Draw subtle connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,111,247,${0.05 * (1 - dist/100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animCanvas);
}
animCanvas();

/* ---- PROJECT FILTER ---- */
document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeUp .4s ease both';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ---- FERRARI IMAGE GALLERY ---- */
let ferrariIdx = 0;
const ferrariImgs = document.querySelectorAll('[id^="ferrari-img-"]');
const ferrariDots = document.querySelectorAll('#ferrariDots .pmc-dot');

function setFerrari(idx) {
  ferrariImgs.forEach(img => img.classList.remove('pc-img-active'));
  ferrariDots.forEach(d => d.classList.remove('active'));
  ferrariIdx = (idx + ferrariImgs.length) % ferrariImgs.length;
  document.getElementById('ferrari-img-' + ferrariIdx).classList.add('pc-img-active');
  ferrariDots[ferrariIdx].classList.add('active');
}
window.cycleFerrary = (dir) => setFerrari(ferrariIdx + dir);
window.setFerrari = setFerrari;

setInterval(() => setFerrari(ferrariIdx + 1), 3500);

/* ---- VIDEO MODAL ---- */
window.openVideoModal = () => {
  document.getElementById('videoModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeVideoModal = () => {
  document.getElementById('videoModal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('ferrariVideo').pause();
};

/* ---- PROJECT FULLSCREEN MODAL ---- */
window.openProject = (src, title) => {
  document.getElementById('projectModalTitle').textContent = title;
  document.getElementById('projectModalIframe').src = src;
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeProjectModal = () => {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => document.getElementById('projectModalIframe').src = '', 400);
};

/* ---- DB INFO MODAL ---- */
window.showDbInfo = () => {
  document.getElementById('dbModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* ---- IMAGE LIGHTBOX ---- */
window.showImg = (el) => {
  document.getElementById('lightboxImg').src = el.src;
  document.getElementById('imgModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

// Close modals on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['videoModal','projectModal','dbModal','imgModal'].forEach(id => {
      document.getElementById(id).classList.remove('open');
    });
    document.body.style.overflow = '';
    document.getElementById('ferrariVideo').pause();
  }
});

/* ---- CONTACT FORM ---- */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.querySelector('.cf-submit');
  const text = document.getElementById('cfBtnText');
  const icon = document.getElementById('cfBtnIcon');
  btn.disabled = true;
  text.textContent = 'Sending...';
  icon.className = 'fas fa-spinner fa-spin';
  setTimeout(() => {
    text.textContent = 'Message Sent!';
    icon.className = 'fas fa-check';
    btn.style.background = 'var(--accent3)';
    setTimeout(() => {
      text.textContent = 'Send Message';
      icon.className = 'fas fa-paper-plane';
      btn.style.background = '';
      btn.disabled = false;
      document.getElementById('contactForm').reset();
    }, 3000);
  }, 1400);
});

/* ---- TILT EFFECT ---- */
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

/* ---- ACTIVE NAV ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const sectObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active-nav', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectObs.observe(s));

/* ---- SMOOTH SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ---- NAV ACTIVE STYLE ---- */
const style = document.createElement('style');
style.textContent = `.nav-link.active-nav { color: var(--text) !important; } .nav-link.active-nav::after { width: 100% !important; }`;
document.head.appendChild(style);

console.log('%c[SS] Portfolio v2.0 ✦ Sana Shahzad', 'color:#7c6ff7;font-family:monospace;font-size:13px;font-weight:bold');
