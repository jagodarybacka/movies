import React from 'react';
import shordid from 'shortid';

function ControlsItem({ name, defaultValue, options }) {
  let optionsList = [];
  if (options) {
    optionsList = options.map(el => (
      <option key={shordid.generate()}>
        {el}
      </option>
    ));
  }

  return (
    <li>
      <p>
        {name}
      </p>
      <select>
        <option defaultValue>
          {defaultValue || 'None'}
        </option>
        {optionsList}
      </select>
    </li>
  );
}

export default ControlsItem;
