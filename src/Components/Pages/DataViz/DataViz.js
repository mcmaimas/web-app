import React from 'react';
/*
* For this component I want to create a network graph based on artists/related artists from spotify
* Each artist will be a node, and each related artist will be connected by an edge
*/
const dataviz = (props) => {
  return (
    <div className='DataViz'>
      {props.pageName}
    </div>
  );
}

export default dataviz;
