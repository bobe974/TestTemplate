
import ProductCard from "../components/productCard";
import { useProducts } from "../context/ProductContext";

function Home() {
 
  const { produits } = useProducts();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 content-center mt-8">
        {produits.map((p) => {
          return <ProductCard product={p} key={p.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;