import React from 'react';
import cl from './OfferItem.module.css'

const OfferItem = ({value}) => {
    return (
        <div className={cl.offer__item}>
            <div className={cl.offer__item__inner}>
                <div className={cl.img__holder}>
                    <img className={cl.offer__img} src={value.img}/>
                </div>
                <div className={cl.offer__item__content}>
                    <h1 className={cl.offer__item__title}>{value.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;
