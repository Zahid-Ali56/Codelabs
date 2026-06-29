// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get the theme toggle button from HTML using its ID
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check if the user has a previously saved theme preference, default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // If dark theme was active before, apply it immediately on load
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for button clicks to toggle between dark and light modes
    themeToggleBtn.addEventListener('click', () => {
        // Check the current active theme attribute on the HTML tag
        let theme = document.documentElement.getAttribute('data-theme');
        
        // Switch themes and update the browser memory (localStorage)
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Log a simple setup initialization message to the console for checking
    console.log("DecodeLabs Framework Core Initialized: WCAG Compliance Track Checked.");
});