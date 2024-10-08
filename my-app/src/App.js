import React from "react";
import "./App.css";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";

function App() {
  return (
    
    <div className="App">
      <header className="app-header">
        
          <div className="row align-items-center">
          
          <div className="col-md-2">
              <div className="date">
                October 25, 2023
              </div>
            </div>
          
            <div className="col-md-2">
              <div className="search-bar">
                <input type="text" className="form-control" placeholder="Search..." />
              </div>
            </div>
            <div className="col-md-4">
              <h1>STOREMATE</h1>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <div className="profile-info">
                <img src="/images/profile-image.jpg" alt="Profile" className="profile-image" />
                <p className="profile-name">Attanayaka</p>
              </div>
            </div>
          
        </div>
      </header>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            <Cart />
          </div>
          <div className="col-md-7 ">
            <ProductList />
          </div>
        </div>
        </div>
      <br></br>
      <div className="container down-box">
      <div className="row ">
        <div className="col-md-6">
          <button className="btn button-left btn-primary"> New Button 1</button>
          <button className="btn button-left btn-primary"> Discount</button>
          <button className="btn button-left btn-primary"> Tax</button>
          <button className="btn button-middleup "> Item Count : 400</button>
          
        </div>
        <div className="col-md-6">
          <button className="btn button-rightup btn-success"> Cash</button>
          <button className="btn button-rightup btn-warning">Pay</button>
          <button className="btn button-rightup btn-warning">Card</button>
          <button className="btn button-rightup btn-warning">Credit</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button className="btn button-left btn-primary">New Button 2</button>
          <button className="btn button-left btn-primary">Shipping</button>
          <button className="btn button-left btn-primary">Packaging</button>
          <button className="btn button-middle btn-primary">Total</button>
        </div>
        <div className="col-md-6">
          <button className="btn button-right btn-primary">Button</button>
          <button className="btn button-right btn-primary">Button</button>
          <button className="btn button-right btn-primary">Button</button>
          <button className="btn button-right btn-primary">Button</button>
        </div>
      </div>
      </div>
   
    </div>
  );
}

export default App;
