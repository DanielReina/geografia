import React, { Component } from "react";
import countries from "../countries.json";


class RandomCountry extends Component {
  constructor() {
    super();
    this.state = {
     countries:false
    };
  }

  componentDidMount() {
     this.setState({countries: [...countries]})
  }

  render() {
    console.log("holaaa", this.state.countries);
    return (
      <div>
        {this.state.countries ? (
          <>
            <h1>hola locoo</h1>
          </>
        ) : null}
      </div>
    );
  }
}

export default RandomCountry;
