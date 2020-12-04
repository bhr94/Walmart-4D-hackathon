import React from "react";
import logo from "../assets/images/spark.svg";
import shoe from "../assets/images/shoe.svg"

class BackCard extends React.Component {
 
  render() {
    return (
        <div className="card flipped" onClick = {this.props.flipClick}>
        <div className="card__flip">
          <div className="card__front">
            {/* <img className="card__spark" src={logo} alt="Reveal Your Deal" /> */}
            <img src = {shoe} className = "card__img"/>
            <div className = "card-footer">
              <p className = "card-footer__text">Save an additional 5$</p>
              <h1 className = "card-footer__price">10$</h1>
              <button className = "add-to-cart__button">Add to cart</button>
            </div>
          </div>
          <div className="card__back">
            
          </div>
        </div>
        </div>
    );
  }
}

export default BackCard;
