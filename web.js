document.getElementById('openChat').addEventListener('click', function() {
    document.getElementById('chatBox').classList.add('open');
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatBox').classList.remove('open');
});




document.addEventListener('DOMContentLoaded', () => {
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const privacyPolicyChecked = document.getElementById('privacyPolicy').checked;
        
        if (privacyPolicyChecked) {
            formMessage.textContent = 'Su formulario ha sido enviado.';
            formMessage.style.color = 'green';
            // Guardar en LocalStorage
            localStorage.setItem('contactFormSubmitted', 'true');
        } else {
            formMessage.textContent = 'Error: Debe aceptar la política de privacidad.';
            formMessage.style.color = 'red';
        }
    });

    // Noticias rotativas
    let currentNews = 0;
    const newsItems = document.querySelectorAll('.news-item');
    const totalNews = newsItems.length;

    function showNews(index) {
        newsItems.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentNews = (currentNews + 1) % totalNews;
        showNews(currentNews);
    }, 3000); // Rotar cada 3 segundos

    // Publicaciones
    const publicationsForm = document.getElementById('publicationsForm');
    const uploadMessage = document.getElementById('uploadMessage');

    publicationsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pdfInput = document.getElementById('pdf');
        if (pdfInput.files.length > 0) {
            uploadMessage.textContent = 'PDF subido exitosamente.';
            uploadMessage.style.color = 'green';
        } else {
            uploadMessage.textContent = 'Error: No se seleccionó ningún archivo.';
            uploadMessage.style.color = 'red';
        }
    });
});