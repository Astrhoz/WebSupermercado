import React from 'react';
import"./SeccionPantalla.css"
import img1 from "../Assets/dp-img1.png";
import img2 from "../Assets/dp-img2.jpg";
import img3 from "../Assets/dp-img3.jpg";
import img8 from "../Assets/flowerkolly.png";
import cherry from "../Assets/cherry.png";
import tomato from "../Assets/tomato-slice.png";
import orange from "../Assets/orange-slice.png";
import plate from "../Assets/plate.png";
import { MdDoubleArrow } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';


const SeccionPantalla = () => {
    return (
        <div className='mx-[200px] mt-[15px]'>
            
            <div className='flex gap-[51px]'>
                <div className='pantalla-primera-seccion'>

                    <img src={img8} className='absolute -z-10' alt=''></img>

                    <div data-aos="fade-down" data-aos-duration="2000" className='absolute right-[40px] top-[20px]'>
                        <img src={cherry} alt=''></img>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="2000" className='absolute right-[242px] bottom-[60px]'>
                        <img src={tomato} alt=''></img>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000" className='absolute right-[50px] bottom-[30px]'>
                        <img src={orange} alt=''></img>
                    </div>

                    <div className='absolute left-[-150px] bottom-[-180px]'>
                        <img src={plate} className='rotate' alt=''></img>
                    </div>

                    <div className='contenido-sec-uno'>
                        <h2>Deliciosa</h2>
                        <h1>Ensalada</h1>
                        <h3>
                            <TypeAnimation
                                sequence={['Todo el día.', 200, '']}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>

                        <div className='comprar-ahora-btn ml-[250px]'>
                            <button>Compra Ahora</button>
                            <MdDoubleArrow className='ml-1'/>
                        </div>

                    </div>

                    <img src={img1} alt=''></img>
                </div>

                <div className='grid gap-[30px]'>
                   
                    <div className='relative'>
                        <div className='contenido-sec-dos'>
                            <h1>Frescos</h1>
                            <h2>Vegatales</h2>
                            
                            <div className='comprar-ahora-btn'>
                                <button>Compra Ahora</button>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>

                        <div>
                            <div className='hover05 column'>
                                <figure>
                                    <img src={img2} alt=''></img>
                                </figure>
                            </div>
                        </div>

                    </div>

                    <div className='relative'>
                        <div className='contenido-sec-tres'>
                            <h1>Frescos</h1>
                            <h2>Todo el día</h2>
                            <div className='comprar-ahora-btn'>
                                <button>Compra Ahora</button>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    
                        <div>
                            <div className='hover05 column'>
                                <figure>
                                    <img src={img3} alt=''></img>
                                </figure>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default SeccionPantalla;