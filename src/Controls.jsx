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
      field: 'genres',
      defaultValue: 'All',
      fn: genreFn,
      options: genres,
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
      name: 'Duration', field: 'duration', defaultValue: 'None', options: order,
    },
    {
      name: 'Year', field: 'year', defaultValue: 'None', options: order,
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
        <ul className="sort">
          {sortComponents}
        </ul>
      </ControlsSection>
      <button className="reset" type="button" onClick={reset}>
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
