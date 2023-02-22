import { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.textalt} />
      </div>
    );
  }
}
