import React from "react";
import FlipCard from "./FlipCard";
import Card from "./Card";
import BackCard from "./BackCard";
import ReactCardFlip from "react-card-flip";
import DownloadApp from "./DownloadApp";
class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          isFlipped: false,
          id: 1,
        },
        {
          isFlipped: false,
          id: 2,
        },
        {
          isFlipped: false,
          id: 3,
        },
        {
          isFlipped: false,
          id: 4,
        },
      ],
      isFlipped: false,
      changeComponent: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    // e.preventDefault();
    const copy = this.state.cards;
    if (!this.state.isFlipped) {
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].id === id) {
          copy[i].isFlipped = true;
        }
        this.setState({ cards: copy });
      }
      this.setState({ isFlipped: true });
      setTimeout(()=>{
        this.setState({ changeComponent: true })
      }, 3000)
      
    }

    // this.setState({})
    // if (!this.state.isFlipped) {
    //   this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    // }
  }
  render() {
    return(
      this.state.changeComponent ? (
        <DownloadApp />
      ) : (
        <section className="main-section">
          <article className="main-section__article">
            <h2 className="main-section__article-title">
              Click a card to reveal your deal...
            </h2>
            <p className="main-section__article-text">
              Each card has a unique roll back deal just for you as a thank you
              gift for shopping with us. Come back tomorrow to reveal your new
              deal.
            </p>
          </article>
          <ul className="main-section__card-list">
            <ReactCardFlip
              isFlipped={this.state.cards[0].isFlipped}
              flipDirection="vertical"
            >
              <Card
                id={this.state.cards[0].id}
                flipClick={(id) => this.handleClick(id)}
              />
              <BackCard />
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={this.state.cards[1].isFlipped}
              flipDirection="vertical"
            >
              <Card
                id={this.state.cards[1].id}
                flipClick={(id) => this.handleClick(id)}
              />
              <BackCard />
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={this.state.cards[2].isFlipped}
              flipDirection="vertical"
            >
              <Card
                flipClick={(id) => this.handleClick(id)}
                id={this.state.cards[2].id}
              />
              <BackCard />
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={this.state.cards[3].isFlipped}
              flipDirection="vertical"
            >
              <Card
                flipClick={(id) => this.handleClick(id)}
                id={this.state.cards[3].id}
              />
              <BackCard flipClick={this.handleClick} />
            </ReactCardFlip>
          </ul>
        </section>
      )
    )
   
  }
}

export default MainSection;
