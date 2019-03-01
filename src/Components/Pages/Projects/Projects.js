import React from 'react';
/*
* For this component I want to create a way to highlight the major projects I've created over the years.
* These include:
*   Senior Design
*   ViteCoin
*   Buri
*   DB 2nd Intern Rotation
*   Full Page Tabs?
*/
const projects = (props) => {
  return (
    <div className='Projects'>
      {props.pageName}
    </div>
  );
}

export default projects;
