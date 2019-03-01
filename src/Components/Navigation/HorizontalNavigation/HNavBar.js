import React, { Component } from 'react';
import '../NavBar.css';
import HNavItem from '../NavItem';

class HNavBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      pages: props.pages,
      showMenu:true
    };
  }

  //Toggles whether or not to show full menu
  toggleMenuHandler = () => {
    const doesShow = this.state.showMenu;
    this.setState({showMenu: !doesShow});
  }

  //Passes the current page back up to parent
  handleClick = (index) => {
    this.props.click(this.state.pages[index].name);
  }

  render() {
    const navBarStyle = {
      height: '5%',
      width: '100%'
    };
    const navItemStyle = {
      float: 'left'
    }



    let pages = null;
    if (this.state.showMenu) {
      pages = (
        <ul>
          {this.state.pages.map((page, index) => {
            return <HNavItem
              name={page.name}
              click={() => this.handleClick(index)}
              style={navItemStyle}/>
          })}
        </ul>
      );
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

export default HNavBar;
