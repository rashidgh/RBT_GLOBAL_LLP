import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarosel'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import OurClients from '../components/OurClients'
import AboutUs from '../components/AboutUs'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import { GlobalProvider } from '../api/ContextApi'

const Dasboard = () => {
    const { isNightMode } = React.useContext(GlobalProvider);
    return (
        <div className={` ${isNightMode ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-black' : 'bg-white text-black'}`}>
            <Navbar />
            <HeroCarousel />
            <OurClients />
            <Services />
            <AboutUs />
            <ContactUs />
            <ScrollToTop />
        </div>
    )
}

export default Dasboard;