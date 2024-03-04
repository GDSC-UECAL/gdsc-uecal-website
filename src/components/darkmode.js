const setTheme = (isDark) => {
    document.documentElement.classList.remove('dark');
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  };
  
  if (settingIsAuto) {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newIsDark = e.matches;
    if (settingIsAuto) {
      setTheme(newIsDark);
    }
  });
  