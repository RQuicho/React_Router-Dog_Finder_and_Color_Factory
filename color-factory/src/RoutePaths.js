import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';

const RoutePaths = () => {
  // const [colors, setColors] = useState(['red', 'green', 'blue']);
  const initialState = [
    {name: 'red', color: '#ff0000'},
    {name: 'green', color: '#008000'},
    {name: 'blue', color: '#0000ff'},
  ]
  const [colors, setColors] = useState(initialState);

  const addColor = (newColor) => {
    setColors(colors => [{...newColor}, ...colors]);
  }

  return (
    <Routes>
      <Route path='/colors' element={<ColorsList colors={colors} />}></Route>
      {colors.map(color => (
        <Route
          key={color.name}
          path={`/colors/${color.name}`}
          element={<ColorDetail color={color.color} name={color.name} />}
        >
        </Route>
      ))}
      <Route path='/colors/new' element={<ColorForm addColor={addColor}/>}></Route>
      <Route path='*' element={<Navigate to='/colors' />} />
    </Routes>
  )
}

export default RoutePaths;