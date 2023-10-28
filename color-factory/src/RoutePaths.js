import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';

const RoutePaths = () => {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  const addColor = (newColor) => {
    setColors(colors => [newColor.name, ...colors]);
  }

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
      <Route path='/colors/new' element={<ColorForm addColor={addColor}/>}></Route>
      <Route path='*' element={<Navigate to='/colors' />} />
    </Routes>
  )
}

export default RoutePaths;