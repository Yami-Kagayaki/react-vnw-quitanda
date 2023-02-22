import { Component } from "react";
import "./Cards.css";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <img src={this.props.content.item} alt={this.props.content.descricao} />
        <h2>{this.props.content.descricao}</h2>
      </div>
    );
  }
}
