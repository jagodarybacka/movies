import React from 'react';

function ControlsItem({ name, defaultValue, options }) {
  let optionsList = [];
  if (options) {
    optionsList = options.map(el => (
      <option>
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
