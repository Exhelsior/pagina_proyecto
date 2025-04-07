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
        // Guardar información del usuario incluyendo el rol
        localStorage.setItem('userRole', data.user.rol.id);
        localStorage.setItem('userName', data.user.nombre);
        
        watchError(`Bienvenido ${data.user.nombre}, redirigiendo...`);
        setTimeout(() => {
          window.location.href = "./indexMenu.html";
        }, 3000);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  });
  function watchError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
  }
});
