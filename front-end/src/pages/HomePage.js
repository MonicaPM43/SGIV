import React from "react";
import "../styles/home.css";
import backgroundImage from "../assets/images/bodega.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Sección de la izquierda con el mensaje de bienvenida */}
      <div className="welcome-section">
        <h1 className="title">Bienvenido al sistema</h1>
        <p className="subtitle">
          Nos alegra tenerte aquí. Explora nuestras funcionalidades.
        </p>
        <p className="description">
          Este sistema te permite gestionar inventarios y ventas de manera
          eficiente.
        </p>
      </div>

      {/* Imagen de fondo en la sección derecha */}
      <div className="image-section">
        <img src={backgroundImage} alt="home" />
      </div>
    </div>
  );
};

export default HomePage;
