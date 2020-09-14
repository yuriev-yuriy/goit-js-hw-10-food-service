const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

switchRef.addEventListener('click', changeTheme);

function changeTheme() {
  if (switchRef.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
  } else if (!switchRef.checked) {
    bodyRef.classList.replace('dark-theme', 'light-theme');
  }
  const currentTheme = bodyRef.classList;
  const localStorageValue = localStorage.setItem(
    'theme',
    JSON.stringify(currentTheme),
  );
}

const savedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(savedTheme);
console.log(parsedTheme);
if (bodyRef.classList === Theme.DARK) {
  switchRef.checked = true;
}
if (savedTheme) {
  bodyRef.classList = parsedTheme;
}

// const parseTheme = JSON.parse();