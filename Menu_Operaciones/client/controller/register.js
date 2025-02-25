document.addEventListener('DOMContentLoaded', function() {
    const formInicio = document.getElementById("form-Inicio");
    if (formInicio) {
        formInicio.addEventListener("submit", async function (event) {
            event.preventDefault();
        
            const email = document.getElementById("email").value;
            const contraseña = document.getElementById("contraseña").value;
        
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
                if (data.success) {
                    window.location.href = "/indexMenu.html";
                } else {
                    alert(data.message || "Error en las credenciales");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    }

    const registerForm = document.querySelector(".contenedor-registro");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const nombres = document.getElementById("nombres").value;
            const correo = document.getElementById("correo").value;
            const contrasena = document.getElementById("contrasena").value;
            const cargo = document.getElementById("cargo").value;
            const tipoDocumento = document.getElementById("tipo_documento").value;
            const numeroDocumento = document.getElementById("numero_documento").value;
        
            try {
                const response = await fetch("http://localhost:3000/usuarios/createUser", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        Nombre: nombres,
                        Email: correo,
                        Contraseña_hash: contrasena,
                        tipoDocumento: tipoDocumento,
                        numeroDocumento: numeroDocumento,
                        cargo: cargo
                    })
                });
        
                const data = await response.json();
                alert(data.message || "Usuario registrado exitosamente");
                
                if (data.success) {
                    mostrarInicio();
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error al registrar usuario");
            }
        });
    }
});
