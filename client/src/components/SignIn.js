import React from "react";
import Logo from "../assets/img/logo.svg";

import { authStates, authStatesSet } from "../constants/authStates.js";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: authStates.SIGN_IN
    };
  }

  authNavClick = event => {
    const selection = event.target.getAttribute("data-id");
    switch (selection) {
      case authStates.REGISTER:
        this.setState({
          selected: authStates.REGISTER
        });
        break;
      case authStates.FORGOT_PASSWORD:
        this.setState({
          selected: authStates.FORGOT_PASSWORD
        });
        break;
      case authStates.SIGN_IN:
      default:
        this.setState({
          selected: authStates.SIGN_IN
        });
        break;
    }
  };

  render() {
    return (
      <div className="auth-container">
        <img src={Logo} alt="logo" />
        <h2>Sign In</h2>
        <table>
          <tbody>
            <tr>
              <td
                data-id={authStates.SIGN_IN}
                className={
                  this.state.selected === authStates.SIGN_IN ||
                  !authStatesSet.has(this.state.selected)
                    ? "selected"
                    : ""
                }
                onClick={this.authNavClick}
              >
                Sign In
              </td>
              <td
                data-id={authStates.REGISTER}
                className={
                  this.state.selected === authStates.REGISTER ? "selected" : ""
                }
                onClick={this.authNavClick}
              >
                Register
              </td>
              <td
                data-id={authStates.FORGOT_PASSWORD}
                className={
                  this.state.selected === authStates.FORGOT_PASSWORD
                    ? "selected"
                    : ""
                }
                onClick={this.authNavClick}
              >
                Forgot Password
              </td>
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
    );
  }
}

export default SignIn;
