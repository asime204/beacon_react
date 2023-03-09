import React, { Component } from "react";

export default class AnimeQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      anime: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://animechan.vercel.app/api/random");
    const data = await response.json();
    this.setState({
      quote: data.quote,
      character: data.character,
      anime: data.anime,
    });
  }

  render() {
    const { quote, character, anime } = this.state;
    return (
      <div>
        <p>"{quote}"</p>
        <p>- {character}, {anime}</p>
      </div>
    );
  }
}