import React, { Component } from 'react';
import './NavBar.css';
import NavItem from './NavItem';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      pages: props.pages,
      showMenu: true,
      current: props.current
    };
  }

  //Toggles whether or not to show full menu
  toggleMenuHandler = () => {
    const doesShow = this.state.showMenu;
    this.setState({showMenu: !doesShow});
  }

  //Passes the current page back up to parent
  handleClick = (index) => {
    this.setState({current: this.state.pages[index].name})
    this.props.click(this.state.pages[index].name);
  }

  render() {

    const navBarStyle = {
      width: '0%'
    };


    let pages = null;
    if (this.state.showMenu) {
      pages = (
        <ul className='pagesList'>
          {this.state.pages.map((page, index) => {
            return <NavItem
              name={page.name}
              click={() => this.handleClick(index)}
              current={this.state.current}/>
          })}
        </ul>
      );

      navBarStyle.width = '20%';
      navBarStyle.height = '100vh';
      navBarStyle.opacity = '0.85';
      navBarStyle.transform = 'skewX(-10deg)';
    }
    return (
      <div className='NavBar' style={navBarStyle}>
        <button
          onClick={this.toggleMenuHandler}
          className='menuButton'>
        </button>
        {pages}
      </div>
    );
  }
}

export default NavBar;
