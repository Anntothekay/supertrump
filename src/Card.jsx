import * as React from 'react';

export default function Card() {
  return (
    <div className="card">
      <h1>Elefant</h1>
      <img
        alt="Elefant"
        height="200"
        width="200"
        src={`${process.env.PUBLIC_URL}/placeholder.png`}
      />
      <div className="card-text">
        <div className="card-text-row">
          <span className="card-text-property">Größe</span>
          <span className="card-text-value">3.3 m</span>
        </div>
        <div className="card-text-row">
          <span className="card-text-property">Gewicht</span>
          <span className="card-text-value">6000 kg</span>
        </div>
        <div className="card-text-row">
          <span className="card-text-property">Alter</span>
          <span className="card-text-value">70 Jahre</span>
        </div>
        <div className="card-text-row">
          <span className="card-text-property">Alter</span>
          <span className="card-text-value">70 Jahre</span>
        </div>
        <div className="card-text-row">
          <span className="card-text-property">Nachkommen</span>
          <span className="card-text-value">1</span>
        </div>
        <div className="card-text-row">
          <span className="card-text-property">Geschwindigkeit</span>
          <span className="card-text-value">40 km/h</span>
        </div>
      </div>
    </div>
  );
}
