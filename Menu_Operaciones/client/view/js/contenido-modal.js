// mostrar el modal
export function openModal(content) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-content");

    modalBody.innerHTML = content;
    modal.classList.add("show");
}

//cerrar el modal
export function closeModal() {
    const modal = document.getElementById("modal-content").addEventListener("click", () => {
        modal.classList.remove("show");
    })
}

//inicializar el cierre del mod
