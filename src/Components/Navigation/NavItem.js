import React from 'react';
import './NavItem.css';

const navitem = (props) => {
  const active = {};

  if(props.name === props.current) {
    active.backgroundImage = 'linear-gradient(to right, #40a9f9 , #d33ff9)';
  }

  return (
      <p className='navItem' onClick={props.click} style={active}><b>{props.name}</b></p>
  );
}

export default navitem;
