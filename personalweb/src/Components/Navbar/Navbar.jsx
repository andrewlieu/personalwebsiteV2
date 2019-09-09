import React, {Component} from 'react';
import './Navbar.css'
import Sidebutton from './SideButton/sidebutton';
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
    render () {
  return (
    <div className="button-container">
       <Sidebutton theText="HOME" theLink="#home"></Sidebutton>
       <Sidebutton theText="ABOUT ME" theLink="#about"></Sidebutton>
       <Sidebutton theText="EXPERIENCE" theLink="#experience"></Sidebutton>
    </div>
  );
}
}
export default Navbar;
