import React, { Component } from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import Hero from '../../Hero/Hero';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <Hero />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
};

export default Layout;