import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SeccionPantalla from '../SeccionPantalla/SeccionPantalla';
import ProductosDestacados from '../ProductosDestacados/ProductosDestacados';
import Advertisement from '../Advertisement/Advertisement';
import TopSell from '../TopSell/TopSell';
import Blog from '../Blog/Blog';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header/> 
           <Navbar />
           <SeccionPantalla/>
           <ProductosDestacados />
           <Advertisement/>
           <TopSell />
           <Blog/>
           <Brands/>
           <Footer/>
        </div>
    );
};

export default Home;
