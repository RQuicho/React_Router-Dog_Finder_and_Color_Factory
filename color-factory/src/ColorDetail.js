import React from 'react';
import { Link } from 'react-router-dom';

const ColorDetail = ({color}) => {
  return (
    <div style={{backgroundColor:`${color}`, color: 'white'}}>
      <h1>THIS IS {color}</h1>
      <h2><Link to='/colors' style={{color: 'white'}}>Go Back</Link></h2>
    </div>
  )
}

export default ColorDetail;