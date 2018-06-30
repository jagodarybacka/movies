import React from 'react';
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

  return (
    <ControlsComponent>
      <ControlsSection>
        <h2>
          Filters
        </h2>
        <ul>
          <li>
            <p>
              Release date
            </p>
            <select>
              <option defaultValue>
                All
              </option>
            </select>
          </li>
          <li>
            <p>
              Genre
            </p>
            <select>
              <option defaultValue>
                All
              </option>
            </select>
          </li>
        </ul>
      </ControlsSection>
      <ControlsSection>
        <h2>
          Sort
        </h2>
        <ul>
          <li>
            <p>
              Title
            </p>
            <select>
              <option defaultValue>
                None
              </option>
              <option>
                Ascending
              </option>
              <option>
                Descending
              </option>
            </select>
          </li>
        </ul>
      </ControlsSection>
      <button>Apply</button>
    </ControlsComponent>
  );
}

export default Controls;
