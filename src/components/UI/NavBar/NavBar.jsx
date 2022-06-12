import React from 'react';
import cl from './NavBar.module.css'
import NavItem from "./NavItem";
import SearchBlock from "./SearchBlock";
export const logo = 'static/images/logo/logoItem.jpeg'

const NavBar = ({value}) => {
    return (
        <nav>
            <img className={cl.logo__img} src={logo} alt=""/>
            {value.map((item, index) => {
                return <NavItem key={index} item={item}/>
            })}
            <SearchBlock/>
        </nav>
    );
};

export default NavBar;
