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
    this.state = this.generateNewGame();
  }

  generateNewGame() {
    return {
      buttons: _.times(this.props.size, function(i) {
        return {
          value: i + 1,
          disabled: false
        };
      }),
      answers: [],
      usedValues: [],
      retries: parseInt(this.props.maxRetries),
      stars: this.generateStars()
    };
  }

  resetGame() {
    this.setState(this.generateNewGame());
  }

  generateStars() {
    return Math.round((Math.random() * (parseInt(this.props.size)))) || 1;
  }

  addAnswer(e) {
    var num = parseInt($(e.target).data('number'));
    this.state.answers.push(num);
    this.forceUpdate();
  }

  removeAnswer(e) {
    var num = parseInt($(e.target).data('number'));
    this.setState({
      answers: _.without(this.state.answers, num)
    });
  }

  redrawStars() {
    this.setState({
      stars: this.generateStars(),
      retries: this.state.retries - 1
    });
  }

  onConfirmAnswer() {
    var currentAnswers = _.cloneDeep(this.state.answers);
    this.setState({
      usedValues : this.state.usedValues.concat(currentAnswers),
      answers: [],
      stars: this.generateStars()
    });
  }

  isGameOver() {
    if (this.state.retries === 0) {
      return _.chain(this.state.buttons)
        .map('value')
        .without(this.state.usedValues)
        .sum().value() !== this.state.stars;
    }
    return false;
  }

  isGameWon() {
    return this.state.usedValues.length === this.state.buttons.length;
  }

  render() {
    var self = this;
    _.each(this.state.buttons, function(button) {
        button.disabled = _.includes(self.state.answers, button.value) ||
                          _.includes(self.state.usedValues, button.value);
    });
    var isGameOver = this.isGameOver();
    var isGameWon = this.isGameWon();
    var resetGame = self.resetGame.bind(self);
    var isCorrectAnswers = _.sum(this.state.answers) === this.state.stars;
    var redrawStars = self.redrawStars.bind(self);
    var addAnswer = self.addAnswer.bind(self);
    var removeAnswer = self.removeAnswer.bind(self);
    var onConfirmAnswer = self.onConfirmAnswer.bind(self);
    return (
      <div className="row alert alert-success">
        <h4>Play Nine</h4>
        <div className="row">
          <div className="col-md-4">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-4">
            <Controls onConfirmAnswer={onConfirmAnswer} redrawStars={redrawStars} retries={this.state.retries}
              isCorrectAnswers={isCorrectAnswers} isGameOver={isGameOver} isGameWon={isGameWon}
              resetGame={resetGame}/>
          </div>
          <div className="col-md-4">
            <Answers answers={self.state.answers} removeAnswer={removeAnswer} />
          </div>
        </div>
        <div className="col-md-12">
          <Buttons addAnswer={addAnswer} buttons={this.state.buttons} />
        </div>
      </div>
    )
  }

}

export default Game;

