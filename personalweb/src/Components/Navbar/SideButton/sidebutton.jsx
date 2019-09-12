import React, { Component } from "react";
import "./sidebutton.css";
class sidebutton extends Component {
  consturctor(props) {}
  render() {
    return (
      <a href={this.props.theLink} className="a-button">
        <button className="navbar-button">
          <div className="hiddenText">{this.props.theText}</div>
        </button>
      </a>
    );
  }
}
export default sidebutton;
