class Vista {
  constructor() {}
  /**
   * Carga FORM en DESTINO. confirma que la plantilla exista
   * @param {string} temp: id de la plantilla a cargar
   * @param {string} destino: id del elemento donde se cargará
   */
  mostrarPlantilla(temp, destino) {
    //limpia contenido
    let dest = document.getElementById(destino);
    dest.innerHTML = "";
    let template = document.getElementById(temp);
    if (template) {
      //si la plantilla existe...
      let clon = template.content.cloneNode(true);
      dest.appendChild(clon); //inserta
    }
  }
}
