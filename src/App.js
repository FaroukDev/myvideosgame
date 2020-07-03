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
    const GAME = [];
    GAME.push({category: 'FPS', price: '10€', stocked:true, name: 'Counter Strike'})
    GAME.push({category: 'ROLEPLAY', price: '69€', stocked:false, name: 'The Last Of Us 2'})
    GAME.push({category: 'FPS', price: '40€', stocked:true, name: 'Battlefield'})
    GAME.push({category: 'ADVENTURE', price: '25€', stocked:false, name: 'God of War'})
    GAME.push({category: 'ADVENTURE', price: '25€', stocked:true, name: 'The Breath of the wild'})
    GAME.push({category: 'ROLEPLAY', price: '15€', stocked:true, name: 'World of Warcraft'})

    return (
      <div className="App">
        <header className="App-header">
          
          <FilterGame jeux={GAME}/>
        </header>
      </div>
    );
  }
}

export default App;

