import React from 'react';
import "./SliderTwo.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../Assets/mushroom.png";
import img2 from "../Assets/pickles.png";
import img3 from "../Assets/pickles 2.png";
import img4 from "../Assets/juice.png";

import { MdDoubleArrow } from "react-icons/md";

const SliderTwo = () => {
    return (
        <div>
            <Swiper
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}

            navigation={true}
            modules={[Autoplay, Navigation]}
            className='mySwiper'
            >

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img1} alt=''/>
                        <div className='contenido'>
                            <h1>Producto uno</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img2} alt=''/>
                        <div className='contenido'>
                            <h1>Producto dos</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img3} alt=''/>
                        <div className='contenido'>
                            <h1>Producto tres</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img4} alt=''/>
                        <div className='contenido'>
                            <h1>Producto cuatro</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img1} alt=''/>
                        <div className='contenido'>
                            <h1>Producto uno</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img2} alt=''/>
                        <div className='contenido'>
                            <h1>Producto dos</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img3} alt=''/>
                        <div className='contenido'>
                            <h1>Producto tres</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='hoverIncrease'>  
                        <img src={img4} alt=''/>
                        <div className='contenido'>
                            <h1>Producto cuatro</h1>
                            <h2>$200.25</h2>
                            <div className='precio-subrayado'></div>
                            <div className='seleccionar-btn'>
                                <p>Seleciona la opción</p>
                                <MdDoubleArrow className='ml-1'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SliderTwo;