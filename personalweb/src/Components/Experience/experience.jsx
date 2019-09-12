import React, { Component } from "react";
import "./experience.css";
import ExperienceBox from "./experiencebox";
import Codebase from "./codebase.PNG";
import Pantheon from "./pantheon.png";
import Letseat from "./letseat.PNG";
class experience extends Component {
  constructor(props) {
    super(props);

    this.generateBoxes = this.generateBoxes.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {}
  generateBoxes(hi) {
    return <ExperienceBox image={hi}></ExperienceBox>;
  }

  render() {
    return (
      <div className="experience-container">
        <div className="spiral"></div>
        <div className="rock"></div>
        <div className="rock rock2"></div>
        <div className="rock rock3"></div>
        <div className="rock rock4"></div>

        <div className="background"></div>
        <div className="title"> PROJECTS </div>
        <div className="boxcontainers">
          {this.generateBoxes("Where2meet")}
          {this.generateBoxes("Binary Search Visualizer")}
          {this.generateBoxes("Restaurant Finder")}
        </div>
      </div>
    );
  }
}
export default experience;
