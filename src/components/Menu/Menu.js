import React from 'react';
import styles from './Menu.module.css';
const menu = () => {

    return (
        <div className={styles.Menu}>
            <h1>Menu</h1>
            <div className={styles.MenuCategory}>
                <h3>Our Staples</h3>
                <ul>
                    <li><p>Flapjacks - Our buttermilk battter, warm syrup, diced fruit, whipped butter</p></li>
                    <li><p>Breakfast Burrito - House chorizo, scrambled eggs, cheddar, potato</p></li>
                    <li><p>Biscuit, bacon & gravy - Warm biscuit, bacon, our bacon gravy, and two eggs</p></li>
                </ul>
            </div>
            <div className={styles.MenuCategory}>
                <h3>Sides</h3>
                <ul>
                    <li><p>Avocado Toast</p></li>
                    <li><p>Country potatoes</p></li>
                    <li><p>Biscuit</p></li>
                </ul>
            </div>
        </div>
    );
}

export default menu;