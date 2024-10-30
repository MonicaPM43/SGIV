import React from "react";
import Sidebar from "../components/shared/Sidebar";
import "../styles/global.css";

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar /> {/* Sidebar permanece constante en todas las páginas */}
      <main className="content">
        {children} {/* Aquí se carga el contenido específico de cada página */}
      </main>
    </div>
  );
};

export default MainLayout;
