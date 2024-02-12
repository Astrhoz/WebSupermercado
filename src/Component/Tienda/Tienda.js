import React from "react";
import productosData from "../mocks/productos.json";

// Importación de la librería de animación
import { Fade } from "react-reveal";
import { useCart } from "../../context/useCarrito";

function Tienda() {
  const { agregarAlCarrito, carrito, removerDelCarrito } = useCart();

  // Verifica si el producto está en el carrito
  const checkProductoEnCarrito = (producto) => {
    return carrito.some((item) => item.title === producto.title);
  };

  // Extrae la matriz de productos del objeto JSON
  const productos = productosData.productos;

  return (
    <main className="container mx-auto p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <Fade down delay={1000} key={producto.title}>
            <li className="bg-soft-green overflow-hidden relative">
              <img
                src={require(`../Assets/images/${producto.filename}`)}
                alt={producto.title}
                className="h-64 w-full object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{producto.title}</h2>
                <p className="text-gray-700 mb-4">{producto.description}</p>
                <p className="text-gray-800 font-bold mb-2">
                  Precio: <span className="font-normal">${producto.price}</span>
                </p>
                <p className="text-gray-800 font-bold mb-4">
                  Calificación:{" "}
                  <span className="font-normal">{producto.rating}</span>
                </p>
                <p className="h-20"></p> {/* Altura definida para el párrafo */}
                {/* Botón para agregar al carrito */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <button
                    onClick={() => {
                      checkProductoEnCarrito(producto)
                        ? removerDelCarrito(producto)
                        : agregarAlCarrito(producto);
                    }}
                    className={
                      checkProductoEnCarrito(producto)
                        ? "bg-[#e90941] hover:bg-[#820826] text-white font-bold py-2 px-4 rounded mt-2 mb-10"
                        : "bg-[#94b929] hover:bg-[#57711a] text-white font-bold py-2 px-4 rounded mt-2 mb-10"
                    }
                  >
                    {checkProductoEnCarrito(producto)
                      ? "Quitar del Carrito"
                      : "Agregar al Carrito"}
                  </button>
                </div>
              </div>
            </li>
          </Fade>
        ))}
      </ul>
    </main>
  );
}

export default Tienda;
