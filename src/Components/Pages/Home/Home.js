import React, {Component} from 'react';
import withBackgroundPic from '../../../assets/edit.png';
import './Home.css'


const home = (props) => {

  return (
    <div  id='bg'>
      <img src={withBackgroundPic} />
      <div className='text-block'>
        <h1>I am Sam.</h1>
        <h3>Welcome to my virtual portfolio.</h3>
        <h5>Explore the pages to learn about who I am and what I have done.</h5>
      </div>
    </div>
  );
}

export default home;
