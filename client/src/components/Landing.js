import React from "react";
import Logo from "../assets/img/logo.svg";
import Person from "../assets/img/person.svg";
import Mail from "../assets/img/mail.svg";
import Question from "../assets/img/question.svg";

require("bootstrap");

const Landing = () => {
  return (
    <div className="landing-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img src={Logo} class="navbar-logo" />
          <h1 class="navbar-logo-text">mylibrary</h1>
        </a>
        <div class="navbar-buttons">
          <button class="navbar-button red">
            <img src={Person} />
          </button>
          <button class="navbar-button yellow">
            <img src={Mail} />
          </button>
          <button class="navbar-button teal">
            <img src={Question} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Landing;
