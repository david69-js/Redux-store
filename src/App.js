import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Burger from "./styled-components/Burger";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Burger/>
      <Header/>
      <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
