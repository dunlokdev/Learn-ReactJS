import React from 'react';
import AddUserInfo from './AddUserInfo';
import UserInfo from './UseInfo';

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: 'Dương Mỹ Lộc', age: '21' },
      { id: 2, name: 'Lê Thị Phương Nga', age: '20' },
      { id: 3, name: 'Dương Mỹ Long', age: '15' },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUser: [...this.state.listUser, userObj],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <UserInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
