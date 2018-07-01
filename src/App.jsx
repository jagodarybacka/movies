import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardsList from './CardsList';
import Controls from './Controls';

const API = 'https://api.myjson.com/bins/1tll6';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [],
      data: [],
      genres: [],
    };

    this.initGenres = this.initGenres.bind(this);
  }

  componentDidMount() {
    axios.get(API)
      .then((response) => {
        this.setState({
          fields: response.data.fields,
          data: response.data.values,
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
    });
    console.log(genresArray);
    this.setState({
      genres: genresArray,
    });
  }

  render() {
    const { genres } = this.state;
    return (
      <section>
        <Controls genres={genres} />
        <CardsList {...this.state} />
      </section>
    );
  }
}
export default App;
