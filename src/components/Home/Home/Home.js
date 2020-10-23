import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Training from '../Training/Training';
import WorkOut from '../WorkOut/WorkOut';


const Home = () => {
    return (
        <div>
            <Header/>
            <WorkOut/>
            <AboutUs/>
            <Training/>
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;