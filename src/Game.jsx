import * as React from 'react';
import * as PropTypes from 'prop-types';
import update from 'immutability-helper';

import './Game.css';
import Card from './Card';
import Animal from './Animal';

export default class Game extends React.Component {
  state = {
    selectedProperty: '',
    computerUncovered: false,
    playersTurn: true,
    playerDeck: [
      new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40),
      new Animal('Flusspferd', 'placeholder.png', 1.5, 1800, 50, 1, 30),
    ],
    computerDeck: [
      new Animal('Nashorn', 'placeholder.png', 1.9, 2300, 50, 1, 50),
      new Animal('Krokodil', 'placeholder.png', 5.2, 1000, 70, 60, 29),
    ],
  };

  getSelectPropertyHandler() {
    return (property) => this.play(property);
  }

  compare(property) {
    let { playersTurn } = this.state;

    const firstPlayer = this.state.playerDeck[0];
    let playerDeck = update(this.state.playerDeck, { $splice: [[0, 1]] });
    const firstComputer = this.state.computerDeck[0];
    let computerDeck = update(this.state.computerDeck, { $splice: [[0, 1]] });

    if (firstPlayer[property] > firstComputer[property]) {
      playersTurn = true;
      playerDeck = update(playerDeck, { $push: [firstPlayer, firstComputer] });

      if (computerDeck.length === 0) {
        alert('Player wins');
        return;
      }
    } else if (firstPlayer[property] < firstComputer[property]) {
      playersTurn = false;
      computerDeck = update(computerDeck, { $push: [firstPlayer, firstComputer] });

      if (playerDeck.length === 0) {
        alert('Computer wins');
        return;
      }
    } else {
      playerDeck = update(playerDeck, { $push: [firstPlayer] });
      computerDeck = update(computerDeck, { $push: [firstComputer] });
    }
    this.setState(
      (state) => update(state, {
        $set: {
          computerUncovered: false,
          selectedProperty: '',
          playersTurn,
          playerDeck,
          computerDeck,
        },
      }),
      () => {
        if (!playersTurn) {
          setTimeout(() => {
            const propertyvalue = this.selectRandomProperty();
            this.play(propertyvalue);
          }, 2000);
        }
      },
    );
  }

  play(property) {
    this.setState(
      () => update(this.state, {
        selectedProperty: { $set: property },
        computerUncovered: { $set: true },
      }),
      () => {
        setTimeout(() => {
          this.compare(property);
        }, 2000);
      },
    );
  }

  selectRandomProperty() {
    const properties = Object.keys(Animal.properties);
    const index = Math.floor(Math.random() * properties.length);
    return properties[index];
  }

  render() {
    const {
      playersTurn, playerDeck, computerDeck, selectedProperty, computerUncovered,
    } = this.state;
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div className="info">
          {playersTurn ? 'Du bist' : 'Der Computer ist'}
          {' '}
          an der Reihe
        </div>
        <div className="cards">
          <Card
            animal={playerDeck[0]}
            uncovered
            selectedProperty={selectedProperty}
            onSelectProperty={this.getSelectPropertyHandler()}
          />
          <Card
            animal={computerDeck[0]}
            uncovered={computerUncovered}
            selectedProperty={selectedProperty}
          />
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
  title: 'Supertrumpf',
};

Game.propTypes = {
  title: PropTypes.string,
};
