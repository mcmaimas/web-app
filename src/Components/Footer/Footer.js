import React from 'react';
import './Footer.css';
import gitHubLogo from '../../assets/GitHub-Mark-Light-32px.png';
import linkedinLogo from '../../assets/In-2C-34px-R.png';
import faceBookLogo from '../../assets/32px-F_icon.svg.png';

const footer = () => {
  return (
    <div className='footer'>
      <a href='https://www.linkedin.com/in/sam-mcmurray'>
        <img className='svg' src={linkedinLogo} alt=''/>
      </a>

      <a href='https://github.com/mcmaimas'>
        <img className='svg' src={gitHubLogo} alt=''/>
      </a>

      <a href='https://www.facebook.com/sam.mcmurray.334'>
        <img className='svg' src={faceBookLogo} alt=''/>
      </a>
    </div>
  );
}

export default footer;
