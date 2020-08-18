export default function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  window.addEventListener('resize', appHeight);
}
