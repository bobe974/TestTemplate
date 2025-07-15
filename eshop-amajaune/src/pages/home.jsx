import React, { useState } from "react";
import ProductCard from "../components/productCard";
import Header from "../components/header";
import { getProduct } from "../data/articles";

function Home() {
  //récuperer les data mock ou api
  //state = {produits:getProduct}
  const [produits, setProduits] = useState(() => getProduct());

  return (
    <div>
      <Header></Header>
      <div class="text-right p-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">
          Ajouter
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {produits.map((p) => {
          {
            console.log("img " + p.image);
          }
          return <ProductCard product={p} key={p.id}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default Home;
