import React from "react";
import "./Header.css";

import logo from "../Assets/brand1.png";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import callIcon from "../Assets/call icon.svg";

// Importación de Componentes
import Carrito from "../Carrito/Carrito";

// Importación del contexto
import { useCart } from "../../context/useCarrito";

const Header = () => {
  const { carrito } = useCart();

  // Calcula el total de productos en el carrito
  const totalProductos = carrito.reduce(
    (total, producto) => total + producto.quantity,
    0
  );

  return (
    <div className="header-contenedor">
      <div className="logo-buscar-cont">
        <img src={logo} alt="" />
        <div className="buscar-cont">
          <BiSearchAlt className="icono" />
          <input type="text" placeholder="Buscar producto"></input>
        </div>
      </div>

      <div className="contacto-social-cont">
        <div className="contacto">
          <img src={callIcon} alt=""></img>
          <p>
            Llamanos <br /> <span>+005 000 000</span>
          </p>
        </div>

        <div className="social-icono-cont">
          <div className="headerIcono">
            <BiUser className="headerIcono-size" />
          </div>

          <div className="headerIcono">
            <BsHeartFill className="headerIcono-size" />
          </div>

          <div style={{ position: "relative" }}>
            <Carrito />
            {/* Círculo con el número de productos en el carrito */}
            {totalProductos > 0 && (
              <div
                className="carrito-total"
                style={{ position: "absolute", bottom: "0px", right: "0px" }}
              >
                {totalProductos}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
