import React from 'react';

class Buttons extends React.Component {

  render() {
    var buttons = [];
    for(var i = 0 ; i < this.props.size ; i++) {
      buttons.push(
        <button key={i} className="btn btn-primary btn-round"
            data-number={i+1} onClick={this.props.addAnswer}>
          {i+1}
        </button>
      );
    }
    return (
      <div className="buttons row">
        {buttons}
      </div>
    )
  }

}

export default Buttons;

