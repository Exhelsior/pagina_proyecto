class TransicionFondo {
  constructor(fondos, intervaloTransicion = 5000) {
    // Almacenar lista de fondos e intervalo de transición
    this.fondos = fondos;
    this.intervaloTransicion = intervaloTransicion;
    this.indiceCapaActual = 0;

    // Inicializar capas de fondo
    this.inicializarCapasFondo();
  }

  // Método para crear contenedor de fondo
  inicializarCapasFondo() {
    // Crear contenedor fijo para las capas
    this.contenedor = this.crearContenedor();

    // Crear dos capas para transición suave
    this.capas = [this.crearCapaFondo(), this.crearCapaFondo()];

    // Agregar capas al contenedor y al documento
    this.capas.forEach((capa) => this.contenedor.appendChild(capa));
    document.body.appendChild(this.contenedor);
  }

  // Crear contenedor con posicionamiento fijo
  crearContenedor() {
    const contenedor = document.createElement("div");
    Object.assign(contenedor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "-1",
    });
    return contenedor;
  }

  // Crear capa de fondo con propiedades de transición
  crearCapaFondo() {
    const capa = document.createElement("div");
    Object.assign(capa.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0",
      transition: "opacity 1.5s ease-in-out",
    });
    return capa;
  }

  // Método para cambiar el fondo
  cambiarFondo() {
    // Obtener un índice único para evitar repeticiones inmediatas
    const indiceNuevoFondo = this.obtenerIndiceUnico();
    const nuevoFondo = this.fondos[indiceNuevoFondo];

    // Determinar capas activa e inactiva
    const capaActiva = this.capas[this.indiceCapaActual % 2];
    const capaInactiva = this.capas[(this.indiceCapaActual + 1) % 2];

    // Crear imagen temporal para verificar carga
    const img = new Image();
    img.onerror = () => console.error(`Error loading image: ${nuevoFondo}`);
    img.onload = () => {
      // Preparar y realizar transición
      capaActiva.style.backgroundImage = `url('${nuevoFondo}')`;
      capaActiva.style.opacity = "1";
      capaInactiva.style.opacity = "0";
    };
    img.src = nuevoFondo;

    // Incrementar índice y programar próxima transición
    this.indiceCapaActual++;
    this.temporizador = setTimeout(
      () => this.cambiarFondo(),
      this.intervaloTransicion
    );
  }

  // Obtener un índice de fondo único
  obtenerIndiceUnico() {
    const fondoActual =
      this.capas[this.indiceCapaActual % 2].style.backgroundImage;
    let nuevoIndice;
    do {
      nuevoIndice = Math.floor(Math.random() * this.fondos.length);
    } while (`url('${this.fondos[nuevoIndice]}')` === fondoActual);
    return nuevoIndice;
  }

  // Iniciar transiciones de fondo
  iniciar() {
    this.cambiarFondo();
  }

  // Detener transiciones de fondo
  detener() {
    clearTimeout(this.temporizador);
  }
}

const fondos = [
'/client/public/fondoInicio.svg',
'/client/public/fondoInicio2.svg',
'/client/public/fondoInicio3.svg',
'/client/public/fondoInicio4.svg',
];

const transicionFondo = new TransicionFondo(fondos);
transicionFondo.iniciar();
