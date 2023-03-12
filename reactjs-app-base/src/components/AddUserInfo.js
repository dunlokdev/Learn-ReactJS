import React, { useState } from 'react';

// class AddUserInfo extends React.Component {
//   state = {
//     name: 'DunlokDev',
//     address: 'Da Lat',
//     age: 21,
//   };

//   handleOnClick() {
//     console.log('>> click me my button');
//     console.log('🚀 ~ MyComponent ~ name:', this.state.name);

//     this.setState({
//       name: 'Duong My Loc',
//       age: Math.floor(Math.random() * (100 - 1)) + 1,
//     });
//   }

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       // ! bad code this.state.age = event.target.age
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + '-random',
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address}.
//         <p>I'm {this.state.age} years old</p>
//         <br />
//         <form
//           onSubmit={(e) => {
//             this.handleOnSubmit(e);
//           }}
//         >
//           <input
//             type='text'
//             value={this.state.name}
//             onChange={(event) => {
//               this.handleOnChangeName(event);
//             }}
//           />
//           <input
//             type='text'
//             value={this.state.age}
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('Da Lat City');
  const [age, setAge] = useState('');

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random',
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm from {address}.<p>I'm {age} years old</p>
      <br />
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input
          type='text'
          value={name}
          onChange={(event) => {
            handleOnChangeName(event);
          }}
        />
        <input
          type='text'
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default AddUserInfo;
