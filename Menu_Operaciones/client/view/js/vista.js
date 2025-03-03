class Vista {
  constructor() {}

  mostrarPlantilla(temp, destino) {
    let dest = document.getElementById(destino);
    dest.innerHTML = "";
    let template = document.getElementById(temp);
    
    if (template) {
      let clon = template.content.cloneNode(true);
      dest.appendChild(clon);
    }
  }
}
