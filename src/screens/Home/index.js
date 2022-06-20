import React, { useEffect } from 'react';
import Banner from '../Banner';
import './style.css';
import Header from '../../components/Header';
import About from '../About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurTeam from '../OurTeam';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../../components/Footer';
import OurPartnerships from '../OurPartnerships';
import Depositions from '../../components/CarouselDepositions';


const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='home'>
            <Header />
            <Banner />
            <About />
            <Projects />
            <Depositions />
            <OurTeam />
            <OurPartnerships />
            <Contact />
            <Footer />

        </div>
    );
}


export default Home;
