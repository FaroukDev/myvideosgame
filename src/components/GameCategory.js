import React, { Component } from 'react';

class GameCategory extends Component {
    render() {
        return (
           <tr>
                <th colSpan="1">
                    {this.props.category}
                </th>
           </tr>
        );
    }
}

export default GameCategory;