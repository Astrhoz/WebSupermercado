import { useContext } from "react";
import { ContextoCarrito } from "./carrito";

// Hook Customizado
export const useCart = () => {
  const contexto = useContext(ContextoCarrito);

  if (contexto === undefined) {
    throw new Error("useCart debe ser usado con ProveedorCarrito");
  }

  return contexto;
};
