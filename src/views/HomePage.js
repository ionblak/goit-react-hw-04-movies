import React, { Component } from 'react';
import getPopularFilms from '../api/apiServices';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const response = await getPopularFilms();
    this.setState({ films: response });
  }

  render() {
    return <h1>Home page</h1>;
  }
}

export default HomePage;
