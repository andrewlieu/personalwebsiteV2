import React, {Component} from 'react';
import './experience.css';
import ExperienceBox from './experiencebox'
import Codebase from './codebase.PNG'
import Pantheon from './pantheon.png'
import Letseat from './letseat.PNG'
class experience extends Component {
constructor(props) {
  super(props)
  this.state={
    boxurls: [{Codebase},{Pantheon},{Letseat}]
  }
  this.generateBoxes = this.generateBoxes.bind(this)
  this.componentDidMount = this.componentDidMount.bind(this)
}

componentDidMount() {
}
generateBoxes(hi) {
 return( <ExperienceBox image={hi}></ExperienceBox>)

  
}

render () {
  return (
    <div className="experience-container" id="experience">
      <div className="background"></div>
      <div className="whiteContainer-experience"> EXPERIENCE </div>
      <div className="boxcontainers">
      {this.generateBoxes(Codebase)}
      {this.generateBoxes(Pantheon)}
      {this.generateBoxes(Letseat)}
  </div>
     
    </div>
  );
}
}
export default experience;
