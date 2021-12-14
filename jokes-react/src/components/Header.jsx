import React, { Component } from "react";
import ResponsiveAppBar from "./AppBar/AppBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <ResponsiveAppBar />
      </>
    );
  }
}
export default Header;
