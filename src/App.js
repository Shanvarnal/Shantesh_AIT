import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './component/Home.js';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Cart from './component/Cart';
import OrderConfirm from './component/OrderConfirmPage';
import AddProduct from './component1/AddProduct';
import ProductList from './component1/ProductList';
import User from './component1/User';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Mr from './component1/Mr';


function App() {
  const [user,setUSer]=useState("user");
  const [admin,setAdmin]=useState();
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={ <Home user={user} admin={admin}/>} />
      <Route path="/login" element={<Login setUSer={setUSer} setAdmin={setAdmin}/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/cart" element={<Cart user={user}/>} />
      <Route path="/order" element={<OrderConfirm/>} />
      <Route path="/user" element={ <User/>} />
      <Route path="/mr" element={ <Mr/>} />
      <Route path="/product" element={ <ProductList/>} />
      </Routes>
        {/* <Home/> */}
        {/* <Login/>
        <SignUp/>
        <AddProduct/>
        <ProductList/> */}
      </Router>

    </>
  );
}

export default App;
