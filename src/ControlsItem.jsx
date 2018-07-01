import React from 'react';
import shordid from 'shortid';

class ControlsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'none',
    };
    this.change = this.change.bind(this);
    this.sorting = this.sorting.bind(this);
    this.filtering = this.filtering.bind(this);
  }

  change(e) {
    const { field, type } = this.props;
    this.setState({ value: e.target.value });
    if (type === 'sort') this.sorting(field, e.target.value);
    if (type === 'filter') {
      const { fn } = this.props;
      this.filtering(field, e.target.value, fn);
    }
  }

  sorting(field, value) {
    this.props.sort(field, value);
  }

  filtering(field, compare, fn) {
    this.props.filter(field, compare, fn);
  }

  render() {
    const { options, name, defaultValue } = this.props;
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
        <select
          value={this.state.value}
          onChange={this.change}
        >
          <option value="none" defaultValue>
            {defaultValue || 'None'}
          </option>
          {optionsList}
        </select>
      </li>
    );
  }
}

export default ControlsItem;
