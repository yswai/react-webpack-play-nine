import React from 'react';
import Stars from './Stars.js';
import Answers from './Answers.js';
import Buttons from './Buttons.js';
import Controls from './Controls.js';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      retries: parseInt(this.props.maxRetries),
      stars: this.generateStars()
    };
  }

  generateStars() {
    return Math.round((Math.random() * (parseInt(this.props.size)))) || 1;
  }

  redrawStars() {
    this.setState({
      stars: this.generateStars(),
      retries: this.state.retries - 1
    });
  }

  onSelect(num) {
    var selected = this.state.selected.push(num);
    this.setState({
      selected: selected
    });
  }

  render() {
    var self = this;
    var redrawStars = self.redrawStars.bind(self);
    return (
      <div className="row alert alert-success">
        <h4>Play Nine</h4>
        <div className="row">
          <div className="col-md-4">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-4">
            <Controls redrawStars={redrawStars} retries={this.state.retries} />
          </div>
          <div className="col-md-4">
            <Answers selected={self.state.state} />
          </div>
        </div>
        <div className="col-md-12">
          <Buttons onClick={self.onSelect} size={this.props.size} />
        </div>
      </div>
    )
  }

}

export default Game;

