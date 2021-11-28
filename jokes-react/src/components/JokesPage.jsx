import React, { Component } from "react";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  render() {
    return (
      <>
        <div>
          <h1 className="main-page-title">Vicevi</h1>
        </div>
        <div>
          {/* {this.state.jokes.map((joke) => (
            <tr key="Vic">
              <td>Moj vic</td>
            </tr>
          ))} */}
          <th>Vicevi vicevi</th>
          <tr>
            {" "}
            Vicevi
            <td>Moj vic</td>
            <td>Moj vic</td>
          </tr>
        </div>
      </>
    );
  }
}
export default Jokes;
