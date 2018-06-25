import React from 'react';
import shordid from 'shortid';

function Card({
  id,
  fields,
  data,
}) {
  // console.log(data);
  const header = data[fields[0].field];
  const rest = fields.map(el => (
    <span key={shordid.generate()}>
      {
        data[el.field] ? `${el.label} ${data[el.field]}` : null
      }
    </span>
  ));
  console.log(fields);
  return (
    <li>
      <h2>
        {header}
      </h2>
      {rest}
    </li>
  );
}

export default Card;
