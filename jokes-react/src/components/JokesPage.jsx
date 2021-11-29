import React, { Component } from "react";
import JokesListService from "../services/JokesListService";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  componentDidMount() {
    JokesListService.getAllJokes().then((result) => {
      this.setState({ jokes: result.data });
    });
  }

  render() {
    return (
      <>
        <div>
          <h1 className="main-page-title">Vicevi</h1>
        </div>
        <div className="main-page-container">
          {this.state.jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </div>
      </>
    );
  }
}
export default Jokes;
