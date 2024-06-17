import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
