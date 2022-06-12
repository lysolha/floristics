import React from 'react';
import cl from "./MainPageStyle.module.css";
import NavBar from "../../UI/NavBar/NavBar";
import navigationData from "../../../sources/navigation.json";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <NavBar value={navigationData} />
            </div>
        </header>
    );
};

export default Header;
