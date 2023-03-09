import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isLoggedIn: bool
// isSpinnerOn: bool

// algo
// 1.show login by default
// 2.on login click show spinner for 2 sec
// 3.show logout after spinner
// 4.on logout show login

class Auth extends React.Component {
  state = { isLoggedIn: false, isSpinnerOn: false };

  render() {
    return (
      <>
        <Login />
        <Spinner />
        <Logout />
      </>
    );
  }
}
export default Auth;
