import React from 'react';
import {render} from 'react-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navBar">
        <a href='/index.html' className="navElement">HOME</a>
        <a href='/portfolio/index.html' className="navElement">PORTFOLIO</a>
      </div>
    );
  }
}

export { NavBar };