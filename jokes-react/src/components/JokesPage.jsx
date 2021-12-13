import React, { Component } from "react";
import JokesListService from "../services/JokeServices/JokesListService";
import HeaderTitleComponent from "./HeaderTitleComponent";
import ClearButton from "../components/Buttons/ClearButton";
import JokeArea from "./JokeArea";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  // sortByDate = (items) => {
  //   const result = (items.sort = (first, last) => {
  //     // Turn your strings into dates, and then subtract them
  //     // to get a value that is either negative, positive, or zero.
  //     return new Date(last.input) - new Date(first.input);
  //   });
  //   console.log(123, result);
  // };

  async componentDidMount() {
    try {
      const result = await JokesListService.getAllJokes();

      // FORMATE DATA TO SORT DATA or HOW TO SORT ARRAY OF ARRAYS

      this.setState({
        jokes: result.data.sort(function (a, b) {
          return new Date(b.input) - new Date(a.input);
        }),
      });
    } catch {}
  }

  handleCallback = (value) => {
    // value ? deleteAllAPI : clearFromScreen
    let niz = [];
    // niz.push({ id: 1, joke: val });
    this.setState({ jokes: niz });
  };

  render() {
    const { jokes } = this.state;

    return (
      <>
        <HeaderTitleComponent title="Vicevi" />
        <div className="main-page-container">
          {jokes.map((joke) => (
            <JokeArea key={joke.id} date={joke.input} title={"Naslov"} jokeText={joke.joke} /> // REACT ASKS FOR KEY WHEN MAP IS USED
          ))}
        </div>
        <ClearButton parentCallback={this.handleCallback} />
      </>
    );
  }
}
export default Jokes;
