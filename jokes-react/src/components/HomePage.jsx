import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Garfield"
    }
  }
  render() {
    return (
      <div>
        <h1 className='main-page-title'>{this.state.name}</h1>
      </div>
    );
  }
}
export default HomePage;
