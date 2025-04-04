export const ROLE_PERMISSIONS = {
    1: ['pag-inventarios', 'pag-pedidos', 'pag-agendados', 'pag-envios'], // Admin
    2: ['pag-inventarios'], // Jefe de inventario
    3: ['pag-pedidos'], // Despachador
    4: ['pag-agendados', 'pag-envios'] // Repartidor
};

export function setupMenuPermissions(userRole) {
    const menuButtons = document.querySelectorAll('.bar-menu .boton');
    const allowedButtons = ROLE_PERMISSIONS[userRole] || [];
    menuButtons.forEach(button => {
        if (button.id === 'salir') return;
        if (!allowedButtons.includes(button.id)) {
            button.style.display = 'none';
        }
    });
}