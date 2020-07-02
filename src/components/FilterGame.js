import React, { Component } from 'react'
import SearchCompo from './SearchCompo';
import GameTable from './GameTable';


export default class FilterGame extends Component {
    render() {
        return (
           <div style={{"backgroundColor": "blue"}}>
            FilterGame
            <SearchCompo/>
            <GameTable/>
           </div>
        )
    }
}

