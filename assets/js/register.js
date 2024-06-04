function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return false;
    }

    // Obtener usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('El nombre de usuario ya está registrado');
        return false;
    }

    // Agregar nuevo usuario al arreglo de usuarios
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso');
    window.location.href = 'index.html';

    return false;
}
