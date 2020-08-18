export default function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight - 210}px`);
  window.addEventListener('resize', appHeight);
}
