function toggleMenu() {
    const panel = document.getElementById('profile-panel');
    panel.style.left = panel.style.left === '0px' ? '-300px' : '0px';
}

function saveProfile() {
    const email = prompt('Введите ваш email @gmail.com');
    if (email && email.endsWith('@gmail.com')) {
        document.getElementById('user-email').textContent = email;
        alert('Профиль обновлен!');
    } else {
        alert('Введите корректный email @gmail.com');
    }
}

function uploadAvatar(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function logout() {
    document.getElementById('user-email').textContent = 'Не зарегистрирован';
    document.getElementById('avatar').src = 'default-avatar.png';
}

function showSection(sectionId) {
    document.getElementById('main-tabs').style.display = 'none';
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function goBack() {
    document.getElementById('main-tabs').style.display = 'flex';
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
}
