import React from 'react';
import {render} from 'react-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navBar">
        <a href="/" className="navElement">HOME</a>
        <a href="/resume/" className="navElement">RESUME</a>
        <a href="/portfolio/" className="navElement">PORTFOLIO</a>
        <a href="/contact/" className="navElement">CONTACT</a>
      </div>
    );
  }
}

export { NavBar };