import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="block">
          <p>Hello</p>
        </div>
        <div className="block">
          <p>World</p>
        </div>
        <div className="block">
          <p>Flexy</p>
        </div>
      </div>
    );
  }
}



render(<App/>, document.getElementById('app'));