import React, { Component } from 'react';
import axios from 'axios';
import CardsList from './CardsList';
import Controls from './Controls';
import './App.css';

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
    let sortedData;
    const { data } = this.state;
    if (order === 'dsc') {
      sortedData = data.sort((a, b) => {
        if (a == null && b == null) return 0;
        if (a == null) return b[field];
        if (b == null) return a[field];

        if (!a[field] && !b[field]) return 0;
        if (!a[field] && b[field]) return b[field];
        if (!b[field] && a[field]) return a[field];
        return b[field] - a[field];
      });
    } else {
      sortedData = data.sort((a, b) => {
        if (a == null && b == null) return 0;
        if (a == null) return b[field];
        if (b == null) return a[field];

        if (!a[field] && !b[field]) return 0;
        if (!a[field] && b[field]) return b[field];
        if (!b[field] && a[field]) return a[field];
        return a[field] - b[field];
      });
    }

    console.log(field, order);

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
