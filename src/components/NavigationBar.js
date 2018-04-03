import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        const brand = this.props.brand;

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <div className="navbar-brand">{brand}</div>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavigationBar;