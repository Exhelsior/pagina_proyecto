document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './estiloInicio.css';
    link.onload = function() {
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    };
    document.head.appendChild(link);
});

// Ocultar el body inicialmente
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.visibility = 'hidden';
    document.body.style.opacity = '0';
});