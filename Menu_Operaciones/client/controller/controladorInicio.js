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
      const error = document.createElement("div");
      const loginUser = document.createElement("div");

      botonLogin.addEventListener("click", async (event) => {
        event.preventDefault();
        error.classList.add("hidden");
        loginUser.classList.add("hidden");

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
            logeado(`Bienvenido ${data.user.nombre}, redirigiendo...`);
            setTimeout(() => {
              window.location.href = "./indexMenu.html";
            }, 3000);
          } else {
            watchError(data.message || "Error en las credenciales.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          watchError(
            "Error en el servidor. Por favor, intente nuevamente más tarde."
          );
        }
      });

      function watchError(message) {
        error.textContent = message;
        error.classList.remove("hidden");
      }

      function logeado(message) {
        loginUser.textContent = message;
        loginUser.classList.remove("hidden");
      }
    }, 100);
  }
}

function mostrarToken() {
  if (vistaActual !== "token") {
    vistaActual = "token"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempToken", "main-contenido");
      const botoncito = document.getElementById("showNotificationBtn");
      botoncito.addEventListener("click", async (event) => {
        event.preventDefault();
        const email = document.getElementById("tokenEmail")?.value.trim();

        if (!email) {
          alert("Por favor complete todos los campos.");
          return;
        }

        try {
          const response = await fetch(
            "http://localhost:3000/usuario/recovery",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: email,
              }),
            }
          );

          const data = await response.json();
          if (data.success) {
            alert(`Token enviado a ${email}`);
            mostrarRecovery(); // Añadido: cambiar a la plantilla recovery después del éxito
          } else {
            alert(data.message || "Error en las credenciales.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          alert(
            "Error en el servidor. Por favor, intente nuevamente más tarde."
          );
        }
      });
    }, 100);
  }
}

function mostrarRecovery() {
  if (vistaActual !== "recovery") {
    vistaActual = "recovery"; // Cambia la vista activa
    setTimeout(() => {
      vista.mostrarPlantilla("tempRecovery", "main-contenido");
      const botoncote = document.getElementById("showNotificationBtn");
      botoncote.addEventListener("click", async (event) => {
        console.log(tempRecovery);
        event.preventDefault();
        const recoveryToken = document
          .getElementById("recoveryToken")
          ?.value.trim();
        const newPassword = document
          .getElementById("newPassword")
          ?.value.trim();

        if (!recoveryToken || !newPassword) {
          alert("Por favor complete todos los campos.");
          return;
        }

        try {
          const response = await fetch(
            "http://localhost:3000/usuario/newPassword",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                recoveryToken: recoveryToken,
                newPassword: newPassword,
              }),
            }
          );

          const data = await response.json();
          if (data.success) {
            alert("Contraseña cambiada correctamente");
            mostrarInicio(); // Añadido: cambiar a la plantilla inicio después del éxito
          } else {
            alert(data.message || "Error en las credenciales.");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          console.error(
            "Error en el servidor. Por favor, intente nuevamente más tarde."
          );
        }
      });
    }, 100);
  }
}
