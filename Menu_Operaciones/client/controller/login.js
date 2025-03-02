document.addEventListener('DOMContentLoaded', function() {
    const formInicio = document.getElementById("form-Inicio");
    console.log("Formulario detectado:", formInicio); // Verificar si el formulario existe

    if (!formInicio) {
        console.error("No se encontró el formulario de inicio de sesión.");
        return;
    }

    formInicio.addEventListener("submit", async function (event) {
        event.preventDefault(); // Detiene la recarga de la página
        console.log("Formulario enviado");

        const email = document.getElementById("email")?.value.trim();
        const contraseña = document.getElementById("contraseña")?.value.trim();

        console.log("Datos capturados:", { email, contraseña });

        if (!email || !contraseña) {
            alert("Por favor complete todos los campos.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email: email, 
                    password: contraseña 
                })
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            if (data.success) {
                console.log("Inicio de sesión exitoso, redirigiendo...");
                window.location.href = "./indexMenu.html";
            } else {
                alert(data.message || "Error en las credenciales.");
            }
        } catch (error) {
            console.error("Error en la petición:", error);
            alert("Error en el servidor. Por favor, intente nuevamente más tarde.");
        }
    });
});
