function checkAdminAuth() {
    const isAuthenticated = localStorage.getItem('authenticated');
    const username = localStorage.getItem('username');
    if (!isAuthenticated || username !== 'admin') {
        alert('Debes ser administrador para acceder a esta página');
        window.location.href = 'index.html';
    } else {
        loadUsers();
    }
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    userList.innerHTML = `
        <table>
            <tr>
                <th>Usuario</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
            ${users.map((user, index) => `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>
                        <button onclick="deleteUser(${index})">Eliminar</button>
                    </td>
                </tr>
            `).join('')}
        </table>
    `;
}

function addUser() {
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('El nombre de usuario ya está registrado');
        return false;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    alert('Usuario agregado con éxito');
    return false;
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    alert('Usuario eliminado con éxito');
}

function logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
