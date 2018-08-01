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
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="search_bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
