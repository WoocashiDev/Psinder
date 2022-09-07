import React from 'react'
import Hero from './HomePage/Hero'
import Features from './HomePage/Features';
import Testimonials from './HomePage/Testimonials';
import Press from './HomePage/Press';
import Pricing from './HomePage/Pricing';
import Cta from './HomePage/Cta';
import Footer from './HomePage/Footer';
import { useAuth } from '../auth';

const LoggedInHomePage = ()=>{
    return(
        <div>You have logged in!</div>
    )
}

const LoggedOutHomePage = ()=>{
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

const HomePage = () => {
    const [logged] = useAuth()

    return(
        <>
        {logged?<LoggedInHomePage/>:<LoggedOutHomePage/>}
        </>
    )
}

export default HomePage