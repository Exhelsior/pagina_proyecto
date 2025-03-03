
let vista = new Vista();
const mainContenido = document.getElementById("main-contenido");

window.onload = () => {
  mostrarInicio();

  document.addEventListener("click", function(event) {
      if (event.target && event.target.id == 'mostraMenu') {
          // Redirigir al menú principal
          window.location.href = 'indexMenu.html';
      }
  });
};



function mostrarRegistro() {
    vista.mostrarPlantilla("tempRegistro", "main-contenido");
  }
  
  function mostrarInicio() {
    vista.mostrarPlantilla("tempInicio", "main-contenido");
  }

  function mostrarToken() {
    vista.mostrarPlantilla("tempToken", "main-contenido");
  }
  
  function mostrarRecovery() {
    vista.mostrarPlantilla("tempRecovery", "main-contenido");
  }
  