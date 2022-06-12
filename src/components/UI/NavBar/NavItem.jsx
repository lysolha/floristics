import React from 'react';
import classes from "./NavBar.module.css";
import DropTableItem from "./DropTableItem";

const NavItem = ({item}) => {
    return (
        <div className={classes.nav__item}>
            <a href="">{item.name}</a>
            {item.dropTable && <DropTableItem item={item}/>}
        </div>
    );
};

export default NavItem;
