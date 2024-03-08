import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SeccionPantalla from "../SeccionPantalla/SeccionPantalla";
// Importación de componentes
import ProductosDestacados from "../ProductosDestacados/ProductosDestacados";
import Tienda from "../Tienda/Tienda";
import Contacto from "../Contacto/Contacto";
import Tabla from "../TablaDatos/Tabla";
import TopSell from "../TopSell/TopSell";
import Blog from "../Blog/Blog";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";

// Importación de librerías de react
import { useState } from "react";

const Home = () => {
  // Control para manjar el estado del contenido de la pantalla principal
  const [contenido, setContenido] = useState(1);

  const handdleContenido = (indice) => {
    setContenido(indice);
  };

  const cambiarContenido = () => {
    switch (contenido) {
      case 1:
        return (
          <>
            <SeccionPantalla />
            <ProductosDestacados />
            <TopSell />
            <Brands />
          </>
        );
      case 2:
        return <Tienda />;
      case 3:
        return <Tabla />;
      case 4:
        return <Blog />;
      case 5:
        return <Contacto />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <Navbar handdleContenido={handdleContenido} />
      {/* Renderizar el contenido basado en el Navbar */}
      {cambiarContenido()}
      <Footer />
    </div>
  );
};
export default Home;
