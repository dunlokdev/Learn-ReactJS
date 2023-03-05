import React from 'react';

class AddUserInfo extends React.Component {
  state = {
    name: 'DunlokDev',
    address: 'Da Lat',
    age: 21,
  };

  handleOnClick() {
    console.log('>> click me my button');
    console.log('🚀 ~ MyComponent ~ name:', this.state.name);

    this.setState({
      name: 'Duong My Loc',
      age: Math.floor(Math.random() * (100 - 1)) + 1,
    });
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random',
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}.
        <p>I'm {this.state.age} years old</p>
        <br />
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <input
            type='text'
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <input
            type='text'
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default AddUserInfo;
