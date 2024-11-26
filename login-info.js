document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const validUsers = [
            { username: "Medhat_fawzy9122", password: "12345678" }
        ];

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const isValid = validUsers.some(user => user.username === username && user.password === password);

        if (isValid) {
            window.location.href = 'view-teachers.html';
        } else {
            document.getElementById('error-message').textContent = "Invalid username or password!";
        }
    });

    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'index.html'; 
    });
});
