document.getElementById('switch-lang').addEventListener('click', function() {
    const lang = document.documentElement.lang;
    if (lang === 'es') {
        document.documentElement.lang = 'en';
        document.getElementById('switch-lang').textContent = 'Español';
        document.getElementById('welcome-text').textContent = 'Welcome to our tourist accommodation';
        document.getElementById('address').textContent = 'Address: xxxxxx Gijón';
        document.getElementById('contact').textContent = 'Contact: info@example.com';
    } else {
        document.documentElement.lang = 'es';
        document.getElementById('switch-lang').textContent = 'English';
        document.getElementById('welcome-text').textContent = 'Bienvenido a nuestra vivienda turística';
        document.getElementById('address').textContent = 'Dirección: xxxxxx Gijón';
        document.getElementById('contact').textContent = 'Contacto: info@ejemplo.com';
    }
});

document.getElementById('continue-btn').addEventListener('click', function() {
    window.location.href = 'options.html';
});
