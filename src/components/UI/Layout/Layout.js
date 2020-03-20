import React, { Component } from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import Hero from '../../Hero/Hero';
import Menu from '../../Menu/Menu';
import Contact from '../../Contact/Contact';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showMenu: true
    }

    togglePageHandler = () => {
        console.log("hello");
        this.setState((prevState) => {
            return {showMenu: !prevState.showMenu}
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar clicked={this.togglePageHandler} menu={this.state.showMenu}/>
                <Hero />
                <main className={styles.Content}>
                    {this.state.showMenu ? <Menu /> : <Contact />}
                </main>
            </React.Fragment>
        )
    }
};

export default Layout;