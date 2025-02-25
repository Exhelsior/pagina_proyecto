let vista;
let mainContenido;

document.addEventListener('DOMContentLoaded', () => {
  inicializar();
  handleUrlRouting();
});

function inicializar() {
  vista = new Vista();
  mainContenido = document.getElementById("main-contenido");

  document.addEventListener("click", function(event) {
    if (event.target && event.target.id == 'mostraMenu') {
      window.location.href = 'indexMenu.html';
    }
  });

  // Initial route handling
  handleUrlRouting();
}

function handleUrlRouting() {
  const path = window.location.pathname;
  switch(path) {
    case '/usuarios/registro':
      mostrarRegistro();
      break;
    case '/usuarios/token':
      mostrarToken();
      break;
    case '/usuarios/recovery':
      mostrarRecovery();
      break;
    default:
      mostrarInicio();
  }
}

function mostrarRegistro() {
  history.pushState({}, '', '/usuarios/registro');
  setTimeout(() => {
    vista.mostrarPlantilla("tempRegistro", "main-contenido");
    setupRegisterListener();
  }, 100);
}

function mostrarInicio() {
  history.pushState({}, '', '/usuarios/login');
  setTimeout(() => {
    vista.mostrarPlantilla("tempInicio", "main-contenido");
    setupLoginListener();
  }, 100);
}

function mostrarToken() {
  history.pushState({}, '', '/usuarios/token');
  setTimeout(() => {
    vista.mostrarPlantilla("tempToken", "main-contenido");
  }, 100);
}

function mostrarRecovery() {
  history.pushState({}, '', '/usuarios/recovery');
  setTimeout(() => {
    vista.mostrarPlantilla("tempRecovery", "main-contenido");
  }, 100);
}

// Rest of the code remains the same...
