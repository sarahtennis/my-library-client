import React from "react";
import Logo from "../assets/img/logo.svg";

class SignIn extends React.Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-content">
          <img src={Logo} alt="logo" />
          <h2>Sign In</h2>
          <table>
            <tbody>
              <tr>
                <td className="selected">Sign In</td>
                <td>Register</td>
                <td>Forgot Password</td>
              </tr>
            </tbody>
          </table>
          <form className="auth-form">
            <div className="auth-form-section">
              <label>Email address</label>
              <input type="text"></input>
            </div>
            <div className="auth-form-section">
              <label>Password</label>
              <input type="text"></input>
            </div>
            <div className="auth-form-section auth-form-button">
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
