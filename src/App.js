import './App.css';
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catagory from './components/Catagory/Catagory';


export const CatagoryContex = createContext();

function App() {
  const [catagory, setCatagoty] = useState("laptop")
  return (
    <CatagoryContex.Provider value={[catagory, setCatagoty]} className="App">
      <p>Value : {catagory}</p>
      <Header ></Header>
      <Home></Home>
      <Catagory></Catagory>
    </CatagoryContex.Provider>
  );
}

export default App;
