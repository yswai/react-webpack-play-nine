import React from 'react';

class Controls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    var isDisabled = this.props.retries === 0 ? true : '';
    return (
      <div className="game-controls">
        <div className="row">
          <button className="btn btn-lg btn-info">=</button>
        </div>
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
