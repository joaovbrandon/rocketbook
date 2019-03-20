import React, { Component } from 'react';
import { render } from 'react-dom';

// Styles
import './styles/main.scss';

// Components
import Header from './components/Header';

class App extends Component {
  state = {};

  render() {
    return <Header title="Rocketbook" />;
  }
}

render(<App />, document.getElementById('app'));
