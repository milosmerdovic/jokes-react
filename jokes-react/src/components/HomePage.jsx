import React, { Component } from "react";
import HeaderTitleComponent from "./HeaderTitleComponent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Garfield"
    }
  }
  render() {
    return (
      <HeaderTitleComponent title='Pochetna'/>
    );
  }
}
export default HomePage;
