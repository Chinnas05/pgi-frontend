document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (fullName && email && password) {
            // Steps out of the login folder and enters the naanmudhalvan folder index
            window.location.href = "../naanmudhalvan/index.html";
        }
    });
});