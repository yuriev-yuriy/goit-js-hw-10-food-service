const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (switchRef.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
  } else if (!switchRef.checked) {
    bodyRef.classList.replace('dark-theme', 'light-theme');
  }

  localStorage.setItem('theme', JSON.stringify(bodyRef.classList.value));
}

const savedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(savedTheme);
if (parsedTheme === 'dark-theme') {
  bodyRef.classList = parsedTheme;
  switchRef.checked = true;
}
