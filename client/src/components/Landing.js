import React from "react";
import Logo from "../assets/img/logo.svg";
import Person from "../assets/img/person.svg";
import Mail from "../assets/img/mail.svg";
import Question from "../assets/img/question.svg";
import Jumbotron from "../assets/img/landing-header-image.svg";

import SignIn from "../components/SignIn.js";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    };
  }

  toggleModal = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  };

  render() {
    return (
      <div className="landing-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={Logo} className="navbar-logo" />
            <h1 className="navbar-logo-text">mylibrary</h1>
          </a>
          <div className="navbar-buttons">
            <button className="navbar-button red" onClick={this.toggleModal}>
              <img src={Person} />
            </button>
            <button className="navbar-button yellow">
              <img src={Mail} />
            </button>
            <button className="navbar-button teal">
              <img src={Question} />
            </button>
          </div>
        </nav>
        <div className="jumbotron bg-light">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 jumbotron-content">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
          <div className="col-lg-6 jumbotron-image-container">
            <img src={Jumbotron} className="jumbotron-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 teal" style={{ height: "500px" }}>
            text
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ height: "500px" }}>
            text
          </div>
        </div>
        <div className="row">
          <div
            className="col-12"
            style={{ height: "500px", background: "#F8F9FA" }}
          >
            text
          </div>
        </div>
        <div className="row">
          <div
            className="col-12"
            style={{ height: "500px", background: "#383856" }}
          >
            text
          </div>
        </div>
        <SignIn hidden={this.state.hidden} />
      </div>
    );
  }
}

export default Landing;
