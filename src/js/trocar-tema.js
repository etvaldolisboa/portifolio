function changeTheme() {
    const themeSwitch = document.querySelector('#theme-switch');
    const theme = themeSwitch.checked ? 'dark' : 'light';
  
    // Set the theme
    document.body.className = theme;
  }
  
  // Add an event listener to the switch
  themeSwitch.addEventListener('change', changeTheme);
  