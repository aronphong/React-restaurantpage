import React from 'react';
import styles from './Hero.module.css';

const hero = (props) => {

    return (
        <div className={styles.Hero}>
            <ul>
                <h1>Breakfast Inn</h1>
                <h3>- Diner by Aron Phong -</h3>
            </ul>
        </div>
    );
}

export default hero;
