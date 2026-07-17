// Simple interaction configuration for basic frontend actions
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Handle Active States on Nav items Click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log("Plant Green Inertia website successfully loaded.");
});