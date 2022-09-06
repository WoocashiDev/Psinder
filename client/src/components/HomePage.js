import React from 'react'
import Hero from './HomePage/Hero'
import Features from './HomePage/Features';
import Testimonials from './HomePage/Testimonials';
import Press from './HomePage/Press';
import Pricing from './HomePage/Pricing';
import Cta from './HomePage/Cta';
import Footer from './HomePage/Footer';

const HomePage = () => {
    return(
        <div>
        <section className="title">
            <div className="container">
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

export default HomePage