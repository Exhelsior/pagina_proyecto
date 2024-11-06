document.addEventListener("DOMContentLoaded", function () {
  // Formulario de Registro
  const registroForm = document.getElementById("form-Registro");
  if (registroForm) {
    registroForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = {
        usuario: document.getElementById("usuario").value,
        nombre: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        contraseña: document.getElementById("contrasena").value,
        cargo: document.getElementById("cargo").value,
        fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
        tipo_documento: document.getElementById("tipo_documento").value,
        numero_documento: document.getElementById("numero_documento").value,
      };

      try {
        const response = await fetch('/registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
          alert('Registro exitoso');
          // Aquí puedes llamar a una función del controlador para mostrar el formulario de login
        } else {
          alert(data.error || 'Error en el registro');
        }
      } catch (error) {
        alert('Error en el servidor');
      }
    });
  }

  // Formulario de Login
  const loginForm = document.getElementById('form-Inicio');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = {
        usuario: document.getElementById('usuario').value,
        contrasena: document.getElementById('contrasena').value
      };
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
          alert('Login exitoso');
          // Aquí puedes redirigir a la página que desees
          // window.location.href = 'bienvenida.html';
        } else {
          alert(data.error || 'Error en el login');
        }
      } catch (error) {
        alert('Error en el servidor');
      }
    });
  }
});