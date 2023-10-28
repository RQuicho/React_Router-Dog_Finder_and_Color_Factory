import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutePaths from './RoutePaths';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <RoutePaths />
      </BrowserRouter>
    </div>
  );
}

export default App;
