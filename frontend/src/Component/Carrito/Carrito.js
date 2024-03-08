import "./Carrito.css";

import React from "react";
import { useId, useState, useEffect } from "react";

import { MdShoppingCart, MdRemoveShoppingCart, MdClose } from "react-icons/md";
import { useCart } from "../../context/useCarrito";

// Librería de animación
import { Fade } from "react-reveal";

function Carrito() {
  const { carrito, limpiarCarrito, agregarAlCarrito, quitarAlCarrito } =
    useCart();

  const carritoCheckboxId = useId();

  // Función para agregar la compra del carrito a la base de datos
  const handleCompra = async () => {
    for (let i = 0; i < carrito.length; i++) {
      // Se crea un objeto con los datos necesarios para guardarlos en el carrito
      const compra = {
        titulo: carrito[i].title,
        tipo: carrito[i].type,
        descripcion: carrito[i].description,
        calificacion: carrito[i].rating,
        cantidad: carrito[i].quantity,
        total: carrito[i].price * carrito[i].quantity,
        fecha: new Date().toISOString(), // Obtiene la fecha y hora actual en formato ISO con la zona horaria
      };

      const res = await fetch("http://localhost:5000/compras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compra),
      });
      const data = await res.json();
      console.log(data);
    }
  };

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
            onClick={handleCompra}
            className="bg-[#eff7d0] border border-[#eff7d0] hover:border-[#94b929] active:bg-[#94b929] focus:outline-none w-full rounded-lg flex justify-center mt-3 p-3 transition duration-100 ease-in-out"
          >
            Comprar Ahora
          </button>

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
