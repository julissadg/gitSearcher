import { useState } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Navbar from './components/Navbar';
import Repositories from './routes/Repositories';
import Users from './routes/Users';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
