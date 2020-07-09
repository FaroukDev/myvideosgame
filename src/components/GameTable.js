import React, { Component } from 'react';
import GameCategory from './GameCategory';
import GameRow from './GameRow';
import Grid from '@material-ui/core/Box';

class GameTable extends Component {
    constructor(props) {
        super(props); 
        console.log("les jeux les jeux", props.jeux);
        
        
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let lastCat;

        const rows = [];
        this.props.jeux.forEach(jeu => {
            //console.log("jeu", jeu.name);
            if(jeu.name.toLowerCase().indexOf(filterText) === -1 ) {
                return;
            }
            if(inStockOnly && !jeu.stocked) {
                return;
            }
            if(jeu.category !== lastCat) {
                rows.push(<GameCategory category={jeu.category}/>)
            }
            rows.push(<GameRow key={jeu.name} jeu={jeu}/>)
            lastCat = jeu.category;
            
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
                    {/* <GameCategory category={"FPS"} /> */}
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {rows}
                    </Grid>
                    
                    
                </table> 
            </div>
        );
    }
}

export default GameTable;