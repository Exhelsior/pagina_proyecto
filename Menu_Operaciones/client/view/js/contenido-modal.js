import { sendProducto } from "../../controller/consultasInventarios.js";


// mostrar el modal
export function openModal(content) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = content;
    modal.style.display = "flex";

    setTimeout(() => {
        const btnAgregar = document.getElementById("btn-form-product");
        
        if (btnAgregar) {
            if (btnAgregar) {
                btnAgregar.addEventListener("click", (event) => {
                    sendProducto(event);
                    const modal = document.getElementById("modal");
                    modal.style.display = "none";
                })
            } 
            else {
                console.error("boton no encontrado")
            }
        }
    })
}

// confirmacion del modal

export function modalDelete(content) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = content;
    modal.style.display = "flex";
}

//cerrar el modal
export function closeModal() {
    const modal = document.getElementById("modal");
        modal.style.display = "none"
    }

export function outsideClose() {
    const modal = document.getElementById("modal");
    modal.addEventListener("click", (e) => {
        const modalContent = document.querySelector("#modal-content");
        if (!modalContent.contains(e.target)) {
            closeModal()
        }
    })
}
//inicializar el cierre del mod

export function setupModalClose() {
    const closeModalButton = document.getElementById("close");
    closeModalButton.addEventListener("click", closeModal);
    }

