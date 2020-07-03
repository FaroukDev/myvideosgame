import React, { Component } from 'react'
import SearchCompo from './SearchCompo';
import GameTable from './GameTable';


export default class FilterGame extends Component {
    constructor(props) {
        super(props); 
        console.log("les jeux", props.jeux);
        this.state = {
            filterText : "",
            inStockOnly: false
        }
        
    }
    render() {
        return (
           <div >
            FilterGame
            <SearchCompo 
            filterText={this.state.filterText} 
            inStockOnly={this.state.inStockOnly}
            />
            <GameTable jeux={this.props.jeux}
             filterText={this.state.filterText} 
            inStockOnly={this.state.inStockOnly}
            />
           </div>
        )
    }
}

