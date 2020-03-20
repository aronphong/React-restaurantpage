import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem>Menu</NavigationItem>
        <NavigationItem>Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;
