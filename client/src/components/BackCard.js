import React from "react";
import logo from "../assets/images/spark.svg";

class BackCard extends React.Component {
  state = {
    isFlipped: false,
  };

  flipClick = () => {

  };
  render() {
    return (
        <div className="card__flip">
          <div className="card__front">
            <img className="card__spark" src={logo} alt="Reveal Your Deal" />
          </div>
          <div className="card__back">
          </div>
        </div>
    );
  }
}

export default BackCard;
