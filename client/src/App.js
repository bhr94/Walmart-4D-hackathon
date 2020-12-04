import React from "react";
import RevealPage from "./pages/RevealPage";

class App extends React.Component {



  render() {
    return (
      <>
        {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card flipClick={this.handleClick} />
        <BackCard flipClick={this.handleClick} />
      </ReactCardFlip> */}
        <RevealPage />
      </>
    );
  }
}

export default App
