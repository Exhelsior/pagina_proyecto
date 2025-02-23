async function registrarUsuario() {
    const nombres = document.getElementById('nombres').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const cargo = document.getElementById('cargo').value;
    const tipoDocumento = document.getElementById('tipo_documento').value;
    const numeroDocumento = document.getElementById('numero_documento').value;
  
    const data = {
      Nombre: nombres,
      Email: correo,
      Contraseña_hash: contrasena,
      tipoDocumento: tipoDocumento,
      numeroDocumento: numeroDocumento,
      FechaCreacion: new Date().toISOString(),
      IdRol: cargo // Assuming cargo is the role ID
    };
  
    try {
      const response = await fetch('http://localhost:3001/usuarios/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Usuario creado y rol asignado exitosamente');
        mostrarInicio(); // Assuming this function exists to show the login form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Error al crear usuario');
    }
  }