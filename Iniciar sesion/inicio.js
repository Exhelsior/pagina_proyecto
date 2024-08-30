///precarga del css para disminuir fouc///
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'estiloInicio.css';
link.onload = function() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
};
document.head.appendChild(link);