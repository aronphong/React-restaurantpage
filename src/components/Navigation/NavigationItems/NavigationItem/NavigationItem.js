import React from 'react'
import styles from './NavigationItem.module.css';

const navigationItem = (props) => {

    const activeStyle = [styles.NavigationItem, styles.active].join(" ")
    return (
        <li className={props.active ? activeStyle : styles.NavigationItem} onClick={props.clicked}>
            <p>{props.children}</p>
        </li>
    );

};

export default navigationItem;