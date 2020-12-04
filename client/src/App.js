import React from "react";
import Card from "./components/Card";
import ReactCardFlip from "react-card-flip";
import BackCard from "./components/BackCard";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class App extends React.Component {
  // ... component class
  render() {
    // .. return
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        /// these are optional style, it is not necessary
        className="card"
      >
        <FrontSide className = "card">
          <Card />
        </FrontSide>
        <BackSide   className="card">
          <BackCard />
        </BackSide>
      </Flippy>
    );
  }
}

export default App;
