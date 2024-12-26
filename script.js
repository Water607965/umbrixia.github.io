// Preloader Animation
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('loaded');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic Features Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
  card.classList.add('fade-in');
});

// Hero Button Click Effect
document.querySelectorAll('.hero-buttons .btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('This button is a demo! Customize it with your functionality.');
  });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.textContent = '↑';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
