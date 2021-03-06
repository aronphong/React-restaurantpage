import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>
            The Breakfast Inn
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems clicked={props.clicked} menu={props.menu}/>
        </nav>
    </header>
);

export default toolbar;
