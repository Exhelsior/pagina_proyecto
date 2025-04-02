import { clientes } from "./crudAPI_envios.js";


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
    if (id === "pedido-agend") {
        const templatePedidosAgendados = document.getElementById("pedidos")
        /* console.log(templatePedidosAgendados) */

        const clone = document.importNode(templatePedidosAgendados.content, true);
        const divDestino = document.querySelector(".temp-envio-grid")
        console.log(clone, divDestino)

        divDestino.innerHTML = ""
        divDestino.appendChild(clone);

        clientes();
        
    }


    if (id === "pedido-enviado"){
        const templatePedidosEnviados = document.getElementById("envios")
        console.log(templatePedidosEnviados)
    }
}


