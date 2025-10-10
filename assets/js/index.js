// Header theme switching upon scroll (No changes are visibly made in this version of code)
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mode toggle functionality
document.querySelectorAll('.mode-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        // Theme switching logic will not be included in this assessment
        console.log('Theme toggle clicked');
    });
});