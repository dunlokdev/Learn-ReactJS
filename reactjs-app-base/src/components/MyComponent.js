import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       listUser: [
//         { id: 1, name: 'Dương Mỹ Lộc', age: '21' },
//         { id: 2, name: 'Lê Thị Phương Nga', age: '20' },
//         { id: 3, name: 'Dương Mỹ Long', age: '15' },
//       ],
//     };
//   }

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUser: [...this.state.listUser, userObj],
//     });
//   };

//   handleDeleteUser = (id) => {
//     let clone = [...this.state.listUser];
//     clone = clone.filter((user) => user.id !== id);
//     this.setState({
//       listUser: clone,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <DisplayInfor
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Dương Mỹ Lộc', age: '21' },
    { id: 2, name: 'Lê Thị Phương Nga', age: '20' },
    { id: 3, name: 'Dương Mỹ Long', age: '15' },
  ]);

  const handleDeleteUser = (id) => {
    let clone = [...listUsers];
    clone = clone.filter((user) => user.id !== id);
    setListUsers(clone);
  };

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <DisplayInfor listUser={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
