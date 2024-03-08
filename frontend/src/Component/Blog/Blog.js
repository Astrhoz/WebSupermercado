import React from "react";
import "./Blog.css";
import img1 from "../Assets/blog1.png";
import img2 from "../Assets/blog2.png";
import icon1 from "../Assets/milk.png";
import icon2 from "../Assets/mutton.png";
import icon3 from "../Assets/carrot.png";
import icon4 from "../Assets/shalgom.png";
import icon5 from "../Assets/greenflower.png";
import icon6 from "../Assets/mushro.png";
import icon7 from "../Assets/fish.png";

import { Fade } from "react-reveal";

const Blog = () => {
  return (
    <div className="mx-[32px] mt-[80px] relative">
      <img src={icon1} className="absolute left-[47%] top-[70px]" alt="" />
      <img src={icon2} className="absolute left-[88%]]" alt="" />
      <img src={icon3} className="absolute left-[10%] top-[42%]" alt="" />
      <img src={icon4} className="absolute left-[46%] top-[41%]" alt="" />
      <img src={icon5} className="absolute left-[94%] top-[34%]" alt="" />
      <img src={icon6} className="absolute left-[20%] bottom-[20%]" alt="" />
      <img src={icon7} className="absolute left-[47%] bottom-[20%]" alt="" />

      <div className="flex">
        <Fade left delay={1000}>
          <div className="w-1/2">
            <div className="blog-cont-img cursor-pointer w-[572px] h-[354px]">
              <div className="blogImg">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </Fade>

        <Fade left delay={1000}>
          <div className="w-1/2 p-[80px]">
            <h1 className="text-[35px] font-[700] text-center">
              Explorando Nuestros Productos Frescos
            </h1>
            <p className="text-[13px] text-[#7E7C7C] mt-[16px] text-center">
              Bienvenido a nuestro blog, donde te invitamos a sumergirte en el
              mundo de la frescura y la calidad. En nuestro supermercado, nos
              enorgullece ofrecer una amplia variedad de productos frescos,
              desde frutas y verduras hasta productos horneados recién hechos.
              Nos esforzamos por brindarte la mejor experiencia de compra,
              asegurándonos de que cada producto que elijas sea de la más alta
              calidad. Descubre más sobre nuestras ofertas, recetas y consejos
              para aprovechar al máximo tus compras. ¡Te invitamos a explorar y
              disfrutar de la frescura en cada bocado!
            </p>
          </div>
        </Fade>
      </div>

      <div className="flex mt-[40px]">
        <Fade right delay={2500}>
          <div className="w-1/2 p-[80px]">
            <h1 className="text-[35px] font[700]">
              ¿Por qué el cliente nos ama?
            </h1>
            <p className="text-[13] text-[#7E7C7C] mt-[16px]">
              Bienvenido a nuestro espacio, donde la devoción de nuestros
              clientes es la mayor recompensa. Nos enorgullece ofrecer productos
              de primera calidad que no solo satisfacen tus necesidades, sino
              que también crean una conexión especial con cada compra. Desde la
              frescura de nuestros productos hasta la atención personalizada,
              cada detalle se diseña pensando en ti.
            </p>
            <div className="mt-[18px]">
              <h3 className="text-[18px] font-[600]">Nombre del cliente</h3>
              <div className="flex gap-[18px] mt-[8px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[18px] h-[6px] rounded-full bg-[#2AC01D]"></div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top delay={200}>
          <div className="ml-[60px] blog-cont-img w-[572px] h-[354px]">
            <div className="blogImg">
              <img src={img2} alt="" />
            </div>
          </div>
        </Fade>
      </div>

      <hr className="mt-[70px]" />
    </div>
  );
};

export default Blog;
