import React from 'react';
import shordid from 'shortid';
import Card from './Card';
import CardsListComponent from './CardsList.style';

function CardsList({ fields, data }) {
  const cards = data.map(card => (
    <Card
      fields={fields}
      data={card}
      key={shordid.generate()}
    />
  ));
  return (
    <CardsListComponent>
      {cards}
    </CardsListComponent>
  );
}

export default CardsList;
