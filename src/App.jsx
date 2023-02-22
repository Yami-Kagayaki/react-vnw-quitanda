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
          <Cards
            image={this.state.itens.imagens.item}
            textalt={this.state.itens.imagens.descricao}
          />
          <Cards image={this.state.itens.imagens[1]} />
          <Cards image={this.state.itens.imagens[2]} />
        </div>
        <div></div>
      </div>
    );
  }
}
