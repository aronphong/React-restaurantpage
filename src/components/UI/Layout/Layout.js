import React, { Component } from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
            </React.Fragment>
        )
    }
};

export default Layout;