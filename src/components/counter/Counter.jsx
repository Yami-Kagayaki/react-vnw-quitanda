import { Component } from "react";

export default class Counter extends Component {
  state = {
    contador: 0,
  };

  aumentarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  diminuirContador = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div className="Counter">
        <div className="car">
          <img
            src="https://cdn-icons-png.flaticon.com/512/126/126510.png"
            alt="Carrinho de Compras"
          />
          <p>Arraste o seu produto aqui para colocar no carrinho</p>
        </div>
        <div className="Add">
          <button className="Bstyle" onClick={this.aumentarContador}>
            +
          </button>
          <p id="Num">{this.state.contador}</p>
          <button className="Bstyle" onClick={this.diminuirContador}>
            -
          </button>
        </div>
      </div>
    );
  }
}
