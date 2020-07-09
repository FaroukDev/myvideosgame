import React, { Component } from 'react';
import GameCategory from './GameCategory';
import GameRow from './GameRow';

class GameTable extends Component {
    constructor(props) {
        super(props); 
        console.log("les jeux les jeux", props.jeux);
        
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        this.props.jeux.forEach(jeu => {
            console.log("jeu", jeu.name);
            if(jeu.name.indexOf(filterText) === -1 ) {
                return;
            }
            if(inStockOnly && !jeu.stocked) {
                return;
            }
            rows.push(<GameRow key={jeu.name} jeu={jeu}/>)
            
        });
        //rows.push(<GameRow key="1"/>);
        //rows.push(<GameRow key="2"/>);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <GameCategory category={"FPS"}/>
                    {rows}
                </table> 
            </div>
        );
    }
}

export default GameTable;