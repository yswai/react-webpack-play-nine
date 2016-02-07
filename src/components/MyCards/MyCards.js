import React from 'react';
import Card from './Card';

class MyCards extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [{
        id: 1,
        name: 'yswai',
        description: 'Rocks!'
      }, {
        id: 2,
        name: 'petehunt',
        description: 'Rocks! 1'
      }, {
        id: 3,
        name: 'linus',
        description: 'Rocks! 1'
      }]
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <hr/>
        {
          this.state.users.map(function(user) {
            return <div className="row well">
              <Card key={user.id} name={user.name} body={user.description} />
            </div>
          })
        }
      </div>
    );
  }

}

export default MyCards;
