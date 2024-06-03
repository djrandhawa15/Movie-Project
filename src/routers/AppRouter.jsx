import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Fav from "../pages/Fav";
import Single from "../pages/Single";
import PageNotFound from "../pages/PageNotFound";


function AppRouter() {
  return (
    // Add inside browserrouter before npm run build - basename='/react-movie'
    <BrowserRouter basename='/cinehub'>
      <div>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/single/:id" exact element={<Single />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
