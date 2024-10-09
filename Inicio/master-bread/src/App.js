
// para iniciar con el programa, abres tu terminal, identifica que tu directorio 
// se encuentre en la carpeta master-bread
// pon npm install
// pon npm install react
// luego de que se instalen las dependencias escribe
// npm start

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logos from "./logo.svg";
import "./LoginPage.css";

// configuracion animacion
const pageVariants = {
  initial: { opacity: 0, x: "-100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    // botones de navegacion
    <div className="login-container">
      <img src={logos} alt="Logo" className="logo" />
      <div className="text">
        <h2>
          {activeTab === "login" && "Iniciar Sesión"}
          {activeTab === "register" && "Registrarse"}
          {activeTab === "recovery" && "Recuperar Contraseña"}
        </h2>
        {/* logica de navegacion */}
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Registro
          </button>
          <button
            className={`tab-button ${activeTab === "recovery" ? "active" : ""}`}
            onClick={() => setActiveTab("recovery")}
          >
            Recuperar
          </button>
        </div>
      </div>

      {/* Zona con animacion */}
      <AnimatePresence mode="wait">
        <motion.div
          className="formularios"
          key={activeTab}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {/* formulario de inicio de sesion */}
          {activeTab === "login" && (
            <form className="inicio">
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
            </form>
          )}

          {/* formulario de registro */}
          {activeTab === "register" && (
            <form className="registro">
              <input type="text" placeholder="Usuario" />
              <input type="text" placeholder="Nombres" />
              <input type="text" placeholder="Apellidos" />
              <input type="password" placeholder="Contraseña" />
              <select>
                <option value="">Cargo</option>
                <option value="jefe">Jefe de inventario</option>
                <option value="despachador">Despachador</option>
                <option value="repartidor">Repartidor</option>
              </select>
              <input type="date" placeholder="Fecha de nacimiento" />
              <select>
                <option value="">Tipo de documento</option>
                <option value="cedula">Cédula</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="permanencia">Permanencia</option>
              </select>
              <input type="text" placeholder="Número de documento" />
              <button>Registrarse</button>
            </form>
          )}

          {/* formulario de recovery */}
          {activeTab === "recovery" && (
            <form className="recuperar">
              <input type="text" placeholder="ID de usuario" />
              <input type="email" placeholder="Correo electrónico" />
              <button>Recuperar Contraseña</button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
      {/* Termina zona con animacion */}

      {/* botones de navegacion */}
      <div className="footer">
        {activeTab === "login" && (
          <p>
            <button onClick={() => setActiveTab("register")}>Iniciar sesion</button>
          </p>
        )}
        {activeTab === "login" && (
          <p>
            ¿No tienes un usuario?{" "}
            <button onClick={() => setActiveTab("register")}>Regístrate</button>
          </p>
        )}
        {activeTab !== "login" && (
          <button onClick={() => setActiveTab("login")}>
            Volver al inicio
          </button>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
};

export default App;
