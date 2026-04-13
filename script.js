const cursor = document.getElementById('cursor'),
  ring = document.getElementById('cursorRing');
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});
(function a() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(a);
})();
window.addEventListener('load', () => {
  document.getElementById('loaderLine').style.width = '300px';
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.classList.add('loaded');
  }, 1600);
});
window.addEventListener('scroll', () => {
  document.getElementById('progress').style.width =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 +
    '%';
});
const obs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
  { threshold: 0.1 },
);
document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
function toggleDetail(id, card) {
  const d = document.getElementById(id),
    open = d.classList.contains('open');
  document
    .querySelectorAll('.project-detail')
    .forEach((x) => x.classList.remove('open'));
  document
    .querySelectorAll('.project-card')
    .forEach((c) => (c.style.background = ''));
  if (!open) {
    d.classList.add('open');
    card.style.background = 'rgba(200,169,110,.03)';
    setTimeout(
      () => d.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      100,
    );
  }
}
