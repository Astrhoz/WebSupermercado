import React, { createContext, useState } from "react";

// Crear Contexto
export const ContextoCarrito = createContext();

// Crear Proveedor
function ProveedorCarrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    // Comprobar si existe un producto ya en el carrito
    const productoEnCarrito = carrito.findIndex(
      (item) => item.title === producto.title
    );

    if (productoEnCarrito >= 0) {
      // Si el producto está en el carrito, incrementa su cantidad
      const nuevoCarrito = [...carrito];
      nuevoCarrito[productoEnCarrito].quantity += 1;
      setCarrito(nuevoCarrito);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCarrito((estadoPrevio) => [
        ...estadoPrevio,
        {
          ...producto,
          quantity: 1,
        },
      ]);
    }
  };

  const quitarAlCarrito = (producto) => {
    // Comprobar si existe un producto ya en el carrito
    const productoEnCarrito = carrito.findIndex(
      (item) => item.title === producto.title
    );

    // Se crea un nuevo carrito
    const nuevoCarrito = [...carrito];
    nuevoCarrito[productoEnCarrito].quantity -= 1;
    setCarrito(nuevoCarrito);

    // Si la cantidad es mayor a 0
    if (nuevoCarrito[productoEnCarrito].quantity === 0) {
      removerDelCarrito(nuevoCarrito[productoEnCarrito]);
    }
  };

  const removerDelCarrito = (producto) => {
    setCarrito((estadoPrevio) =>
      estadoPrevio.filter((item) => item.title !== producto.title)
    );
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  // Método para calcular el total de productos en el carrito
  const calcularTotalProductos = () => {
    return carrito.reduce((total, producto) => total + producto.quantity, 0);
  };

  return (
    <ContextoCarrito.Provider
      value={{
        carrito,
        removerDelCarrito,
        agregarAlCarrito,
        limpiarCarrito,
        quitarAlCarrito,
        calcularTotalProductos,
      }}
    >
      {children}
    </ContextoCarrito.Provider>
  );
}

export default ProveedorCarrito;
