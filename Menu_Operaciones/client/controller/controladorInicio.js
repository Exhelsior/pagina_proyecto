let vista;
let mainContenido;
let vistaActual = "inicio"; 

document.addEventListener('DOMContentLoaded', () => {
  inicializar();
  
  // Solo mostrar el inicio si no hay otra vista cargada
  if (!document.getElementById("form-Inicio")) {
    mostrarInicio();
  }
});

function inicializar() {
  vista = new Vista();
  mainContenido = document.getElementById("main-contenido");
}

function mostrarInicio() {
  if (vistaActual !== "inicio") {
    vistaActual = "inicio"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempInicio", "main-contenido");
    }, 100);
  }

}

/* function mostrarToken() {
  if (vistaActual !== "token") {
    vistaActual = "token"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempToken", "main-contenido");
    }, 100);
  }
}

function mostrarRecovery() {
  if (vistaActual !== "recovery") {
    vistaActual = "recovery"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempRecovery", "main-contenido");
    }, 100);
  }
} */
