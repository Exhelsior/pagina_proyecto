let vista;
let mainContenido;
let vistaActual = "inicio";

document.addEventListener("DOMContentLoaded", () => {
  inicializar();

  // Solo mostrar el inicio si no hay otra vista cargada
  if (!document.getElementById("form-Inicio")) {
    mostrarInicio();
  }
});

function inicializar() {
  vista = new Vista();
  mainContenido = document.getElementById("main-contenido");
}

function mostrarInicio() {
  if (vistaActual !== "inicio") {
    vistaActual = "inicio"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempInicio", "main-contenido");
      const botonLogin = document.getElementById("mostraMenu");
      const error = document.getElementById("errorMessage");

      botonLogin.addEventListener("click", async (event) => {
        event.preventDefault();
        error.classList.add("hidden");

        const email = document.getElementById("email")?.value.trim();
        const contraseña = document.getElementById("contraseña")?.value.trim();

        if (!email || !contraseña) {
          watchError("Por favor complete todos los campos.");
          return;
        }

        try {
          const response = await fetch("http://localhost:3000/usuario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: contraseña,
        }),
          });

          const data = await response.json();
          if (data.success) {
        localStorage.setItem('userRole', data.user.rol.id);
        localStorage.setItem('userName', data.user.nombre);
        
        watchError(`Bienvenido ${data.user.nombre}, redirigiendo...`);
        setTimeout(() => {
          window.location.href = "./indexMenu.html";
        }, 3000);
          } else {
        watchError(data.message || "Error en las credenciales.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          watchError("Error en el servidor. Por favor, intente nuevamente más tarde.");
        }
      });
        }, 100);
      }
    }

    function watchError(message) {
      const error = document.getElementById("errorMessage");
      error.textContent = message;
      error.classList.remove("hidden");
    }

    function mostrarToken() {
      if (vistaActual !== "token") {
        vistaActual = "token";
        setTimeout(() => {
      vista.mostrarPlantilla("tempToken", "main-contenido");
      const botoncito = document.getElementById("showNotificationBtn");
      const error = document.getElementById("errorMessage");

      botoncito.addEventListener("click", async (event) => {
        event.preventDefault();
        error.classList.add("hidden");
        const email = document.getElementById("tokenEmail")?.value.trim();

        if (!email) {
          watchError("Por favor complete todos los campos.");
          return;
        }

        try {
          const response = await fetch("http://localhost:3000/usuario/recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
          });

          const data = await response.json();
          if (data.success) {
        watchError(`Token enviado a ${email}`);
        setTimeout(() => mostrarRecovery(), 3000);
          } else {
        watchError(data.message || "Error al enviar el token.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          watchError("Error en el servidor. Por favor, intente nuevamente más tarde.");
        }
      });
        }, 100);
      }
    }

    function mostrarRecovery() {
      if (vistaActual !== "recovery") {
        vistaActual = "recovery";
        setTimeout(() => {
      vista.mostrarPlantilla("tempRecovery", "main-contenido");
      const botoncote = document.getElementById("showNotificationBtn");
      const error = document.getElementById("errorMessage");

      botoncote.addEventListener("click", async (event) => {
        event.preventDefault();
        error.classList.add("hidden");
        const recoveryToken = document.getElementById("recoveryToken")?.value.trim();
        const newPassword = document.getElementById("newPassword")?.value.trim();

        if (!recoveryToken || !newPassword) {
          watchError("Por favor complete todos los campos.");
          return;
        }

        try {
          const response = await fetch("http://localhost:3000/usuario/newPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recoveryToken: recoveryToken,
          newPassword: newPassword,
        }),
          });

          const data = await response.json();
          if (data.success) {
        watchError("Contraseña cambiada correctamente");
        setTimeout(() => mostrarInicio(), 3000);
          } else {
        watchError(data.message || "Error al cambiar la contraseña.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          watchError("Error en el servidor. Por favor, intente nuevamente más tarde.");
        }
      });
        }, 100);
      }
    }