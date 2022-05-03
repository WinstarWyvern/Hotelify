import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Hotel } from './imports'
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Hotel" element={<Hotel />}></Route>
      </Routes>
    </>


  )
}

export default App
