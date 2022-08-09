const themeBtn = document.getElementById('swap-scheme');
const r = document.querySelector(':root');
let rs = getComputedStyle(r);

let themeState;

if (rs.getPropertyValue('--text-color-primary') === '#fff') {
  themeState = 'dark';
} else {
  themeState = 'light';
}

themeBtn.addEventListener('click', () => {
  if (themeState === 'dark') {
    r.style.setProperty('--text-color-primary', '#141414');
    r.style.setProperty('--text-color-secondary', '#323232');
    r.style.setProperty('--accent-color', '#0ea5e9');
    r.style.setProperty('--bg-color-300', '#f8fafc');
    r.style.setProperty('--bg-color-700', '#cbd5e1');
    r.style.setProperty('--filter', 'invert(1)');
    themeState = 'light';
  } else if (themeState === 'light') {
    r.style.setProperty('--text-color-primary', '#fff');
    r.style.setProperty('--text-color-secondary', '#fff');
    r.style.setProperty('--accent-color', '#0f172a');
    r.style.setProperty('--bg-color-300', '#475569');
    r.style.setProperty('--bg-color-700', '#334155');
    r.style.setProperty('--filter', 'none');
    themeState = 'dark';
  }
});