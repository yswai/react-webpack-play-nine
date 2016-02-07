import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <h3>{this.props.counter}</h3>
    );
  }
}

export default Message;
