function checkAuth() {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated) {
        alert('Debes iniciar sesión para acceder a esta página');
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}