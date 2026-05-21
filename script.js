// MENU BAR TOGGLE
const hamburger = document.getElementById('hamburger');
 const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
// SCROLL ANIMATIONS
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
});
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// SKILL BAR
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));
