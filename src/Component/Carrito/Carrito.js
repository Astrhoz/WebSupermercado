import "./Carrito.css";

import React from "react";
import { useId } from "react";

import { MdShoppingCart, MdRemoveShoppingCart, MdClose } from "react-icons/md";
import { useCart } from "../../context/useCarrito";

// Librería de animación
import { Fade } from "react-reveal";

function Carrito() {
  const { carrito, limpiarCarrito, agregarAlCarrito, quitarAlCarrito } =
    useCart();
  const carritoCheckboxId = useId();

  // Calcula el total de productos en el carrito
  const totalProductos = carrito.reduce(
    (total, producto) => total + producto.quantity,
    0
  );

  return (
    <div className="carrito-fondo">
      <label className="carrito-button" htmlFor={carritoCheckboxId}>
        <MdShoppingCart size={35} />
      </label>
      <input id={carritoCheckboxId} type="checkbox" hidden />

      <Fade right delay={50}>
        <aside className="carrito">
          <label className="carrito-button" htmlFor={carritoCheckboxId}>
            <MdClose />
          </label>
          <ul className="pt-6">
            {carrito.map((producto) => (
              <li className="mt-3" key={producto.title}>
                <img
                  src={require(`../Assets/images/${producto.filename}`)}
                  alt={producto.title}
                />
                <div className="flex justify-center">
                  <span>
                    <strong>{producto.title}</strong> - ${producto.price}
                  </span>
                </div>
                <footer className="m-2">
                  <small>Cantidad: {producto.quantity}</small>
                  <button
                    onClick={() => quitarAlCarrito(producto)}
                    className=" text-[#438439] font-bold transition duration-300
                  transform hover:scale-150"
                  >
                    -
                  </button>
                  <button
                    onClick={() => agregarAlCarrito(producto)}
                    className=" text-[#438439] font-bold transition duration-300 transform hover:scale-150"
                  >
                    +
                  </button>
                </footer>
              </li>
            ))}
          </ul>

          <button
            onClick={limpiarCarrito}
            className="bg-[#eff7d0] border border-[#eff7d0] hover:border-[#94b929] active:bg-[#94b929] focus:outline-none w-full rounded-lg flex justify-center mt-3 p-3 transition duration-100 ease-in-out"
          >
            <MdRemoveShoppingCart className="text-xl" />
          </button>
        </aside>
      </Fade>
    </div>
  );
}

export default Carrito;
