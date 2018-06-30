import React from 'react';
import shordid from 'shortid';

import CardComponent from './Card.style';

function Card({
  id,
  fields,
  data,
}) {
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

export default Card;
