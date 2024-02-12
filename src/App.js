import { useEffect } from "react";
import Home from "./Component/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

// Importación del contexto para el carrito
import ProveedorCarrito from "./context/carrito";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ProveedorCarrito>
      <Home />
    </ProveedorCarrito>
  );
}

export default App;
