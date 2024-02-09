import React from "react";
import "./Footer.css";
import logo from '../Assets/brand1.png';
import payment from '../Assets/payment.png';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Fade } from "react-reveal";

const Footer = () => {
    return (
        <div className="footer-container mt-10 bg-[#9FB846] h-[300px] relative overflow-hidden">
            
            <div className="mx-8 md:mx-32 flex justify-between items-center pt-8">
                {/* Sección del Logo y "Call Us" */}
                <div className="flex items-center">
                    <div>
                        <img src={logo} className="w-[150px] h-[93px]" alt="Logo" />
                    </div>
                    <div className="ml-4 md:ml-8">
                        <h3 className='text-[18px] font-[500]'>
                            Llámanos <br />
                            <span className='font-[600]'>+009 000 000</span>
                        </h3>
                    </div>
                </div>

                {/* Sección "Follow Us" */}
                <div className="md:ml-12">
                    <h3 className="text-[18px] font-[500]">Síganos</h3>
                    <div className="flex gap-4 md:gap-6 mt-2">
                        <div className="bottom-social-icon">
                            <FaFacebookF />
                        </div>
                        <div className="bottom-social-icon">
                            <BsInstagram />
                        </div>
                        <div className="bottom-social-icon">
                            <BsTwitter />
                        </div>
                        <div className="bottom-social-icon">
                            <FaTiktok />
                        </div>
                    </div>
                </div>

                {/* Sección del Logotipo de Pagos */}
                <div>
                    <img src={payment} alt="Payment" className="w-[150px] h-[50px]" />                </div>
            </div>
            <div className="mt-[24px] mx-[320px] hr-line" />

            <div className="mx-[320px] mt-[25px] flex justify-between">
                <Fade left delay={1000}>
                    <div className="footer-info w-[250px] h-[250px] z-[5]">
                        <h2 className="text-[22px] font-[600] mb-4">Ubicación</h2>
                        <p>Shop Address and Branch Location</p>
                        <p>support@gmail.com</p>
                    </div>
                </Fade>
                <Fade left delay={1500}>
                    <div className="footer-info w-[250px] h-[250px] z-[4]">
                        <h2 className="text-[22px] font-[600] mb-4">Información</h2>
                        <p>Sobre nosotros</p>
                        <p>Blog</p>
                        <p>Verificar</p>
                        <p>Contact Us</p>
                        <p>Service</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Footer;
