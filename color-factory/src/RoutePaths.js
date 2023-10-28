import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';

const RoutePaths = ({colors}) => {
  return (
    <Routes>
      <Route path='/colors' element={<ColorsList colors={colors} />}></Route>
      {colors.map(color => (
        <Route
          key={color}
          path={`/colors/${color}`}
          element={<ColorDetail color={color} />}
        >
        </Route>
      ))}
      <Route path='*' element={<Navigate to='/colors' />} />
    </Routes>
  )
}

export default RoutePaths;