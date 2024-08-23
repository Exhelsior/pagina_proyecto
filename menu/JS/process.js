const barras = document.querySelector('.barras');
const hamburger = document.querySelector('.hamburguesa');
const pagInv = document.getElementById('pagInv');
const pagAgen = document.getElementById('pagAgen');
const pagFact = document.getElementById('pagFact');
const pagPed = document.getElementById('pagPed');
const mainContenido = document.getElementById('main-contenido');

barras.addEventListener('click', (e) => {
    hamburger.classList.toggle('open');
});

pagInv.addEventListener('click', (e) => {
    mainContenido.innerHTML = `
    <div class="inv">
        <div class="inventario">

        </div>
        <div class="materiaPrima">

        </div>
    </div>

    <div class="inv2">
        <div class="añadir">

        </div>
        <div class="modificar">

        </div>
        <div class="eliminar">

        </div>
        <div class="actualizar">

        </div>
    </div>

    <div class="inv3">
        <div class="muestra">

        </div>
    </div>
    `
});