// // import { closeModal } from "../view/js/contenido-modal.js";
// import { closeModal } from "../view/js/contenido-modal.js";
// import { listenerDeleteProduct } from "./buttons.js";

// // Trae los datos desde la base de datos
// export async function products() {
//     try {
//         const response = await fetch('http://localhost:3000/inventario');
//         if (!response.ok) throw new Error("Producto no encontrado");

//         const data = await response.json();
//         // console.log("Productos recibidos:", data);

//         mostrarProductos(data);

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// export function mostrarProductos(productos) {
//     const tbody = document.querySelector('.t-productos .t-body');

//     if (!tbody) {
//         console.error("Error: No se encontró el tbody en la tabla.");
//         return;
//     }

//     tbody.innerHTML = ''; // Limpiar antes de agregar nuevos datos

//     if (productos.length === 0) {
//         tbody.innerHTML = "<tr><td colspan='7'>No hay productos disponibles</td></tr>";
//         return;
//     }

//     productos.forEach(producto => {
//         const fila = document.createElement('tr');

//         const fechaVencimiento = new Date(producto.FechaVencimiento).toLocaleDateString("es-ES",
//           {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit"
//           }
//         );

//         const lote = new Date(producto.Lote).toLocaleDateString("es-ES", 
//           {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit"
//           });

//         fila.innerHTML = `
//             <td>${producto.IdProducto}</td>
//             <td>${producto.NombreProducto}</td>
//             <td>${lote}</td>
//             <td>${fechaVencimiento}</td>
//             <td>$${producto.Precio}</td>
//             <td>${producto.Cantidad}</td>
//             <td>
//                 <div class="b-caja">
//                         <button class="add-boton-tabla t-boton">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="13"
//                             height="16"
//                             fill="#0a0a0a"
//                             class="bi bi-pencil"
//                             viewBox="0 0 16 13"
//                           >
//                             <path
//                               d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
//                             />
//                           </svg>
//                         </button>
//                         <button id="confirmDelete" class="del-boton-tabla t-boton" >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             fill="currentColor"
//                             class="bi bi-x"
//                             viewBox="0 0 16 13"
//                           >
//                             <path
//                               d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//             </td>
//         `;

//         tbody.appendChild(fila);
//     });
// }

// export const eliminarProducto = async (e) => {
//   const botonEliminar = e.target.closest(".del-boton-tabla");
//   if (!botonEliminar) return;

//   const fila = botonEliminar.closest("tr");
//   const idProducto = fila.querySelector("td").textContent;

//   listenerDeleteProduct();
//   const btnDelete = document.getElementById("delete");
//   const btnCancel = document.getElementById("cancelDelete");
//   console.log(btnDelete)
//   if (btnDelete) {
//   btnDelete.addEventListener("click", async() => {
//     try { 
//       const response = await fetch(`http://localhost:3000/inventario/delete/${idProducto}`, {
//         method: "DELETE"
//       });
  
//       if (!response.ok) throw new Error("No se pudo eliminar el producto");
  
//       fila.remove();
//       closeModal();
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert(`Error al elminar el producto: ${error.message}`);
//     }
//   })
//   }
//   if(btnCancel) {
//     btnCancel.addEventListener("click", () => {
//       closeModal();
//     })
//   } else {
//   console.error("Botón de confirmación no encontrado en el modal");
//   };

// }
  


 

// export const sendProducto = async () => {

//   const NombreProducto = document.getElementById("name-product")?.value.trim();
//   const Precio = document.getElementById("price-product")?.value.trim();
//   const Cantidad = document.getElementById("cant-product")?.value.trim();
//   const Lote = document.getElementById("fab-date-product").value;
//   const FechaVencimiento = document.getElementById("venc-date-product").value;

//   if (!NombreProducto || !Precio || !Cantidad || !Lote || !FechaVencimiento) {
//       alert("Todos los campos son obligatorios");
//       return;
//   }

//   const precioNum = parseFloat(Precio);
//   const cantidadNum = parseInt(Cantidad);

//   if (isNaN(precioNum) || precioNum <= 0) {
//     alert("El precio debe ser un número mayor a 0");
//     return
//   }

//   if (isNaN(cantidadNum) || cantidadNum <= 0) {
//     alert("La cantidad debe ser un número mayor a 0");
//     return;
//   }

//   const nuevoProducto = {
//     NombreProducto,
//     Precio: precioNum,
//     Cantidad: cantidadNum,
//     Lote,
//     FechaVencimiento,
//   };

//   try {
//       const response = await fetch("http://localhost:3000/inventario/create", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(nuevoProducto),
//       });

//       if (!response.ok) {
//           throw new Error("Error al enviar los datos");
//       }

//       // Opcional: Recargar la tabla después de agregar
//       products();
//   } catch (error) {
//       console.error("Error al enviar el producto:", error);
//       alert("Hubo un error al agregar el producto");
//   }
// };

// export function searchProducto() {
//   const input = document.getElementById("search-product").value.toLowerCase();
//   const tabla = document.querySelector(".t-productos .t-body");
//   const filas = tabla.getElementsByTagName("tr");

//   for (let i = 0; i < filas.length; i++) { // Empieza desde 0
//       let filaText = filas[i].textContent.toLowerCase();
//       filas[i].style.display = filaText.includes(input) ? "" : "none";
//   }
// }