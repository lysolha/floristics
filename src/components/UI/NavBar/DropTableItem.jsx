import React from 'react';
import classes from "./NavBar.module.css";

const DropTableItem = ({item}) => {
    return (
        <div className={classes.dropdown}>
            {item.dropTable.map(element => {
                return (
                    <div key={element.title} className={classes.dropdown__item}>
                        <h5 className={classes.dropTable__title}>{element.title}</h5>
                        {element.list
                        &&
                        <ul>
                            {element.list.sort().map(element => <li className={classes.dropTable__listElement} key={element}>{element}</li>)}
                        </ul>
                        }
                    </div>
                )
            })
            }
        </div>
    );
};

export default DropTableItem;
