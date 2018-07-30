import React, { Component } from "react";

//class base component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    //set inital state
    this.state = {
      term: ""
    };
    // console.log("test2");
  }
  render() {
    return <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />;
  }
}

export default SearchBar;
