import { clientes } from "./crudAPI_agendados.js";


export function capturarId() {
    const envioGrids = document.querySelectorAll(".envio-grid");
  
    envioGrids.forEach(envioGrid => {
      envioGrid.addEventListener("click", (e) => {
        const id = e.target.id; 
        const idCapturado = id
        mostrarTemplate(idCapturado)
      });
    });
}

export function mostrarTemplate (id) {
  const divDestino = document.querySelector(".temp-envio-grid")
    if (id === "pedido-agend") {
        const templatePedidosAgendados = document.getElementById("pedidos")
        /* console.log(templatePedidosAgendados) */

        const clone = document.importNode(templatePedidosAgendados.content, true);
        console.log(clone, divDestino)

        divDestino.innerHTML = ""
        divDestino.appendChild(clone);

        clientes();
        
    }


    if (id === "pedido-enviado"){
      divDestino.innerHTML = "";  // 🔹 Ahora sí limpia correctamente el contenido anterior
      const templatePedidosEnviados = document.getElementById("envios");
  
      const clone = document.importNode(templatePedidosEnviados.content, true);
  
      divDestino.appendChild(clone);
  }
}


