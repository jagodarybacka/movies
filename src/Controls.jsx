import React from 'react';
import PropTypes from 'prop-types';
import shordid from 'shortid';
import ControlsItem from './ControlsItem';

import { ControlsComponent, ControlsSection } from './Controls.style';

function ratingFn(fieldValue, compare) {
  if (fieldValue && fieldValue > compare) return true;
  return false;
}

function genreFn(fieldValue, compare) {
  if (fieldValue && fieldValue.indexOf(compare) >= 0) return true;
  return false;
}

function Controls({
  genres,
  sort,
  filter,
  reset,
}) {
  const order = [{ name: 'Ascending', value: 'asc' }, { name: 'Descending', value: 'dsc' }];
  const orderAZ = [{ name: 'A-Z', value: 'asc' }, { name: 'Z-A', value: 'dsc' }];

  const filtersItems = [
    {
      name: 'Genere',
      field: 'genre',
      defaultValue: 'All',
      fn: genreFn,
      options: genres,
    },
    {
      name: 'Rating',
      field: 'rating',
      defaultValue: 'All',
      fn: ratingFn,
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
    {
      name: 'Title', field: 'name', defaultValue: 'None', options: orderAZ,
    },
    {
      name: 'Genre', field: 'genre', defaultValue: 'None', options: orderAZ,
    },
    {
      name: 'Release date', field: 'year', defaultValue: 'None', options: order,
    },
    {
      name: 'Duration', field: 'duration', defaultValue: 'None', options: order,
    },
    {
      name: 'Rating', field: 'rating', defaultValue: 'None', options: order,
    },
    {
      name: 'Votes', field: 'votes', defaultValue: 'None', options: order,
    },
  ];

  const filtersComponents = filtersItems.map(el => (
    <ControlsItem
      name={el.name}
      field={el.field}
      type="filter"
      defaultValue={el.defaultValue}
      options={el.options}
      fn={el.fn}
      filter={filter}
      key={shordid.generate()}
    />
  ));

  const sortComponents = sortItems.map(el => (
    <ControlsItem
      name={el.name}
      field={el.field}
      type="sort"
      defaultValue={el.defaultValue}
      options={el.options}
      sort={sort}
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
          {filtersComponents}
        </ul>
      </ControlsSection>
      <ControlsSection>
        <h2>
          Sort
        </h2>
        <ul>
          {sortComponents}
        </ul>
      </ControlsSection>
      <button type="button" onClick={reset}>
        Reset filters
      </button>
    </ControlsComponent>
  );
}


Controls.propTypes = {
  genres: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controls;
