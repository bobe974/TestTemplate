import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { getProduct } from "./data/articles";
import { ProductContext } from "./context/ProductContext";
import { useState } from "react";

function App() {
  const [produits, setProduits] = useState(() => getProduct());

  const addProduct = (formProductData) => {
    console.log("DATA ADD" + formProductData.nom);
    const tempProduits = [...produits, formProductData];
    setProduits(tempProduits);
  };

  const updateProduct = (formProductData) => {
    console.log("DATA UPDATE", formProductData.nom);
    const tempProduits = produits.map((p) =>
      p.id === formProductData.id ? formProductData : p
    );
    setProduits(tempProduits);
  };

  const deleteProduct = (formProductData) => {
    console.log("DATA DELETE", formProductData.nom);
    const tempProducts = produits.filter((p) => p.id !== formProductData.id);
    setProduits(tempProducts);
  };

  return (
    <ProductContext.Provider value={{ produits, addProduct, updateProduct, deleteProduct }}>
      <Header></Header>
      <Outlet />
    </ProductContext.Provider>
  );
}

export default App;
