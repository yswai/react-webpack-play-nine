import React from 'react';
import Stars from './Stars.js';
import Answers from './Answers.js';
import Buttons from './Buttons.js';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: this.redrawStars(),
      selected: [],
      size: 9
    }
  }

  redrawStars() {
    return Math.round((Math.random()*(parseInt(this.props.size)))) || 1;
  }

  onSelect(num) {
    var selected = this.state.selected.push(num);
    this.setState({
      selected: selected
    });
  }

  render() {
    var self = this;
    return (
      <div className="row alert alert-success">
        <h4>Play Nine</h4>
        <div className="row">
          <div className="col-md-4">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Answers selected={self.state.state} />
          </div>
        </div>
        <div className="col-md-12">
          <Buttons onClick={self.onSelect} size={this.state.size} />
        </div>
      </div>
    )
  }

}

export default Game;

