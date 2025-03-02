class Vista {
  constructor() {}

  mostrarPlantilla(temp, destino) {
    let dest = document.getElementById(destino);
    
    // Si el destino ya contiene un formulario, no lo borres
    if (dest.querySelector("form")) {
      console.log("El formulario ya está cargado, evitando sobreescribirlo.");
      return;
    }

    // Limpiar contenido solo si es necesario
    dest.innerHTML = "";
    let template = document.getElementById(temp);
    
    if (template) {
      let clon = template.content.cloneNode(true);
      dest.appendChild(clon);
    }
  }
}
