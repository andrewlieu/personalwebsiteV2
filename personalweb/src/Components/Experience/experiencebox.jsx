import React, { Component } from "react";
import "./experiencebox.css";
class experiencebox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="experience-box-container">
          <div className="description">{this.props.image}</div>
        </div>
      </div>
    );
  }
}
export default experiencebox;
