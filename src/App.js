import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navigation/NavBar';

class App extends Component {
  state = {
    pages: [
        {name: 'Style 1'},
        {name: 'Style 2'},
        {name: 'Style 3'},
        {name: 'Style 4'}
    ],
    currentPage: 'Style 1'
  }

  getCurrentPage = (newCurrent) => {
    this.setState({
      currentPage: newCurrent
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar
          pages={this.state.pages}
          click={this.getCurrentPage}/>

          <p>{this.state.currentPage}</p>

      </div>
    );
  }
}

export default App;
