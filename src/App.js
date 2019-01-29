import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navigation/NavBar';
import Demo from './Components/Pages/Demo';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';


class App extends Component {
  state = {
    pages: [
        {name: 'Home'},
        {name: 'Projects'},
        {name: 'Demo'}
    ],
    currentPage: 'Home'
  }

  getCurrentPage = (newCurrent) => {
    this.setState({
      currentPage: newCurrent
    })
  }

  render() {

    let page = null;
    if (this.state.currentPage === 'Home') {
      page = (
        <Home />
      );
    }
    else if (this.state.currentPage === 'Projects') {
      page = (
        <Projects />
      );
    }
    else {
      page = (
        <Demo />
      );
    }

    return (
      <div className="App">

          <NavBar
            pages={this.state.pages}
            click={this.getCurrentPage}/>
          {page}

      </div>
    );
  }
}

export default App;
