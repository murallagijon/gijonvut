document.getElementById('switch-lang').addEventListener('click', function() {
    const lang = document.documentElement.lang;
    if (lang === 'es') {
        document.documentElement.lang = 'en';
        document.getElementById('switch-lang').textContent = 'Castellano';
        document.getElementById('welcome-text').textContent = 'Welcome to our tourist accommodation';
        document.getElementById('address').textContent = 'Address: Calle Muralla 6, Gijón, CP: 33202';
        document.getElementById('whatsapp').textContent = 'Whatsapp: +34 681 901 529';
        document.getElementById('telefono').textContent = 'Telephone: +34 91 999 6652';
        document.getElementById('contact').textContent = 'Website: https://myhousespain.com/';
    } else {
        document.documentElement.lang = 'es';
        document.getElementById('switch-lang').textContent = 'English';
        document.getElementById('welcome-text').textContent = 'Bienvenido a nuestra vivienda turística';
        document.getElementById('address').textContent = 'Dirección: Calle Muralla 6, Gijón, CP: 33202';
        document.getElementById('whatsapp').textContent = 'Whatsapp: +34 681 901 529';
        document.getElementById('telefono').textContent = 'Teléfono: +34 91 999 6652';
        document.getElementById('contact').textContent = 'Web de reservas: https://myhousespain.com/';
    }
});

document.getElementById('continue-btn').addEventListener('click', function() {
    window.location.href = 'options.html';
});

