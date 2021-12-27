import React, { Component } from "react";
import ResponsiveAppBar from "./AppBar/AppBar";

/*
* Delete this class if everything works as expected after
* RAB is used in App.js
*/
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
