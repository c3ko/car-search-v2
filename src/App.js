import React, { Component } from 'react';
import './App.css';
import CarTableContainer from './containers/CarTableContainer';
import SearchCar from './containers/SearchCar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CarTableContainer />
        <SearchCar />
      </div>
    );
  }
}

export default App;
