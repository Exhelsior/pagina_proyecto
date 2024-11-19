let vista = new Vista();
const mainContenido = document.getElementById("main-contenido");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");



window.onload = () => {
  document
    .getElementById("pag-inventarios")
    .addEventListener("click", mostrarInventario);
  document
    .getElementById("pag-pedidos")
    .addEventListener("click", mostrarPedidos);
    document
    .getElementById("pag-envios")
    .addEventListener("click", mostrarEnvios);

    document.addEventListener("click", function(event) {
      if (event.target && event.target.id == 'salir') {
          // Redirigir al menú principal
          window.location.href = 'index.html';
      }
  });
  
    document
    .getElementById("pag-inventarios")
    .addEventListener("click", mostrarModal);

    document
    .getElementById("pag-inventarios")
    .addEventListener("click", ocultarModal);

};


const mostrarModal = () =>{
    const openModal = document.querySelector("#add-producto");
    openModal.addEventListener("click", () =>{
      modal.classList.toggle("show");
    })
}

const ocultarModal = () => {
  const closeModal = document.querySelector("#close");
  closeModal.addEventListener("click", () => {
    modal.classList.toggle("show");
  })
}



mostrarInventario = () => {
  vista.mostrarPlantilla("tempInventario", "main-contenido");
}

function mostrarPedidos() {
  vista.mostrarPlantilla("tempPedidos", "main-contenido");
}

function mostrarEnvios() {
  vista.mostrarPlantilla("tempEnvios", "main-contenido");
}



