document.addEventListener('DOMContentLoaded', () => {
  // Apply Dark/Light Theme on page load based on user preference.
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark')
  }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light')
  }

  // Toggle Dark/Light Theme if the user preference changes.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const preferredTheme = event.matches ? 'dark' : 'light'
    if (preferredTheme === 'dark') {
      applyTheme('dark')
    }
    else {
      applyTheme('light')
    }
  })
    
  // Toggle Dark/Light Theme.
  const themeToggle = document.querySelector('#theme-toggle')
  themeToggle.addEventListener('click', () => {
    if (document.documentElement.dataset.theme === 'dark') {
      applyTheme('light')
    }
    else {
      applyTheme('dark')
    }
  })

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme

    switch (theme) {
      case 'dark':
        document.querySelector('#theme-toggle').textContent = 'brightness_high'
        break
      case 'light':
      default:
        document.querySelector('#theme-toggle').textContent = 'brightness_4'
        break
    }
  }
})
