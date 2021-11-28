import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/facts">Facts</Nav.Link>
            <Nav.Link href="/jokes">Jokes</Nav.Link>

            {/* <Link to="/">Home</Link>
            <Link to="/facts">Facts</Link> */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
