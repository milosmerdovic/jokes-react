import React, { Component } from "react";
import JokesListService from "../services/JokesListService";
import HeaderTitleComponent from "./HeaderTitleComponent";
import ClearButton from '../components/Buttons/ClearButton'

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

  handleCallback = () => {
    let niz = [];
    // niz.push({ id: 1, joke: val });
    this.setState({ jokes: niz });
  };

  render() {
    const { jokes } = this.state;

    return (
      <>
        <HeaderTitleComponent title="Vicevi"/>
        <div className="main-page-container">
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </div>
        <ClearButton parentCallback={this.handleCallback} isDeletedFromDb={false}/>
      </>
    );
  }
}
export default Jokes;
