document.getElementById("contenedor-registro").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("nombres").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("contrasena").value;
    const cargo = document.getElementById("cargo").value;
    const typeDocument = document.getElementById("tipo_documento").value;
    const numberDocument = document.getElementById("numero_documento").value;
    
    const response = await fetch("/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, cargo, typeDocument, numberDocument })
    });
    const data = await response.json();
    alert(data.message);
});

document.getElementById("form-Inicio").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contraseña").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    alert(data.message);
    if (data.success) {
        window.location.href = "../indexMenu.html";
    }
}
)

