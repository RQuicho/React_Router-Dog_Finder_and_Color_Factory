import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DogList = ({dogs}) => {
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
        </div>
      ))}
    </div>
  );
};

export default DogList;