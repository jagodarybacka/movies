import React from 'react';
import ControlsItem from './ControlsItem';
import { ControlsComponent, ControlsSection } from './Controls.style'

function Controls() {
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

  return (
    <ControlsComponent>
      <ControlsSection>
        <h2>
          Filters
        </h2>
        <ul>
          <ControlsItem
            name="Genre"
            defaultValue="All"
          />
        </ul>
      </ControlsSection>
      <ControlsSection>
        <h2>
          Sort
        </h2>
        <ul>
          <ControlsItem
            name="Title"
            defaultValue="None"
            options={orderAZ}
          />
          <ControlsItem
            name="Genre"
            defaultValue="None"
            options={orderAZ}
          />
          <ControlsItem
            name="Release date"
            defaultValue="None"
            options={order}
          />
          <ControlsItem
            name="Duration"
            defaultValue="None"
            options={order}
          />
          <ControlsItem
            name="Rating"
            defaultValue="None"
            options={order}
          />
          <ControlsItem
            name="Votes"
            defaultValue="None"
            options={order}
          />
        </ul>
      </ControlsSection>
      <input type="submit" value="Reset" />
    </ControlsComponent>
  );
}

export default Controls;
