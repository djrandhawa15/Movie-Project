import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import About from '../pages/About';
import Fav from '../pages/Fav';



function AppRouter() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
           
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/fav' element={<Fav/>}/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
    
  )
}

export default AppRouter