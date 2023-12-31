import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Nav = ({ dogs }) => {
  const links = dogs.map(dog => (
    <NavLink
      key={dog.name}
      to={`/dogs/${dog.name.toLowerCase()}`}
    >
      {dog.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink to='/dogs' end>
        Home
      </NavLink>
      {links}
    </nav>
  );
};

export default Nav;