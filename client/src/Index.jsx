import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <span className="block">
          <p>Hello</p>
        </span>
        <span className="block">
          <p>World</p>
        </span>
        <span className="block">
          <p>Flexy</p>
        </span>
      </div>
    );
  }
}



render(<App/>, document.getElementById('app'));