import React from "react";
import Card from "./Card";
import BackCard from "./BackCard";
import ReactCardFlip from "react-card-flip";

class FlipCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.isFlipped) {
      this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    }
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card flipClick={this.handleClick} />
        <BackCard flipClick={this.handleClick} />
      </ReactCardFlip>
    );
  }
}

export default FlipCard;