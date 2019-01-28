import React from 'react';

const navitem = (props) => {
  return (
    <div className='NavItem'>
      <p onClick={props.click}>{props.name}</p>
    </div>
  );
}

export default navitem;
