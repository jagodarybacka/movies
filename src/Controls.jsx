import React from 'react';
import ControlsItem from './ControlsItem';
import shordid from 'shortid';

import { ControlsComponent, ControlsSection } from './Controls.style'

function Controls({ genres }) {
  /*
    Filtering:
    - release date
    - genre
    - duration
    - rating

    Sorting:
    - title a-z
    - title z-a
    - release date asc
    - release date des
    - duration asc
    - duration des
    - rating asc
    - rating des
    - votes asc
    - votes des
  */
  const order = ['Ascending', 'Descending'];
  const orderAZ = ['A-Z', 'Z-A'];

  const filtersItems = [
    { name: 'Genere', defaultValue: 'All', options: genres },
    { name: 'Rating', defaultValue: 'All', options: ['1 and more', '2 and more', '3 and more', '4 and more', '5 and more', '6 and more', '7 and more', '8 and more', '9 and more'] },
  ];
  const sortItems = [
    { name: 'Title', defaultValue: 'None', options: orderAZ },
    { name: 'Genre', defaultValue: 'None', options: orderAZ },
    { name: 'Release date', defaultValue: 'None', options: order },
    { name: 'Duration', defaultValue: 'None', options: order },
    { name: 'Rating', defaultValue: 'None', options: order },
    { name: 'Votes', defaultValue: 'None', options: order },
  ];

  const filters = filtersItems.map(el => (
    <ControlsItem
      name={el.name}
      defaultValue={el.defaultValue}
      options={el.options}
      key={shordid.generate()}
    />
  ));

  const sort = sortItems.map(el => (
    <ControlsItem
      name={el.name}
      defaultValue={el.defaultValue}
      options={el.options}
      key={shordid.generate()}
    />
  ));

  return (
    <ControlsComponent>
      <ControlsSection>
        <h2>
          Filters
        </h2>
        <ul>
          {filters}
        </ul>
      </ControlsSection>
      <ControlsSection>
        <h2>
          Sort
        </h2>
        <ul>
          {sort}
        </ul>
      </ControlsSection>
      <input type="submit" value="Reset" />
    </ControlsComponent>
  );
}

export default Controls;
