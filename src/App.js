import { useContext } from "react";
import "./App.css";
import Products from "./components/product/Products";
import ProductDetails from "./components/product/ProductDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { GlobalContext } from "./context/GlobalState";
import AddProduct from "./components/product/AddProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
