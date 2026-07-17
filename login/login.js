document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Pull field values securely
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (fullName && email && password) {
            alert(`Welcome back, ${fullName}! Launching your training dashboard.`);
            
            // Optional: Redirect back to home or dashboard after successful login simulation
            // window.location.href = "../index.html";
        }
    });
});