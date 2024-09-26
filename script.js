const users = JSON.parse(localStorage.getItem('users')) || {};

// Lógica de registro
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;

        if (!passwordRegex.test(newPassword)) {
            document.getElementById('registerMessage').innerText = 'A senha deve ter pelo menos uma letra maiúscula, uma minúscula e um caractere especial.';
            return;
        }

        if (users[newUsername]) {
            document.getElementById('registerMessage').innerText = 'Usuário já existe.';
        } else {
            users[newUsername] = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('registerMessage').innerText = 'Conta registrada com sucesso!';

            setTimeout(() => {
                window.location.href = 'index.html'; // Redireciona para a página de login
            }, 2000);
        }
    });
}

// Lógica de login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username]) {
            if (users[username] === password) {
                document.getElementById('loginSection').style.display = 'none';
                document.getElementById('searchSection').style.display = 'block';
                document.getElementById('welcomeMessage').innerText = `Bem-vindo, ${username}!`;
                document.getElementById('welcomeMessage').style.display = 'block';
            } else {
                document.getElementById('loginMessage').innerText = 'Senha incorreta.';
            }
        } else {
            document.getElementById('loginMessage').innerText = 'Conta não registrada.';
        }
    });
}
// Lógica de login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username]) {
            if (users[username] === password) {
                window.location.href = 'main.html'; // Redireciona para a página principal
            } else {
                document.getElementById('loginMessage').innerText = 'Senha incorreta.';
            }
        } else {
            document.getElementById('loginMessage').innerText = 'Conta não registrada.';
        }
    });
}


















































































































































