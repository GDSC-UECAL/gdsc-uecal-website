// Define settingIsAuto based on a user preference or configuration
const settingIsAuto = null; // or false, depending on your preference

const setTheme = (isDark) => {
  document.documentElement.classList.remove('dark');
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
};

if (settingIsAuto) {
  setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const newIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (settingIsAuto) {
    setTheme(newIsDark);
  }
});