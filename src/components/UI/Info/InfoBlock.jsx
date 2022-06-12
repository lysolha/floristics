import React from 'react';
import cl from './Info.module.css'
import classes from '../../pages/Main/MainPageStyle.module.css'
import about from '../../../sources/about.json'
import InfoItem from "./InfoItem";

const InfoBlock = () => {
    return (
        <section className={cl.info__block}>
            <div className={classes.container}>
                {about.map(item => {
                    console.log(item);
                    return <InfoItem key={item.id} value={item}/>
                })}
            </div>
        </section>
    );
};

export default InfoBlock;
