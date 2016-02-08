import React from 'react';
import _ from 'lodash';

class Buttons extends React.Component {

  render() {
    var self = this;
    var buttons = [];
    _.each(this.props.buttons, function(button) {
      buttons.push(
        <button key={button.value} className="btn btn-primary btn-round"
            data-number={button.value} onClick={self.props.addAnswer}
            disabled={button.disabled}>
          {button.value}
        </button>
      );
    });
    return (
      <div className="buttons row">
        {buttons}
      </div>
    )
  }

}

export default Buttons;

