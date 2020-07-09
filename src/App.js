import React, { Component } from "react";
//import img1 from "./images/counter.jpg"
import "./App.css";
import FilterGame from './components/FilterGame.js';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const GAME = [];
    GAME.push({category: 'FPS', price: '10€', stocked:true, name: 'Counter Strike'})
    GAME.push({category: 'FPS', price: '40€', stocked:true, name: 'Battlefield'})
    GAME.push({category: 'ROLEPLAY', price: '69€', stocked:false, name: 'The Last Of Us 2'})
    GAME.push({category: 'ROLEPLAY', price: '15€', stocked:true, name: 'World of Warcraft'})
    GAME.push({category: 'ADVENTURE', price: '25€', stocked:false, name: 'God of War'})
    GAME.push({category: 'ADVENTURE', price: '25€', stocked:true, name: 'The Breath of the wild'})
    

    return (
      <div className="App">
      
      <AppBar
      position="sticky">
       <Toolbar
        style={{"font-size": "25px"}}
        className="title_app"
        position="sticky"
        >My Video games
        </Toolbar>
      </AppBar>
      
        <div className="App-header">
          <FilterGame jeux={GAME} />
        </div>
      </div>
    );
  }
}

export default App;

