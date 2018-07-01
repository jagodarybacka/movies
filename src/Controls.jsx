import React from 'react';
import ControlsItem from './ControlsItem';
import shordid from 'shortid';

import { ControlsComponent, ControlsSection } from './Controls.style'

function Controls({ genres }) {
  const order = [{ name: 'Ascending', value: 'asc' }, { name: 'Descending', value: 'dsc' }];
  const orderAZ = [{ name: 'A-Z', value: 'asc' }, { name: 'Z-A', value: 'dsc' }];

  const filtersItems = [
    { name: 'Genere', defaultValue: 'All', options: genres },
    {
      name: 'Rating',
      defaultValue: 'All',
      options: [
        { name: '1 and more', value: 1 },
        { name: '2 and more', value: 2 },
        { name: '3 and more', value: 3 },
        { name: '4 and more', value: 4 },
        { name: '5 and more', value: 5 },
        { name: '6 and more', value: 6 },
        { name: '7 and more', value: 7 },
        { name: '8 and more', value: 8 },
        { name: '9 and more', value: 9 }],
    },
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
