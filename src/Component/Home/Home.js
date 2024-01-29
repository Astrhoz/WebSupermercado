import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SeccionPantalla from '../SeccionPantalla/SeccionPantalla';
import ProductosDestacados from '../ProductosDestacados/ProductosDestacados';

const Home = () => {
    return (
        <div>
           <Header/> 
           <Navbar />
           <SeccionPantalla/>
           <ProductosDestacados />
        </div>
    );
};

export default Home;
