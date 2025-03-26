let templateActual = "";

export const mostrarTemplate = (templateId = "pedidos") => { 
    const contenedor = document.querySelector(".temp-envio-grid");

    const tempPedidos = document.getElementById("pedidos");
    const tempEnvios = document.getElementById("envios");

    // Función para cargar un template sin perder datos previos
    const cargarTemplate = (template, id) => {
        if (template && contenedor) {
            contenedor.innerHTML = ""; // Limpia el contenedor
            contenedor.appendChild(template.content.cloneNode(true));
            templateActual = id; // Se actualiza antes de mostrar el template
            console.log("Template actual:", templateActual); // Verifica en la consola
        }
    };

    if (templateId === "pedidos") {
        cargarTemplate(tempPedidos, "pedidos");
    } else if (templateId === "envios") {
        cargarTemplate(tempEnvios, "envios");
    }

    // Evento de clic para cambiar templates
    document.addEventListener("click", (e) => {
        if (e.target.id === "pedido-enviado") {
            cargarTemplate(tempEnvios, "envios");
        } else if (e.target.id === "pedido-agend") {
            cargarTemplate(tempPedidos, "pedidos");
        }
    });
};

export const obtenerTemplate = () => templateActual;