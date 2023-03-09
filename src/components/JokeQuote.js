import React, { Component } from "react";

export default class JokeQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single");
    const data = await response.json();
    this.setState({
      joke: data.joke,
    });
  }

  render() {
    const { joke } = this.state;
    return (
      <div>
        <p>"{joke}"</p>
      </div>
    );
  }
}