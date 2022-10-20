import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
    {
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer />} />
        <Route path='/category/:categoryId' element = {<ItemListContainer />} />
        <Route path='/item/:itemId' element = {<ItemDetailContainer />} />

      </Routes>
    
    </BrowserRouter>
    }    
  </>
  );
}

export default App;
