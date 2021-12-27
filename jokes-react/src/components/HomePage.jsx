import { Box } from "@mui/material";
import React, { Component } from "react";
import RandomJokeService from "../services/JokeServices/RandomJokeService";
import HeaderTitleComponent from "./HeaderTitleComponent";
import SingleJokePaper from "./SingleJokeComponent";
import { spacing } from '@mui/system';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshed: false,
      joke: {},
    };
  }

  /* 
  method generated for fetching random joke from BE. It will 
  return joke data and set it into the state 
  */
  async fetchRandomJoke() {
    try {
      const result = await RandomJokeService.getRandomJoke();
      this.setState({
        title: "Početna",
        joke: result.data,
      });
    } catch {}
  }

  /*
  Setting initial data to be rendered on the page once 
  when opened
  */
  async componentDidMount() {
    this.fetchRandomJoke();
  }

  /*
  Method which gets isRefreshed flag. It checks if the
  previous state (i.e. false !== true) && isRefreshed (== true).
  If conditions are fullfilled - the new joke will be rendered in 
  the same component. After the new joke is rendered isRefreshed
  is set to false again so the new cicle can be done
  */
  componentDidUpdate(prevProps, prevState) {
    const { isRefreshed } = this.state;

    if (prevState.isRefreshed !== isRefreshed && isRefreshed) {
      this.fetchRandomJoke();
      this.setState({
        isRefreshed: false,
      });
    }
  }

  /*
  Callback function which sets the new state on click and
  changes the isRefreshed flag to true
  */
  refreshJoke(event) {
    this.setState({
      isRefreshed: true,
    });

    // console.log("EVENT DATA = ", event);
  }

  render() {
    const { joke, title } = this.state;

    return (
      <>
        <HeaderTitleComponent title={title} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <div className="main-page-container">
            <SingleJokePaper
              date={joke.input}
              title={"Naslov"}
              jokeText={joke.joke}
              onRefresh={(event) => this.refreshJoke(event)}
            />
          </div>
        </Box>
      </>
    );
  }
}

export default HomePage;
