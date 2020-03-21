import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export const BASE_URL = "http://localhost:3000/stocks";
export default App;
