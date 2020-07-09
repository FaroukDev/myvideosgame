import React, { Component } from "react";
import SearchCompo from "./SearchCompo";
import GameTable from "./GameTable";

export default class FilterGame extends Component {
  constructor(props) {
    super(props);
    console.log("les jeux", props.jeux);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  handleFilterTextChange = (e) => {
    console.log("parent", e);
    this.setState({ filterText: e });
  };

  handleInStockChange = (e) => {
    console.log("parent", e);
    this.setState({ inStockOnly: e });
  };

  render() {
    return (
      <>
        <SearchCompo
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleInStockChange={this.handleInStockChange}
        />
        <GameTable
          jeux={this.props.jeux}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </>
    );
  }
}
