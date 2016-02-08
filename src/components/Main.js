require('normalize.css');
require('styles/App.css');

import React from 'react';
import MyCounter from './MyCounter/MyCounter.js';
import MyCards from './MyCards/MyCards.js';
import Game from './PlayNine/Game.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index row">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <hr/>
        <Game size="9" maxRetries="10" />
        <hr/>
        <MyCounter counter/>
        <hr/>
        <MyCards title='Github Users' />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
