import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products"

function App() {
  return (
    <Router>
    <div className='container'>
    <Navbar></Navbar>
      <Switch>
        <Route path="/cart">
        <Cart></Cart>
        </Route>
        <Route path="/products">
          
        </Route>
        <Route path="/">
         <Products></Products>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
