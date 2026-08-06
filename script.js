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

const taskForgeEndpoint = 'https://taskforge-os-5mknx.ondigitalocean.app/api/public/sites/2ac0a0ed-7f7b-40fc-8a7a-d176a13241ec/events/';

function taskForgeVisitorId() {
  const storageKey = 'sdg_taskforge_visitor';
  let visitorId = sessionStorage.getItem(storageKey);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    sessionStorage.setItem(storageKey, visitorId);
  }
  return visitorId;
}

function sendTaskForgeEvent(event) {
  const body = new Blob([JSON.stringify({
    ...event,
    path: `${window.location.pathname}${window.location.hash}`,
    source_url: window.location.href,
    visitor_id: taskForgeVisitorId(),
  })], { type: 'text/plain' });
  navigator.sendBeacon(taskForgeEndpoint, body);
}

sendTaskForgeEvent({
  event_type: 'page_view',
  referrer: document.referrer,
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', () => {
  const fields = new FormData(contactForm);
  if (fields.get('_honey')) return;
  sendTaskForgeEvent({
    event_type: 'form_submission',
    form_name: 'SDG contact form',
    name: fields.get('name'),
    email: fields.get('email'),
    message: fields.get('message'),
    details: { project_type: fields.get('project_type') },
  });
});
