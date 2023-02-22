import Cards from "./components/cards/Cards";
import Data from "./assets/data/dados.json";
import { Component } from "react";

export default class App extends Component {
  state = {
    itens: Data,
  };
  render() {
    return (
      <div className="App">
        <h1>Quitanda</h1>
        <div>
          <Cards content={this.state.itens.imagens[0]} />
          <Cards content={this.state.itens.imagens[1]} />
        </div>
        <div></div>
      </div>
    );
  }
}
