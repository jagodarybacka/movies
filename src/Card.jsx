import React from 'react';
import shordid from 'shortid';

function Card({
  id,
  fields,
  data,
}) {
  const info = fields.map(el => (
    <span key={shordid.generate()}>
      {
        data[el.field] ? `${el.label} ${data[el.field]}` : null
      }
    </span>
  ));
  console.log(fields);
  return (
    <li>
      {info}
    </li>
  );
}

export default Card;
