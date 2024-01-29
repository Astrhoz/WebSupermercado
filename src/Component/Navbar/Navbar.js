import React from 'react';
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className='navbar-contenedor'>
            
            <div className='navbar-sub-contenedor'>
                <div className='menu'>
                    <GiHamburgerMenu className='menu-icon'/>
                    <p>Departamentos</p>
                </div>

                <div className='navbar'>
                    <ul className='nav-animado'>
                        <li><a href='#!'>Inicio</a></li>
                        <li><a href='#!'>Tienda</a></li>
                        <li><a href='#!'>Pagina</a></li>
                        <li><a href='#!'>Blog</a></li>
                        <li><a href='#!'>Contactos</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;