import React from "react";
import logo from "../assets/images/spark.svg";

class BackCard extends React.Component {
 
  render() {
    return (
        <div className="card" onClick = {this.props.flipClick}>
        <div className="card__flip">
          <div className="card__front">
            <img className="card__spark" src={logo} alt="Reveal Your Deal" />
          </div>
          <div className="card__back">
          </div>
        </div>
        </div>
    );
  }
}

export default BackCard;
