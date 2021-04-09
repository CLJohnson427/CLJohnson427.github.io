document.addEventListener('DOMContentLoaded', () => {
    // Apply Dark Theme on page load based on user preference.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyDarkTheme();
    }

    // Toggle Dark/Light Theme if the user preference changes.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        const preferedTheme = event.matches ? 'dark' : 'light';
        if (preferedTheme === 'dark') {
            applyDarkTheme();
        }
        else {
            applyLightTheme();
        }
    });
    
    // Toggle Dark/Light Theme.
    const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark-theme')) {
            applyLightTheme();
        }
        else {
            applyDarkTheme();
        }
    });
    
    function applyDarkTheme() {
        document.documentElement.classList.add('dark-theme');
        document.querySelector('#theme-toggle').textContent = 'brightness_high';
    }

    function applyLightTheme() {
        document.documentElement.classList.remove('dark-theme');
        document.querySelector('#theme-toggle').textContent = 'brightness_4';
    }
});