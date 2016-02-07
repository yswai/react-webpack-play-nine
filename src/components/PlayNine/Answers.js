import React from 'react';

class Answers extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var answers = this.props.answers.map(function(a) {
      return (
        <div className="col-md-4">
          <label className="answer-label label label-success">
            {a}
          </label>
        </div>
      )
    });
    return (
      <div className="answers row">{answers}</div>
    )
  }

}

export default Answers;

