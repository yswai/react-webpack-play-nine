import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onClick} value={this.props.weight}>
      {this.props.weight}
      </button>
    );
  }
}

export default Button;
