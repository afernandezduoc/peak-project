function modifyProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password && password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return false;
    }

    // Simulación de respuesta del servidor
    alert('Perfil actualizado con éxito');
    window.location.href = 'index.html';

    return false;
}
