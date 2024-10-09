const themeToggleInput = document.getElementsByClassName('theme-controller')[0];
themeToggleInput.addEventListener('click', function () {
  // console.log('working');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'business' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});
