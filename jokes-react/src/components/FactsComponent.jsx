import React, { Component } from "react";
import { BackButton } from '../services/NavigationService'

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: []
    };
  }

  render() {
    return (
      <div>
        <h1 className='main-page-title'>Neverovali ili da</h1>
      </div>
     
      
    );
  }
}
export default Facts;
