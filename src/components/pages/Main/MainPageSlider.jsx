import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
// import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import sliderImgs from 'sources/slider_imgs.json'
import cl from './MainPageStyle.module.css'

const MainPageSlider = () => {
    const options = {
        autoplay: true,
        type    : 'loop',
        interval: 4000,
    }

    console.log(sliderImgs);
    return (
        <Splide aria-label="mainSlider" options={options}>
            {sliderImgs.map(item => {
                return (
                    <SplideSlide key={item.id}>
                        <div className={cl.slider__img__holder}>
                            <img className={cl.slider__img} src={item.link} alt="Image 1"/>
                        </div>
                    </SplideSlide>
                )
            })}
        </Splide>
    );
};

export default MainPageSlider;
