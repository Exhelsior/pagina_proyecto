const pedidos = document.getElementById("pedido-agend");
const envio = document.getElementById("pedido-agend");

export const mostrarTemplate = () => {
    document.addEventListener("click", (e) => {
        let templateId = "";

        if (e.target.id === "pedido-agend") {
            templateId = "pedidos"; // Asigna el ID del template de pedido
        } else if (e.target.id === "pedido-enviado") {
            templateId = "envios"; // Asigna el ID del template de envío
        }

        if (templateId) {
            const template = document.getElementById(templateId);
            const contenedor = document.querySelector(".temp-envio-grid");

            if (template && contenedor) {
                contenedor.innerHTML = ""; // Limpia el div antes de insertar el nuevo contenido
                const clone = template.content.cloneNode(true);
                contenedor.appendChild(clone);
                console.log(`Se mostró el template: ${templateId}`);
            } else {
                console.error(`No se encontró el template con ID '${templateId}' o el div 'contenido'`);
            }
        }
    });
};
