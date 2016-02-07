import React from 'react';

class Stars extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var stars = [];
    for(var i = 0 ; i < parseInt(this.props.stars) ; i++) {
      stars.push(
        <div className="col-md-4">
          <span className="game-star glyphicon glyphicon-star"></span>
        </div>);
    }
    return (
      <div className="row stars">
        {stars}
      </div>
    )
  }

}

export default Stars;

