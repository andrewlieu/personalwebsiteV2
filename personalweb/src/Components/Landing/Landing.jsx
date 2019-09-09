import React, {Component} from 'react';
import LinkedIn from './linkedin.png';
import Instagram from './instagram.png';
import Facebook from './facebook.png';
import './Landing.css';
class Landing extends Component {
    render () {
  return (
    <div className="container" id="home">
      <div className="landingPage"></div>
      <div className="whiteContainer"> ANDREW LIEU  </div>
          <div className="sm-container">
          <a href="http://linkedin.com" target="_blank"><input type="image" src={LinkedIn} className="linkedinButton" /></a>
          <a href="http://facebook.com"target="_blank"><input type="image" src={Facebook} className="linkedinButton" /></a>
          <a href="http://instagram.com"target="_blank"> <input type="image" src={Instagram} className="linkedinButton" /></a>
          </div>
      <div className="locateAboutMe" id="about"></div>
    </div>
  );
}
}
export default Landing;
