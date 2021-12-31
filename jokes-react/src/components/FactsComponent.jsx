import React, { Component } from "react";
import HeaderTitleComponent from "./HeaderTitle/HeaderTitleComponent";

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Zanimljivosti',
      facts: []
    };
  }

  render() {
    return (
      <HeaderTitleComponent title={this.state.pageName}/>

      
    );
  }
}
export default Facts;
