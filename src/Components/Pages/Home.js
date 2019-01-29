import React from 'react';
import profilePic from '../../Images/rocks.jpg';
import './Home.css'

const Home = (props) => {
  return (
    <div id='bg'>
      <img src={profilePic} />
    </div>
  );
}

export default Home;
