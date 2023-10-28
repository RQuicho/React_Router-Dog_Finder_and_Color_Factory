import React from 'react';
import { Link } from 'react-router-dom';

const ColorDetail = ({color, name}) => {
  return (
    <div style={{backgroundColor:`${color}`, color: 'white'}}>
      <h1>THIS IS {name.toUpperCase()}</h1>
      <h2><Link to='/colors' style={{color: 'white'}}>Go Back</Link></h2>
    </div>
  )
}

export default ColorDetail;