import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import LoginSignup from './components/LoginSignUp/LoginSignup';
function App() {
  return (
    <>
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path='*' exact Component={Home}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/services' exact Component={Services}/>
      <Route path='/sign-up' exact Component={LoginSignup}/>  
      </Routes>
      </Router>
    </>
  );
}

export default App;
