import { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div className="CardItem">
        <p>{this.props.content.descricao}</p>
        <img src={this.props.content.item} alt={this.props.content.descricao} />
      </div>
    );
  }
}
