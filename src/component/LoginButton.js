import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;
// import React from 'react';

// class LoginButton extends React.Component {
//     render() {
//       return(
//        <h1>sanaa</h1>
//       )
//     }
//   }

// export default LoginButton;