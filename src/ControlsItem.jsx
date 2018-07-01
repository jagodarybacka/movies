import React from 'react';
import shordid from 'shortid';

class ControlsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'none',
    };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({ value: e.target.value });
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
          onChange={this.change}
          value={this.state.value}
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
