    // FONDOS DINAMICOS
const fondos = [
    // añade la url del fondo aqui
    '/Menu_Operaciones/view/img/fondoInicio.svg',
    '/Menu_Operaciones/view/img/fondoInicio2.svg',
    '/Menu_Operaciones/view/img/fondoInicio3.svg',
    '/Menu_Operaciones/view/img/fondoInicio4.svg'
  
  ];
  
  function fondoRandom() {
    const randomIndex = Math.floor(Math.random() * fondos.length);
    document.body.style.backgroundImage = `url('${fondos[randomIndex]}')`;
  }
  
  fondoRandom();




