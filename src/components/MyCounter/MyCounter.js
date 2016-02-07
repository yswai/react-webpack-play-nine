import React from 'react';
import Message from './Message.js';
import Button from './Button.js';

class MyCounter extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 1,
      increments: [5, 10, 15, 20]
    };
  }

  render() {
    var self = this;
    return (
        <div>{
            this.state.increments.map(function (i) {
              var boundedClick = self.handleClick.bind(self, i);
              return <Button key={i} onClick={boundedClick} weight={i} />
            })
          }<Message counter={this.state.counter} />
        </div>
    )
  }

  handleClick(incr) {
    this.setState({
      counter: this.state.counter += incr,
      increments: this.state.increments
    })
  }

}

export default MyCounter;
