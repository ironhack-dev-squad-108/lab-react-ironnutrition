import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <input 
        className="Search input" 
        value={this.props.value}
        onChange={e => this.props.onSearch(e.target.value)}
        placeholder="Search food"/>
    );
  }
}

export default Search;
