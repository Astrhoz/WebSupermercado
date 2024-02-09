import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ handdleContenido }) => {
  return (
    <div className="navbar-contenedor">
      <div className="navbar-sub-contenedor">
        <div className="menu">
          <GiHamburgerMenu className="menu-icon" />
          <p>Departamentos</p>
        </div>

        <div className="navbar">
          <ul className="nav-animado">
            <li>
              <a href="#!" onClick={() => handdleContenido(1)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(2)}>
                Tienda
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(3)}>
                Pagina
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(4)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handdleContenido(5)}>
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
