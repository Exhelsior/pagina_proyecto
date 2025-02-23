// Gestor de Templates y Formularios
class FormManager {
    constructor() {
        this.mainContainer = document.getElementById('main-contenido');
        this.templates = {
            inicio: document.getElementById('tempInicio'),
            registro: document.getElementById('tempRegistro'),
            token: document.getElementById('tempToken'),
            recovery: document.getElementById('tempRecovery')
        };
        this.initializeEventListeners();
    }

    // Inicialización de eventos globales
    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupFormListeners();
        });
    }

    // Configuración de listeners para formularios
    setupFormListeners() {
        // Listener para inicio de sesión
        const loginForm = document.querySelector('#form-Inicio');
        if (loginForm) {
            loginForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                await this.handleLogin();
            });
        }

        // Listener para registro
        const registroForm = document.querySelector('.contenedor-registro');
        if (registroForm) {
            registroForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                await this.handleRegistro();
            });
        }
    }

    // Manejador de inicio de sesión
    async handleLogin() {
        try {
            const credentials = {
                username: document.getElementById('usuario').value,
                email: document.getElementById('email').value,
                password: document.getElementById('contraseña').value
            };

            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();
            
            if (data.success) {
                window.location.href = '../indexMenu.html';
            } else {
                this.showNotification(data.message, 'error');
            }
        } catch (error) {
            this.showNotification('Error en el inicio de sesión', 'error');
            console.error('Error:', error);
        }
    }

    // Manejador de registro
    async handleRegistro() {
        try {
            const userData = {
                username: document.getElementById('nombres').value,
                email: document.getElementById('correo').value,
                password: document.getElementById('contrasena').value,
                cargo: document.getElementById('cargo').value,
                typeDocument: document.getElementById('tipo_documento').value,
                numberDocument: document.getElementById('numero_documento').value
            };

            const response = await fetch('/createUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            this.showNotification(data.message, data.success ? 'success' : 'error');
        } catch (error) {
            this.showNotification('Error en el registro', 'error');
            console.error('Error:', error);
        }
    }

    // Cambio de templates
    switchTemplate(templateId) {
        const template = this.templates[templateId];
        if (!template) return;

        const clone = template.content.cloneNode(true);
        this.mainContainer.innerHTML = '';
        this.mainContainer.appendChild(clone);
        this.setupFormListeners();
    }

    // Sistema de notificaciones
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Instanciación del gestor de formularios
const formManager = new FormManager();

// Funciones globales para cambio de vista
window.mostrarRegistro = () => formManager.switchTemplate('registro');
window.mostrarInicio = () => formManager.switchTemplate('inicio');
window.mostrarToken = () => formManager.switchTemplate('token');
window.mostrarRecovery = () => formManager.switchTemplate('recovery');