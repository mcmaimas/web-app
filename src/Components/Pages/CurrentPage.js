import React, { Component } from 'react';
import Demo from './Demo';
import Home from './Home';
import Projects from './Components/Pages/Projects';


class CurrentPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      pages: [
          {name: 'Home'},
          {name: 'Projects'},
          {name: 'Demo'}
      ],
      currentPage: this.props.current
    };
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
      <div className="currentPage">
        {page}
      </div>
    );
  }
}

export default CurrentPage;
