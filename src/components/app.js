import React, { Component } from 'react';
import AcharyaList from '../containers/acharya_list';
import SearchBar from '../containers/search_bar';
export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar/>
      	<AcharyaList/>
      </div>
    );
  }
}
