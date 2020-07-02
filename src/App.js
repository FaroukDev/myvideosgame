import React, { Component } from "react";
import "./App.css";
import FilterGame from './components/FilterGame.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          
          <FilterGame/>
        </header>
      </div>
    );
  }
}

export default App;

