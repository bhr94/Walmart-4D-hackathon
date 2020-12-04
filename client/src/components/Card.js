import logo from "../assets/images/spark.svg"

function Card() {
  return (
    <div className="card">
      <div className="card__flip">
        <div className="card__front">
          <img className="card__spark" src={logo} alt="Reveal Your Deal" />
        </div>
        <div className="card__back">
          <h1> this is the backside</h1>
        </div>
      </div>
    </div>
  )
}

export default Card
