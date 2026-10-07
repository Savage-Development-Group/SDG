const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const reviewItems = [...document.querySelectorAll('.quote-stack blockquote')];
const reviewCount = document.querySelector('.review-count');
const reviewsMedia = window.matchMedia('(max-width: 600px)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeReview = 0;
let reviewTimer;

function showReview(index) {
  activeReview = (index + reviewItems.length) % reviewItems.length;
  reviewItems.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === activeReview));
  reviewCount.textContent = `${activeReview + 1} / ${reviewItems.length}`;
}

function stopReviewTimer() {
  window.clearInterval(reviewTimer);
}

function startReviewTimer() {
  stopReviewTimer();
  if (reviewsMedia.matches && !reduceMotion.matches) {
    reviewTimer = window.setInterval(() => showReview(activeReview + 1), 30000);
  }
}

document.querySelector('.review-prev').addEventListener('click', () => {
  showReview(activeReview - 1);
  startReviewTimer();
});

document.querySelector('.review-next').addEventListener('click', () => {
  showReview(activeReview + 1);
  startReviewTimer();
});

const reviewsSection = document.querySelector('.reviews');
reviewsSection.addEventListener('pointerenter', stopReviewTimer);
reviewsSection.addEventListener('pointerleave', startReviewTimer);
reviewsSection.addEventListener('focusin', stopReviewTimer);
reviewsSection.addEventListener('focusout', startReviewTimer);
reviewsMedia.addEventListener('change', startReviewTimer);
reduceMotion.addEventListener('change', startReviewTimer);
showReview(0);
startReviewTimer();
