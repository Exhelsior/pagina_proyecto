export function resaltarBotones(selector) {
    const botones = document.querySelectorAll(selector);

    botones.forEach((boton) => {
        boton.addEventListener("click", function() {
            botones.forEach((btn) => btn.classList.remove("activo"));

            this.classList.add("activo")
        });
    });
}