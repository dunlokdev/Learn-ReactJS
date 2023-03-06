import React from 'react';
import './UserInfo.scss';

class UserInfo extends React.Component {
  state = {
    isShow: true,
  };

  handleShowHide() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    const { listUser } = this.props;
    return (
      <div>
        <div>
          <span
            className='btn'
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShow ? 'Hide' : 'Show'}
          </span>
        </div>

        {this.state.isShow && (
          <div>
            {listUser.map((user) => {
              return (
                <div
                  key={user.id}
                  className={+user.age > 18 ? 'text-red' : 'text-green'}
                >
                  <div>
                    <h3>My name is {user.name}</h3>
                    <p>Age: {user.age}</p>
                  </div>

                  <div>
                    <span
                      className='btn btn--delete'
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default UserInfo;
