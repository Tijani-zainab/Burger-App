// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Routes, Route } from "react-router-dom";

import BurgerBuider from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component  {

  render () {
    return (
      <div>
        <Layout>

          <Routes>
            <Route path="/" element={< BurgerBuider />}></Route>
            <Route path="/checkout" element={< Checkout />}></Route>

          </Routes>
           {/* <BurgerBuider /> 
           <Checkout /> */}
        </Layout>
      </div>  
    );
  }
}

export default App;
