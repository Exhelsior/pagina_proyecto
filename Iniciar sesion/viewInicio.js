let vista = new Vista();
const mainContenido = document.getElementById('main-contenido'); 

window.onload = () => {
    document
      .getElementById('iniciarSesion')
      .addEventListener('click', mostrarInicio);
    document
      .getElementById('registrarse')
      .addEventListener('click', mostrarRegistro);
    document
      .getElementById('recovery')
      .addEventListener('click', mostrarRecovery);
  };
  
  function mostrarRegistro() {
    vista.mostrarPlantilla('tempRegistro', 'main-contenido');
  }
  
  function mostrarInicio() {
    vista.mostrarPlantilla('tempInicio', 'main-contenido');
  }

  function mostrarRecovery() {
    vista.mostrarPlantilla('tempRecovery', 'main-contenido');
  }