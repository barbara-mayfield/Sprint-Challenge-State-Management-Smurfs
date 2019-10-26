import React from 'react';

const Smurf = (props) => {
  console.log(props, "<- Smurf Props")
  return (
  <div>
  <p>Name: {props.name}</p>
  <p>Age: {props.age}</p>
  <p>Height: {props.height}</p>
  </div>
  )
};

export default Smurf;