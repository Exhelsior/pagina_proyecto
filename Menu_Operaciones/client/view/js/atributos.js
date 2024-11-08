    // FONDOS DINAMICOS
const fondos = [
    // añade la url del fondo aqui
    '../img/fondoInicio.svg',
    '../img/fondoInicio2.svg',
    '../img/fondoInicio3.svg',
    '../img/fondoInicio4.svg'
  
  ];
  
  function fondoRandom() {
    const randomIndex = Math.floor(Math.random() * fondos.length);
    document.body.style.backgroundImage = `url('${fondos[randomIndex]}')`;
  }
  
  fondoRandom();




