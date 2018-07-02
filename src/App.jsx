import React, { Component } from 'react';
import axios from 'axios';
import CardsList from './CardsList';
import Controls from './Controls';

const API = 'https://api.myjson.com/bins/1tll6';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [],
      data: [],
      sourceData: [],
      genres: [],
    };

    this.initGenres = this.initGenres.bind(this);
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    axios.get(API)
      .then((response) => {
        this.setState({
          fields: response.data.fields,
          data: response.data.values,
          sourceData: response.data.values,
        });
      })
      .then(() => this.initGenres());
  }

  initGenres() {
    const { data } = this.state;
    const genresArray = [];
    data.map((el) => {
      if (el.genre) {
        const elementGenres = el.genre.split(', ');
        elementGenres.forEach((a) => {
          if (genresArray.indexOf(a) === -1) {
            genresArray.push(a);
          }
        });
      }
      return el;
    });
    this.setState({
      genres: genresArray,
    });
  }

  filter(field, compare, fn) {
    const { data } = this.state;
    const filteredData = data.map((el) => {
      if (el == null) return null;
      return fn(el[field], compare) ? el : null;
    });

    this.setState({
      data: filteredData,
    });
  }

  sort(field, order) {
    const { data } = this.state;
    let sortedData = data.sort((a, b) => {
      // Check if a or b exist
      if (a == null && b == null) return 0;
      if (a == null) return -1;
      if (b == null) return 1;
      if (!a[field] && !b[field]) return 0;
      if (!a[field] && b[field]) return -1;
      if (!b[field] && a[field]) return 1;

      // If a and b exist
      const a1 = parseFloat(a[field]) || a[field];
      const b1 = parseFloat(b[field]) || b[field];

      if (typeof a1 === 'number') {
        if (a1 < b1) return -1;
        if (a1 > b1) return 1;
        return 0;
      }
      return a1.localeCompare(b1);
    });

    if (order === 'dsc') {
      sortedData = sortedData.reverse();
    }

    this.setState({
      data: sortedData,
    });
  }

  reset(e) {
    e.preventDefault();
    const { sourceData } = this.state;
    this.setState({
      data: sourceData,
    });
  }

  render() {
    const { genres, fields } = this.state;
    return (
      <section>
        <Controls
          genres={genres}
          reset={this.reset}
          sort={this.sort}
          filter={this.filter}
          fields={fields}
        />
        <CardsList {...this.state} />
      </section>
    );
  }
}
export default App;
