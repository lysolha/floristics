import React from 'react';
import cl from './OfferItem.module.css'
import classes from '../../pages/Main/MainPageStyle.module.css'
import OfferItem from "./OfferItem";
import offers from '../../../sources/offer.json'

const OfferBlock = () => {
    return (
        <div className={cl.offer__block}>
            <div className={classes.container}>
                <div className={cl.offer__inner}>
                    {offers.map(item => {
                        return ( <OfferItem key={item.id} value={item.value}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default OfferBlock;
