import React from 'react';
import PropTypes from 'prop-types';
import shordid from 'shortid';
import CardComponent from './Card.style';

function Card({ fields, data }) {
  const info = fields.map((el) => {
    if (data[el.field]) {
      return (
        <div key={shordid.generate()}>
          <span className="label">
            {`${el.label}`}
          </span>
          <span className="data">
            {`${data[el.field]}`}
          </span>
        </div>
      );
    }
    return null;
  });
  return (
    <CardComponent>
      {info}
    </CardComponent>
  );
}

Card.propTypes = {
  fields: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default Card;
