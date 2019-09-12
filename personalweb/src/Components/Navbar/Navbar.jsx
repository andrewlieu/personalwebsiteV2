import React, { Component } from "react";
import "./Navbar.css";
import Sidebutton from "./SideButton/sidebutton";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Landing from "../Landing/Landing";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: true,
      showProjects: false,
      showContact: false,
      route: "ABOUT"
    };
    this.chooseRender = this.chooseRender.bind(this);
  }
  chooseRender(route) {
    if (route === "ABOUT") {
      console.log("about clicked");
      this.setState = {
        showAbout: true,
        showProjects: false,
        showContact: false
      };
      return <Landing></Landing>;
    }
    if (route === "PROJECTS") {
      console.log("projects clicked");

      this.setState = {
        showAbout: false,
        showProjects: true,
        showContact: true
      };
      return false;
    }
    if (route === "CONTACT") {
      console.log("contact clicked");

      this.setState = {
        showAbout: false,
        showProjects: false,
        showContact: true
      };
      return false;
    }
  }
  render() {
    return (
      <div className="button-container">
        <Link to="/">ABOUT</Link>
        <Link to="/">PROJECTS</Link>
      </div>
    );
  }
}
export default Navbar;
