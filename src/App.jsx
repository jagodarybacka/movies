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
    };
  }

  componentDidMount() {
    axios.get(API)
      .then((response) => {
        this.setState({
          fields: response.data.fields,
          data: response.data.values,
        });
      });
  }

  render() {
    return (
      <section>
        <Controls />
        <CardsList {...this.state} />
      </section>
    );
  }
}
export default App;
