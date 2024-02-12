import React from "react";
import "./ProductosDestacados.css";
import SliderOne from "../SliderOne/SliderOne";

const ProductosDestacados = () => {
  return (
    <div className="mx-[100px] mt-[15px]">
      <div
        data-aos="fade-down"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        className="seccion-titulo"
      >
        <div className="seccion-linea"></div>
        <h1>Productos Destacados</h1>
        <div className="seccion-linea"></div>
      </div>

      <div data-aos="fade-right" data-aos-duration="1500" className="mt-[60px]">
        <SliderOne />
      </div>
    </div>
  );
};

export default ProductosDestacados;
