import React from 'react';
import cl from './NavBar.module.css'
import classes from "./NavBar.module.css";
import SearchBtn from "../buttons/SearchBtn";

const SearchBlock = () => {
    return (
        <div className={cl.search__block}>
            <input className={classes.search__input} type="text"/>
            <SearchBtn/>
        </div>
    );
};

export default SearchBlock;
