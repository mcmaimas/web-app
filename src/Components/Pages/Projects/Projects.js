import React from 'react';
import './Projects.css';
import art from '../../../assets/ashkan-forouzani-1273288-unsplash.jpg';
// import blurred from '../../../assets/dmitry-bayer-1262313-unsplash.jpg';
// import coffee from '../../../assets/jarrod-winkler-1348990-unsplash.jpg';
// import frank from '../../../assets/christian-salow-483115-unsplash.jpg';

/*
* For this component I want to create a way to highlight the major projects I've created over the years.
* https://alligator.io/css/pure-css-parallax/
* These include:
*   Senior Design: Coffee Beans: Jarrod Winkler
*   ViteCoin: Graffiti:  Ashkan Forouzani
*   Buri: Blurred Lights: Dmitry Bayer
*   DB 2nd Intern Rotation: Frankfurt skyline:  Christian Salow
*   Parallax Scrolling
*/



const projects = (props) => {
  const rightShift = {
    transform: 'skewY(-1.5deg)'
  }

  const leftShift = {
    transform: 'skewY(1.5deg)'
  }

  return (
    <main className="wrapper">
    <section class="section parallax coffee">
      <h1>1</h1>
    </section>
    <section className="section static" style={leftShift}>
      <h1>Boring1</h1>
    </section>
    <section className="section parallax blur">
      <h1>2</h1>
    </section>
    <section className="section static" style={rightShift}>
      <h1>Boring2</h1>
    </section>
    <section className="section parallax art">
      <h1>3</h1>
    </section>
    <section className="section static" style={leftShift}>
      <h1>Boring3</h1>
    </section>
    <section class="section parallax frank">
      <h1>4</h1>
    </section>
    <section className="section static" style={rightShift}>
      <h1>Boring4</h1>
    </section>
  </main>



  );
}

export default projects;
