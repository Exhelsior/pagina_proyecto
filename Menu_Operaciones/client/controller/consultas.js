async function products() {
    alert("Hola desde consultas.js");

    try {
        const response = await fetch('http://localhost:3000/inventario');
        if (!response.ok) throw new Error("Producto no encontrado");

        const data = await response.json();
        console.log("Productos recibidos:", data);

        // Llamar a la función para mostrar los productos
        mostrarProductos(data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

function mostrarProductos(productos) {
    const listaDiv = document.getElementById('listaProducts');
    listaDiv.innerHTML = ''; // Limpiar el div antes de agregar elementos

    if (productos.length === 0) {
        listaDiv.innerHTML = "<p>No hay productos disponibles</p>";
        return;
    }

    const ul = document.createElement('ul');

    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.NombreProducto} - Precio: ${producto.Precio}€ - Stock: ${producto.Cantidad}`;
        ul.appendChild(li);
    });

    listaDiv.appendChild(ul);
}

// Llamar a la función para cargar los productos
products();