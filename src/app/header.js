import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {

    return (
      <header className="Header">

        <img
          className="logo"
          alt="pokedex logo"
          src="pokedex.png"
        />

      </header>
    );
  }
}

export default Header;