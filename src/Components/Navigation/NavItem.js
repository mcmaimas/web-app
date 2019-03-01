import React from 'react';
import './NavItem.css';

const navitem = (props) => {
  const active = {};

  if(props.name === props.current) {
    active.color = 'red'
  }

  return (
      <p className='navItem' onClick={props.click} style={active}><b>{props.name}</b></p>
  );
}

export default navitem;
