import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import './App.css';

function App() {
 

  return (
    <Router>
      <div>
        
        <Header/>
        <Footer/>
        <Nav/>
      
      </div>
    </Router>
  )
}

export default App
