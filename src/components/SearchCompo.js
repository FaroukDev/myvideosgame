import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

class SearchCompo extends Component {
  constructor(props) {
    super(props);
    console.log("filtertext", this.props.filterText);
    console.log("hello", this.props.inStockOnly);

  }


  handleFilterTextChange = (e) => {
    //console.log(e.target.value);
    this.props.handleFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    //console.log(e.target.checked);
    this.props.handleInStockChange(e.target.checked);
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="search"
          text={this.props.filterText}
          onChange={this.handleFilterTextChange}
          style={{"color": "white"}}
          
        />
        <Checkbox
          type="Checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange}
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        Produit en stock seulement
      </div>
    );
  }
}

export default SearchCompo;
