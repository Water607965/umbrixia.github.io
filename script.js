// Preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').style.display = 'none';
});

// Smooth Scroll
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});
