import React from 'react';
import PropTypes from 'prop-types';
import shordid from 'shortid';
import Card from './Card';
import CardsListComponent from './CardsList.style';

function CardsList({ fields, data }) {
  const cards = data.map(card => (
    card ? (
      <Card
        fields={fields}
        data={card}
        key={shordid.generate()}
      />
    ) : null
  ));
  return (
    <CardsListComponent>
      {cards}
    </CardsListComponent>
  );
}

CardsList.propTypes = {
  fields: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default CardsList;
