import Cards from "./components/cards/Cards";
import Counter from "./components/counter/Counter";
import Data from "./assets/data/dados.json";
import { Component } from "react";

export default class App extends Component {
  state = {
    itens: Data,
  };
  render() {
    return (
      <div className="App">
        <h1>
          HORTFRUTI
          <span>VnW</span>
        </h1>
        <section>
          <div className="ContainerItem">
            <Cards content={this.state.itens.imagens[0]} />
            <Cards content={this.state.itens.imagens[1]} />
            <Cards content={this.state.itens.imagens[2]} />
            <Cards content={this.state.itens.imagens[3]} />
            <Cards content={this.state.itens.imagens[4]} />
            <Cards content={this.state.itens.imagens[5]} />
            <Cards content={this.state.itens.imagens[6]} />
            <Cards content={this.state.itens.imagens[7]} />
          </div>
          <Counter />
        </section>
      </div>
    );
  }
}
