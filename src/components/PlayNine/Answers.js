import React from 'react';

class Answers extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    var answers = this.props.answers.map(function(a) {
      return (
        <div className="col-md-4">
          <button key={a} className="btn btn-round btn-success"
            onClick={self.props.removeAnswer}
            data-number={a}>{a}</button>
        </div>
      )
    });
    return (
      <div className="answers row">{answers}</div>
    )
  }

}

export default Answers;

