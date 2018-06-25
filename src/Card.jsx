import React from 'react';
import shordid from 'shortid';

function Card({
  id,
  fields,
  data,
}) {
  const info = fields.map((el) => {
    if (data[el.field]) {
      return (
        <span key={shordid.generate()}>
          {
            `${el.label} ${data[el.field]}`
          }
        </span>
      );
    }
    return null;
  });
  return (
    <li>
      {info}
    </li>
  );
}

export default Card;
