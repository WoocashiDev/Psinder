import React, {useEffect, useState} from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App=()=>{

    
    return (
        <div>
            <section id="title">
                <div className="container">
                    <NavBar/>
                    <Hero/>
                </div>
            </section>
            <section id="features">
                <Features/>
            </section>
            <Testimonials/>
            <Press/>
            <Pricing/>
            <Cta/>
            <Footer/>
        </div>

    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);