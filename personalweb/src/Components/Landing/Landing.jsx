import React, { Component } from "react";
import LinkedIn from "./linkedin.png";
import Instagram2 from "./instagram2.png";

import Facebook from "./facebook.png";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="moon" alt="moonemoji"></div>
        <div className="circle"></div>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <div className="title"> ANDREW LIEU </div>
        <div className="describe delay0">Come say hi!</div>
        <div className="describe delay1">
          {" "}
          I'm a third year <span className="complement">Computer Science </span>
          major at UC Berkeley.
        </div>
        <div className="describe delay2">
          I'm interested in{" "}
          <span className="complement">software development </span> and{" "}
          <span className="complement">design</span>.
        </div>
        <div className="describe delay3">
          I enjoy drinking late night <span className="complement">coffee</span>
          .
        </div>
        <div className="describe delay4">
          I'm a big fan of petting <span className="complement">dogs</span> and
          watching <span className="complement">movies</span>.
        </div>
        <div className="sm-container">
          <a href="https://www.linkedin.com/in/andrew-lieu/" target="_blank">
            <input type="image" src={LinkedIn} className="linkedinButton" />
          </a>
          <a
            className="spacingButton"
            href="https://www.facebook.com/andrewlieuu"
            target="_blank"
          >
            <input type="image" src={Facebook} className="linkedinButton" />
          </a>
          <a href="https://www.instagram.com/andrewlieuu/" target="_blank">
            {" "}
            <input type="image" src={Instagram2} className="linkedinButton" />
          </a>
        </div>
        <div className="locateAboutMe" id="about"></div>
      </div>
    );
  }
}
export default Landing;
