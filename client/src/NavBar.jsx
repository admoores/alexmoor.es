import React from 'react';
import {render} from 'react-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navBarContainer">
        <span className="horizontalDivider"></span>
        <div className="navBar">
          <a href="/" className="navElement">HOME</a>
          <a href="/resume/" className="navElement">RÉSUMÉ</a>
          <a href="/portfolio/" className="navElement">PORTFOLIO</a>
          <a href="/contact/" className="navElement">CONTACT</a>
        </div>
        <span className="horizontalDivider"></span>
      </div>
    );
  }
}

export { NavBar };