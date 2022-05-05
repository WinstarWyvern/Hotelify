import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Hotel, About } from './import/importPages'
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Hotel" element={<Hotel />}></Route>
        <Route exact path="/About" element={<About/>}></Route>
      </Routes>
    </>


  )
}

export default App
