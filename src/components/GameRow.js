import React, { Component } from 'react';

class GameRow extends Component {
    constructor(props) {
        super(props); 
        console.log("les jeux", props.jeu);
        
    }
    render() {
        let name;
        if( this.props.jeu.stocked) {
                name = this.props.jeu.name;
        } else {
                name = <span style={{"color" : "salmon" }}>{this.props.jeu.name}</span>
        }
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.jeu.price}</td>
            </tr>
        );
    }
}

export default GameRow;