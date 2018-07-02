import React from 'react';
import PropTypes from 'prop-types';
import shordid from 'shortid';

class ControlsItem extends React.Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
    this.sorting = this.sorting.bind(this);
    this.filtering = this.filtering.bind(this);
  }

  change(e) {
    const newValue = e.target.value;
    const { field, type } = this.props;
    if (type === 'sort') this.sorting(field, newValue);
    if (type === 'filter') {
      const { fn } = this.props;
      this.filtering(field, newValue, fn);
    }
  }

  sorting(field, value) {
    const { sort } = this.props;
    sort(field, value);
  }

  filtering(field, compare, fn) {
    const { filter } = this.props;
    filter(field, compare, fn);
  }

  render() {
    const { options, name } = this.props;
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
          <button className="option" type="button" onClick={this.change} value={optionValue} key={shordid.generate()}>
            {optionName}
          </button>
        );
      });
    }
    return (
      <li>
        <p>
          {name}
        </p>
        {optionsList}
      </li>
    );
  }
}

ControlsItem.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  fn: PropTypes.func,
  filter: PropTypes.func,
  sort: PropTypes.func,
};

export default ControlsItem;
