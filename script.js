document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', () => {
  const recipient = window.atob(contactForm.dataset.contactRoute);
  contactForm.action = `https://formsubmit.co/${recipient}`;
});
