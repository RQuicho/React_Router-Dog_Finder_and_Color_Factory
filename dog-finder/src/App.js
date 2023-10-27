import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import RoutePaths from './Routes';
import axios from 'axios';


const App = () => {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  // useEffect(() => {
  //   const loadDogs = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/dogs');
  //       setDogs({
  //         data: response.data,
  //         isLoading: false
  //       });
  //     } catch (err) {
  //       console.error("Error loading dogs:", err);
  //     }
  //   }
  //   if (dogs.isLoading) {
  //     return (
  //       <h1>Loading...</h1>
  //     );
  //   }
  //   loadDogs();
  // }, [dogs]);

  return (
    <div className='App'>
      <h1>See our Dogs!</h1>
      <BrowserRouter>
        <Nav dogs={dogs.data || App.defaultProps.dogs}/>
        <RoutePaths dogs={dogs.data || App.defaultProps.dogs}/>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://digitalartranch.com/wp-content/uploads/2014/01/CED2014-17rustydog-731x1024.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'https://4.bp.blogspot.com/-B9X0X4AqJnQ/WTIYEcyfmaI/AAAAAAAAnDU/4WhWyxZ9FOg3goyW97MycYTlyU9SCot5wCLcB/s1600/IMG_0176.JPG',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Black-Tailed_Prairie_Dog.jpg/220px-Black-Tailed_Prairie_Dog.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://metro.co.uk/wp-content/uploads/2018/02/pri_67812932-e1517563312957.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
} 

export default App;
