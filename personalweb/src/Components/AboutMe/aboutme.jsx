import React, {Component} from 'react';
import ProfilePicture from './profilepic.jpg';

import './aboutme.css';
class aboutme extends Component {
    render () {
  return (
      
    <div className="aboutme-container" >
        <div className="title">ABOUT ME</div>
        <div className="textandpic">
            <div className="aboutme-text">
                My name is Andrew. I'm a full-stack developer. 
            </div>
            <img src={ProfilePicture} className="profilepic" alt="profile"></img>
        </div>
    </div>
  );
}
}
export default aboutme;
