import React from 'react';
import Stars from './Stars.js';
import Answers from './Answers.js';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import $ from 'jquery';
import _ from 'lodash';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      answers: [],
      retries: parseInt(this.props.maxRetries),
      stars: this.generateStars()
    };
  }

  generateStars() {
    return Math.round((Math.random() * (parseInt(this.props.size)))) || 1;
  }

  addAnswer(e) {
    var num = parseInt($(e.target).data('number'));
    this.state.answers.push(num);
    console.log(this.state.answers);
  }

  redrawStars() {
    this.setState({
      stars: this.generateStars(),
      retries: this.state.retries - 1
    });
  }

  onConfirmAnswer() {
    this.state.selected.concat(this.state.answers);
  }

  render() {
    var self = this;
    var redrawStars = self.redrawStars.bind(self);
    var addAnswer = self.addAnswer.bind(self);
    var onConfirmAnswer = self.onConfirmAnswer.bind(self);
    return (
      <div className="row alert alert-success">
        <h4>Play Nine</h4>
        <div className="row">
          <div className="col-md-4">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-4">
            <Controls onConfirmAnswer={onConfirmAnswer} redrawStars={redrawStars} retries={this.state.retries} />
          </div>
          <div className="col-md-4">
            <Answers answers={self.state.answers} />
          </div>
        </div>
        <div className="col-md-12">
          <Buttons addAnswer={addAnswer} size={this.props.size} />
        </div>
      </div>
    )
  }

}

export default Game;

