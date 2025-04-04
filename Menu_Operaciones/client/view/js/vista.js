class Vista {
  constructor() {
    this.validateUserAccess();
  }
  validateUserAccess() {
    const userRole = localStorage.getItem("userRole");
    if (!userRole) {
      window.location.href = "./index.html";
      return false;
    }
    return true;
  }
  /**
   * Carga FORM en DESTINO. confirma que la plantilla exista
   * @param {string} temp: id de la plantilla a cargar
   * @param {string} destino: id del elemento donde se cargará
   */
  mostrarPlantilla(temp, destino) {
    if (!this.validateUserAccess()) return false;

    try {
      const dest = document.getElementById(destino);
      if (!dest) {
        console.error(`Elemento destino "${destino}" no encontrado`);
        return false;
      }
      const template = document.getElementById(temp);
      if (!template) {
        console.error(`Template "${temp}" no encontrado`);
        return false;
      }
      dest.innerHTML = "";
      const clon = template.content.cloneNode(true);
      dest.appendChild(clon);
      return true;
    } catch (error) {
      console.error("Error al mostrar plantilla:", error);
      return false;
    }
  }
}
