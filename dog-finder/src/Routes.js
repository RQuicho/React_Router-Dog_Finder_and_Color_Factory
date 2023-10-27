import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NotFound from './NotFound';

const RoutePaths = ({dogs}) => {
  return (
    <Routes>
      <Route path='/dogs' element={<DogList dogs={dogs}/>}></Route>
      {dogs.map(dog => (
        <Route 
          key={dog.name}
          path={`/dogs/${dog.name.toLowerCase()}`} 
          element={<DogDetails dog={dog} />} 
        >
        </Route>
      ))}
      <Route path='*' element={<Navigate to='/dogs' />} />
      {/* <Route path='*' element={<NotFound />}></Route> */}
    </Routes>
  )
}

export default RoutePaths;