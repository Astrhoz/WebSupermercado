import React from "react";
import productosData from "../mocks/productos.json";

function Tienda() {
  // Extrae la matriz de productos del objeto JSON
  const productos = productosData.productos;

  return (
    <main className="container mx-auto p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <li key={producto.id} className="bg-soft-green overflow-hidden">
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
              <p className="text-gray-800 font-bold">
                Calificación:{" "}
                <span className="font-normal">{producto.rating}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Tienda;
