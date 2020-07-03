import React, { Component } from "react";

class SearchCompo extends Component {
  constructor(props) {
    super(props);
    console.log("filtertext", this.props.filterText);
    console.log("hello", this.props.inStockOnly);

    this.state = {};
  }
  ///JE ME SUIS ARRETE A 9 MIN DE LA VIDEO

  handleFilterText = (e) => {
    console.log(e.target.value);
  };

  handleInStockChange = (e) => {
    console.log(e.target.checked);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={this.handleFilterText}
        />
        <input type="checkbox" onChange={this.handleInStockChange} /> Produit en
        stock seulement
      </div>
    );
  }
}

export default SearchCompo;
