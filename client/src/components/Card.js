import React from "react";
import logo from "../assets/images/spark.svg";

class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick = {() =>this.props.flipClick(this.props.id)}>
        <div className="card__flip" >
          <div className="card__front">
            <img className="card__spark" src={logo} alt="Reveal Your Deal" />
          </div>
          <div className="card__back">
            <h1 className = "flip"> this is the frontside</h1>
          </div>
        </div>
       </div>
    );
  }
}

export default Card;
