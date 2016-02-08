import React from 'react';
import cx from 'classnames';

class Controls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    var isDisabled = this.props.retries === 0 ? true : '';
    var gameButton;
    var gameButtonClass = cx({
      btn: true,
      "btn-lg": true,
      "btn-success": this.props.isGameWon,
      "btn-danger": this.props.isGameOver
    });
    if(this.props.isGameWon || this.props.isGameOver) {
      gameButton = (<div className="row">
                      <button className={gameButtonClass} onClick={this.props.resetGame}>
                            {this.props.isGameWon ? 'Congratulations You\'ve Won the Game!' : 'Sorry, Game Over'}
                        <br/>Play again
                      </button>
                    </div>)
    } else {
      gameButton = (<div className="row">
                      <button className="btn btn-lg btn-info"
                        onClick={this.props.onConfirmAnswer}
                        disabled={this.props.isCorrectAnswers ? '' : 'true'}>=</button>
                    </div>)
    }

    return (
      <div className="game-controls">
        {gameButton}
        <div className="row">
          <button className="btn btn-sm btn-warning" onClick={self.props.redrawStars} disabled={isDisabled}>
            <span className="glyphicon glyphicon-refresh"></span>
            <br/>
            {this.props.retries}
          </button>
        </div>
      </div>
    )
  }

}

export default Controls;
