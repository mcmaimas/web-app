import React, { Component } from 'react';
import './App.css';
import NavBar from '../Components/Navigation/NavBar';
import Timeline from '../Components/Pages/Timeline/Timeline';
import DashBoard from '../Components/Pages/DashBoard/DashBoard';
import DataViz from '../Components/Pages/DataViz/DataViz';
import Projects from '../Components/Pages/Projects/Projects';
import Home from '../Components/Pages/Home/Home';
import Footer from '../Components/Footer/Footer';


class App extends Component {
  state = {
    //COuld make a seperate data file of pages
    pages: [
          {name: 'Home'},
          {name: 'Timeline'},
          {name: 'Data Visualization'},
          {name: 'DashBoard'},
          {name: 'Projects'}
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

    switch(this.state.currentPage) {
      case this.state.pages[0].name:
        page = (<Home />);
        break;
      case this.state.pages[1].name:
        page = (<Timeline pageName={this.state.currentPage}/>);
        break;
      case this.state.pages[2].name:
        page = (<DataViz pageName={this.state.currentPage}/>);
        break;
      case this.state.pages[3].name:
        page = (<DashBoard pageName={this.state.currentPage}/>);
        break;
      case this.state.pages[4].name:
          page = (<Projects pageName={this.state.currentPage}/>);
          break;
      default:
        page = (<Home />);
    }
    return (
      <div className="App">
      <NavBar
        pages={this.state.pages}
        click={this.getCurrentPage}
        current={this.state.currentPage}/>
      {page}
      <Footer />
      </div>
    );
  }
}

export default App;
