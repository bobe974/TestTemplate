import React from "react";
import ProductCard from "../components/productCard";
import Header from "../components/header";
function Home() {
  return (
    <div>
      <Header></Header>
      <div class="grid grid-cols-4 gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        
      </div>
    </div>
  );
}

export default Home;
