import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        console.log(response.data)
        this.setState({
          fields: response.data.fields,
          data: response.data.values
        });
      });
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}
export default App;
