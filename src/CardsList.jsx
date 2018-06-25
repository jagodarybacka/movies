import React from 'react';
import shordid from 'shortid';
import Card from './Card';

function CardsList({ fields, data }) {
  console.log('fields: ', fields);

  const cards = data.map(card => (
    <Card
      fields={fields}
      data={card}
      key={shordid.generate()}
    />
  ));
  return (
    <ul>
      {cards}
    </ul>
  );
}

export default CardsList;
