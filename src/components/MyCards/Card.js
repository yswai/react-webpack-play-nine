import React from 'react';
require('bootstrap-loader');

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    var self = this;
    $.get('https://api.github.com/users/' + this.props.name).then(function(data) {
      self.setState({
        img: data.avatar_url
      })
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="alert alert-warning">
          <h4>{this.props.header}</h4>
        </div>
        <div className="alert alert-success row">
          <div className="col-md-4">
            <img width="80" src={this.state.img} />
          </div>
          <div className="col-md-8">
            {this.props.body}
          </div>
        </div>
      </div>
    )
  }

}

export default Card;
