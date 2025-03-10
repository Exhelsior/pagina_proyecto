document.addEventListener("DOMContentLoaded", function () {
  const formInicio = document.getElementById("form-Inicio");
  const error = document.getElementById("errorMessage");

  formInicio.addEventListener("submit", async function (event) {
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
        watchError(`Bienvenido ${data.user.nombre}, redirigiendo...`);
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
});
