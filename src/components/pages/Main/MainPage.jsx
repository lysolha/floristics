import React from 'react';
import cl from './MainPageStyle.module.css'
import MainPageSlider from './MainPageSlider';
import Header from './Header';
import InfoBlock from '../../UI/Info/InfoBlock';
import OfferBlock from '../../UI/Offer/OfferBlock';
import Footer from './Footer'

const MainPage = () => {
    return (
        <div className={cl.main__page}>
            <Header/>
            <MainPageSlider/>

            {/*<div className={cl.container}>*/}
                <OfferBlock/>
                <InfoBlock/>
            {/*</div>*/}
            <Footer/>
        </div>
    )
};

export default MainPage;
