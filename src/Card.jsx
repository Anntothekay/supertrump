import * as React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Animal from './Animal';

export default function Card({
  animal, uncovered, onSelectProperty, selectedProperty,
}) {
  const front = (
    <div className="card">
      <h1>{animal.name}</h1>
      {animal.image && (
        <img
          alt={animal.name}
          src={`${process.env.PUBLIC_URL}/${animal.image}`}
          height="200"
          width="200"
        />
      )}
      <div className="card-text">
        {Object.keys(Animal.properties).map((property) => {
          const animalProperty = Animal.properties[property];
          return (
            <div
              role="button"
              tabIndex="0"
              key={property}
              onClick={() => { onSelectProperty(property); }}
              onKeyUp={() => { onSelectProperty(property); }}
              className={selectedProperty === property ? 'active card-text-row' : 'card-text-row'}
            >
              <span className="card-text-property">{animalProperty.label}</span>
              <span className="card-text-value">
                {animal[property]}
                &nbsp;
                {animalProperty.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
  const back = <div className="card back" />;
  if (uncovered) {
    return front;
  }
  return back;
}

Card.propTypes = {
  uncovered: PropTypes.bool.isRequired,
  animal: PropTypes.instanceOf(Animal).isRequired,
  onSelectProperty: PropTypes.func.isRequired,
  selectedProperty: PropTypes.string.isRequired,
};
