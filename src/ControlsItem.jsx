import React from 'react';
import shordid from 'shortid';

function ControlsItem({ name, defaultValue, options }) {
  let optionsList = [];
  if (options) {
    optionsList = options.map((el) => {
      let optionName;
      let optionValue;
      if (typeof el === 'string') {
        optionName = el;
        optionValue = el;
      } else {
        optionName = el.name;
        optionValue = el.value;
      }
      return (
        <option value={optionValue} key={shordid.generate()}>
          {optionName}
        </option>
      );
    });
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
