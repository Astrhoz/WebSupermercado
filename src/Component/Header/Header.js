import React from 'react';
import "./Header.css";
import logo from "../Assets/brand1.png"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsHeartFill, BsCart2 } from "react-icons/bs";
import callIcon from "../Assets/call icon.svg"

const Header = () => {
    return (
        <div className='header-contenedor'>
           <div className='logo-buscar-cont'>
                <img src={logo} alt=""/>
                <div className='buscar-cont'>
                    <BiSearchAlt className='icono'/> 
                    <input type="text" placeholder='Buscar producto'></input>
                </div>
           </div>
           
           <div className='contacto-social-cont'>
                <div className='contacto'>
                        <img src={callIcon} alt=''></img>
                        <p>Llamanos <br/> <span>+005 000 000</span></p>
                </div>

                <div className='social-icono-cont'>
                        <div className='headerIcono'>
                            <BiUser className='headerIcono-size'/>
                        </div>

                        <div className='headerIcono'>
                            <BsHeartFill className='headerIcono-size'/>
                        </div>
                        
                        <div className='headerIcono'>
                            <BsCart2 className='headerIcono-size'/>
                        </div>
                </div>
           </div>
            
        </div>
    );
};

export default Header;