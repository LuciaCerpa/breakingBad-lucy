import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import MainPage from '../components/MainPage/MainPage.jsx';

function App() {
  

  return (
    <div className="container my-3">
      <h1>Breaking Bad Wiki</h1>
      <hr />
      
      <Routes>
        <Route path="/home" element={<MainPage/>} />
      </Routes>  
    </div>
  )
}

export default App
