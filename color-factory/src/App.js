import React, {useState} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import ColorsList from './ColorsList';
import RoutePaths from './RoutePaths';

const App = () => {
  const [colors, setColors] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <RoutePaths colors={colors || App.defaultProps.colors} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: ['red', 'green', 'blue']
}

export default App;
