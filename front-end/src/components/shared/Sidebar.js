import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";
import userImage from "../../assets/images/logo-unmsm.jpg";
import userImage2 from "../../assets/images/jake.jpg";

const Sidebar = () => {
  // Estado para rastrear cuál menú está activo
  const [activeMenu, setActiveMenu] = useState(null);

  // Maneja el clic en un menú
  const handleMenuClick = (menuIndex) => {
    // Si el menú ya está activo, ciérralo; si no, ábrelo y cierra los demás
    setActiveMenu(menuIndex === activeMenu ? null : menuIndex);
  };

  return (
    <div className="sidebar">
      <div className="head">
        <div className="user-img">
          <img src={userImage2} alt="user" />
        </div>
        <div className="user-details">
          <p className="title">Web Developer</p>
          <p className="name">Jake</p>
        </div>
      </div>
      <div className="nav">
        <div className="menu">
          <p className="title">Main</p>
          <ul>
            {/* Menú de Inicio */}
            <li className={activeMenu === 0 ? "active" : ""}>
              <Link to="/" onClick={() => handleMenuClick(0)}>
                <i className="icon ph-bold ph-house-simple"></i>
                <span className="text">Inicio</span>
              </Link>
            </li>
            {/* Menú de Ventas con submenús */}
            <li className={activeMenu === 1 ? "active" : ""}>
              <Link to="/" onClick={() => handleMenuClick(1)}>
                <i className="icon ph-bold ph-chart-bar"></i>
                <span className="text">Ventas</span>
                <i className="arrow ph-bold ph-caret-down"></i>
              </Link>
              <ul className={`sub-menu ${activeMenu === 1 ? "open" : ""}`}>
                <li>
                  <Link to="/ventas/registrar">Registrar venta</Link>
                </li>
                <li>
                  <Link to="/ventas/consultar">Consultar ventas</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <p className="title">Cuenta</p>
        <ul>
          <li>
            <Link to="/logout">
              <i className="icon ph-bold ph-sign-out"></i>
              <span className="text">Cerrar sesión</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
