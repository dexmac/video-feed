import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

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

NavigationBar.propTypes = {
  brand: PropTypes.string
};

export default NavigationBar;
