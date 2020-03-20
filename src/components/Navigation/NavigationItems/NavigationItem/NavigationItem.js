import React from 'react'
import styles from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <p>{props.children}</p>
    </li>
);

export default navigationItem;