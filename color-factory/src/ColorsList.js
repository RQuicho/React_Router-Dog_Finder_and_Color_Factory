import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({colors}) => {
  return (
    <div>
      <div style={{backgroundColor: 'black', color: 'white'}}>
        <h1>Welcome to the color factory</h1>
        <h2><Link to='/colors/new' style={{color: 'white'}}>Add a color</Link></h2>
      </div>
      <p>Please select a color</p> 
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default ColorsList;