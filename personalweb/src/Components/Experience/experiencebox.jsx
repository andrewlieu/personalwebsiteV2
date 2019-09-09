import React, {Component} from 'react';
import './experiencebox.css';
class experiencebox extends Component {
  constructor(props) {
    super(props);
  this.state = {
      
    }
  }
  render () {
  return (
    <div className="experience-box-container">
        <img src={this.props.image} className="experience-image"></img>
    </div>
  );
}
}
export default experiencebox;
