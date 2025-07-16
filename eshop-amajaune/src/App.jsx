import './App.css'
import Header from './components/header'
import { Outlet} from "react-router-dom";
import { getProduct } from './data/articles';
import { ProductContext } from './context/ProductContext';
import { useState } from 'react';

function App() {
  
   const [produits, setProduits] = useState(() => getProduct());

   const addProduct = (formProductData) => {
      console.log("DATA " + formProductData.nom)
      const tempProduits = [...produits, formProductData];
      setProduits(tempProduits)
   }

return (
     <ProductContext.Provider value={{ produits, addProduct }}>
     <Header></Header>
     <Outlet/>
     </ProductContext.Provider>
  );
}


export default App
