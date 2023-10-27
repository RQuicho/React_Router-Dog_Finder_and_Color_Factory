import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const DogDetails = ({dog}) => {
  if (!dog) return <Navigate to='/dogs' />
  return (
    <div>
      <img src={dog.src} alt={dog.name}/>
      <h1>Name: {dog.name}</h1>
      <h2>Age: {dog.age} years old</h2>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to='/dogs'>Go Back</Link>
    </div>
  )
}

export default DogDetails;