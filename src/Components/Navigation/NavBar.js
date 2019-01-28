import React, { Component } from 'react';
import './NavBar.css';
import NavItem from './NavItem';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      pages: props.pages,
      showMenu:false
    };
  }

  toggleMenuHandler = () => {
    const doesShow = this.state.showMenu;
    this.setState({showMenu: !doesShow});
  }

  handleClick = (index) => {
    this.props.click(this.state.pages[index].name);
  }

  render() {

    const navBarStyle = {
      width: '5%'
    };

    const menuButtonStyle = {
      margin: '0px'
    }

    let pages = null;
    if (this.state.showMenu) {
      pages = (
        <div>
          {this.state.pages.map((page, index) => {
            return <NavItem
              name={page.name}
              click={() => this.handleClick(index)}/>
          })}
        </div>
      );
      navBarStyle.width = '20%';
      menuButtonStyle.margin = '5px';
    }
    return (
      <div className='NavBar' style={navBarStyle}>
        <button
          onClick={this.toggleMenuHandler}
          style={menuButtonStyle}
          className='menuButton'>
        </button>
        {pages}
      </div>
    );
  }
}

export default NavBar;
