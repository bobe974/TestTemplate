import './App.css'
import Header from './components/header'
import { Outlet} from "react-router-dom";
import { getProduct } from './data/articles';
import { ProductContext } from './context/ProductContext';
import { useState } from 'react';

function App() {
  
   const [produits, setProduits] = useState(() => getProduct());

return (
     <ProductContext.Provider value={{ produits, setProduits }}>
     <Header></Header>
     <Outlet/>
     </ProductContext.Provider>
  );
}


export default App
