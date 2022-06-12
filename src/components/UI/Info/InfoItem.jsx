import React from 'react';
import cl from './Info.module.css'
import {logo} from "../NavBar/NavBar";

const InfoItem = ({value}) => {
    console.log(value.id)
        return (
            <div>
                {(value.id % 2 === 0)
                    ?
                    <div className={cl.info__item}>
                        <div className={cl.info__content__text}>
                            <div className={cl.content__text}>
                                <h1 className={cl.info__title}>{value.title}</h1>
                                {value.parts.map(item => {
                                    return (
                                        <p key={item}>{item}</p>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={cl.info__content__img}>
                            <img className={cl.info__img} src={value.img} alt=""/>
                        </div>
                    </div>
                    : <div className={cl.info__item}>
                        <div className={cl.info__content__img}>
                            <img className={cl.info__img} src={value.img} alt=""/>
                        </div>
                        <div className={cl.info__content__text}>
                            <div className={cl.content__text}>
                                <h1 className={cl.info__title}>{value.title}</h1>
                                {value.parts.map(item => {
                                    return (
                                        <p key={item}>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
;

export default InfoItem;
