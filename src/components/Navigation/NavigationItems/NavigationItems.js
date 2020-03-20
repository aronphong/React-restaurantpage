import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {

    if (props.menu) {
        return (
            <ul className={styles.NavigationItems}>
                <NavigationItem active={true}>Menu</NavigationItem>
                <NavigationItem clicked={props.clicked}>Contact Us</NavigationItem>
            </ul>
        );
    }

    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem clicked={props.clicked}>Menu</NavigationItem>
            <NavigationItem active={true}>Contact Us</NavigationItem>
        </ul>
    );
};

export default navigationItems;
