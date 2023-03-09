import * as React from 'react';
import * as PropTypes from 'prop-types';
import update from 'immutability-helper';

import './Game.css';
import Card from './Card';
import Animal from './Animal';

export default class Game extends React.Component {
  state = {
    selectedProperty: '',
    playersTurn: true,
    player: [new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40)],
    computer: [new Animal('Nashorn', 'placeholder.png', 1, 9, 2300, 50, 1, 50)],
  };

  getSelectPropertyHandler() {
    return (property) => this.setState(
      (state) => update(state, { selectedProperty: { $set: property } }),
    );
  }

  render() {
    const {
      playersTurn, player, computer, selectedProperty,
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
            animal={player[0]}
            uncovered={playersTurn}
            selectedProperty={selectedProperty}
            onSelectProperty={this.getSelectPropertyHandler()}
          />
          <Card
            animal={computer[0]}
            uncovered={!playersTurn}
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
