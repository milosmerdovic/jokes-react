import { Box } from "@mui/material";
import React, { Component } from "react";
import ClearButton from "../components/Buttons/ClearButton";
import JokesListService from "../services/JokeServices/JokesListService";
import HeaderTitleComponent from "./HeaderTitle/HeaderTitleComponent";
import Slider from "./Slider/Slider";


class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vicevi",
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
          return new Date(a.input) - new Date(b.input);
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
        <HeaderTitleComponent title={this.state.title} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <div className="main-page-container">
            <Slider jokes={jokes} />
          </div>
          <ClearButton parentCallback={this.handleCallback} />
        </Box>
      </>
    );
  }
}
export default Jokes;