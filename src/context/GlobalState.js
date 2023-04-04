import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import reducer from "./Reducer.js";

//create Globel context
export const GlobalContext = createContext([]);

//create a Provider for Global Context
export const GlobalProvider = ({ children }) => {
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const newData = response.data.map((item) => {
          const dis = Math.floor(Math.random() * 100) + 1;
          return {
            ...item,
            discount: dis,
          };
        });
        setproductData(newData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Actions for products

  // Delete Existing Transaction Action
  function deleteProduct(id) {
    const array = productData.filter((product) => product.id !== id);
    setproductData(array);
  }

  // Add New Product Action
  function addProduct(newProduct) {
    const updatedProducts = [newProduct,...productData];
    setproductData(updatedProducts);
  }

  //Edit Description and Amount
  function editProduct(updatedProduct) {
    const updatedProducts = productData.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }
      return product;
    });
    setproductData(updatedProducts);
  }
  function updateDiscount() {
    const updatedProductData = productData.map((product) => {
      return { ...product, discount: 0 };
    });

    setproductData(updatedProductData);
  }

  return (
    <GlobalContext.Provider
      value={{
        productData,
        addProduct,
        deleteProduct,
        editProduct,
        updateDiscount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
