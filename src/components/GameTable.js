import React, { Component } from 'react';
import GameCategory from './GameCategory';
import GameRow from './GameRow';

class GameTable extends Component {
    render() {
        return (
            <div style={{"backgroundColor": "pink"}}>
                GameTable
                <GameCategory/>
                <GameRow/>
            </div>
        );
    }
}

export default GameTable;