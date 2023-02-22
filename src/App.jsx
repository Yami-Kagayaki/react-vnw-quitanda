import Cards from "./components/cards/Cards";
import Data from "./assets/data/dados.json";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1></h1>
        <div>
          <Cards />
        </div>
      </div>
    );
  }
}
