import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import Posts from './screens/Posts';
import Users from './screens/Users';
import './App.css'

function App() {

  return(

  <Routes>
    <Route path="/" element={<Users/>}/>
    <Route path='/posts/:id' element={<Posts/>}/>
  </Routes>

  ) 
}

export default App;
