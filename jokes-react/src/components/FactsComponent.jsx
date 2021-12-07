import React, { Component } from "react";
import { BackButton } from '../services/NavigationService'
import HeaderTitleComponent from "./HeaderTitleComponent";

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: []
    };
  }

  render() {
    return (
      <HeaderTitleComponent title="Zanimljivosti"/>
     
      
    );
  }
}
export default Facts;
