import React from 'react';
import {render} from 'react-dom';
import { NavBar } from '../NavBar.jsx';

let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar justo non tempor rhoncus. Aenean pretium, ante vitae sollicitudin dignissim, diam urna placerat tortor, et malesuada orci sapien at nisi. Nullam tincidunt felis nisl, eu convallis turpis scelerisque vel. Etiam ornare, nibh eget dignissim porttitor, mi turpis varius lectus, lobortis pulvinar ex ipsum sit amet augue. Sed molestie placerat est in lobortis. Praesent eget magna in tellus semper fermentum id sit amet ipsum. Nam quis molestie ante, sed bibendum nisi.';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Alex Moores</h1>
        <span className="horizontalDivider"></span>
        <NavBar/>
        <span className="horizontalDivider"></span>
        <div className='aboutPageHeader'>
          <div className='aboutPageHeaderElement'>
            <p> Some Text </p>
          </div>
          <img className="headshot" src="../../assets/img/headshot.jpg"/>
          <div className='rightAlign aboutPageHeaderElement'>
            <p> Some More Text </p>
          </div>
        </div>
      </div>
    );
  }
}



render(<App/>, document.getElementById('app'));